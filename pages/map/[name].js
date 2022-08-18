import React from "react";
import { useRouter } from "next/router";
import Game from "../../components/Home/Game";
import Player from "../../utils/Player";
import useForceUpdate from "../../utils/useForceUpdate";
import axios from "axios";
import { NotificationContainer, NotificationManager } from "react-notifications";
import Menu from "../../components/Home/Menu";
import 'react-notifications/lib/notifications.css';
import Head from "next/head";

/**
 * @param {string} mapName 
 */
function useMap(mapName) {
    const [map, setMap] = React.useState(null);
    React.useEffect(() => {
        fetch(`/api/maps/all`, {
            method: "POST",
            body: JSON.stringify({
                query: mapName
            }),
        })
            .then(res => res.json())
            .then(json => {
                const map = json.data.find(m => m.name === mapName);
                setMap(map);
            });
    }, [mapName]);
    return map;
}

// @ts-check
export default function Gameplay() {
    const rerender = useForceUpdate();

    // Map
    const mapName = useRouter().query.name;
    const mapData = useMap(mapName);
    const map = React.useMemo(() => (mapData && mapData.data) ?? [], [mapData]);

    // Player
    const player = React.useMemo(() => map.length > 0 && new Player(map), [map]);

    const move = React.useCallback(
        /**
         * @param {KeyboardEvent} e
         */
        e => {
            e.preventDefault();
            if (player.hasWin())
                return;

            if (e.key === "ArrowUp")
                player.go("up");

            if (e.key === "ArrowDown")
                player.go("down");

            if (e.key === "ArrowLeft")
                player.go("left");

            if (e.key === "ArrowRight")
                player.go("right");

            // If the player lost, show a notification and restart the game
            if (player.hasLost()) {
                NotificationManager.error("You touched X. Now you need to go again from the beginning!");
                player.restart();
            }

            // If the player won, show a notification and restart the game
            else if (player.hasWin()) 
                // Add to completed maps
                axios.put("/api/users/completedMaps", {
                    mapName,
                    token: localStorage.getItem("token")
                })
                    .then(req => NotificationManager.success(req.data.message))
                    .catch(e => NotificationManager.warning(e.response.data.message));

            // Update the UI
            rerender();
        },
        [player, rerender, mapName]
    );

    // Add event listener
    React.useEffect(() => {
        document.addEventListener("keydown", move);
        return () => document.removeEventListener("keydown", move);
    }, [move]);

    return <>
        <Head>
            <title>{mapName}</title>
        </Head>
        {player && <>
            <Menu player={player} rerender={rerender} isDefaultGameplay={false} />
            <Game map={map} pos={player.position} />
            <NotificationContainer />
        </>}
    </>;
}