import React from "react";
import { useRouter } from "next/router";
import Game from "../../components/Home/Game";
import Player from "../../utils/Player";
import useForceUpdate from "../../utils/useForceUpdate";
import { NotificationContainer, NotificationManager } from "react-notifications";
import Menu from "../../components/Home/Menu";
import 'react-notifications/lib/notifications.css';
import Head from "next/head";
import { connect } from "socket.io-client";

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

const socket = connect(process.env.NODE_ENV === "production" 
    ? "https://rnd-sq-dev.herokuapp.com" 
    : "http://localhost:5000"
);

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

            // Shortcuts
            if (e.ctrlKey && e.key === "r")
                return document.getElementById("roll-the-dice").click();

            if (e.altKey && e.key === "r")
                return document.getElementById("restart-game").click();

            // Player move keys
            if (player.hasWin())
                return;

            if (e.key === "ArrowUp" || e.key === "w")
                player.go("up");

            if (e.key === "ArrowDown" || e.key === "s")
                player.go("down");

            if (e.key === "ArrowLeft" || e.key === "a")
                player.go("left");

            if (e.key === "ArrowRight" || e.key === "d")
                player.go("right");

            // If the player lost, show a notification and restart the game
            if (player.hasLost()) {
                NotificationManager.error("You touched X. Now you need to go again from the beginning!", null, 1000);
                player.restart();
            }

            // If the player won, show a notification and restart the game
            else if (player.hasWin()) 
                // Add to completed maps
                socket.emit("complete map", mapName, localStorage.getItem("token"))

            // Update the UI
            rerender();
        },
        [player, rerender, mapName]
    );

    // Add event listener
    React.useEffect(() => {
        document.addEventListener("keydown", move);
        socket.on("notification", (type, message) =>
            NotificationManager[type](message)
        );
        return () => {
            socket.off("notification");
            document.removeEventListener("keydown", move); 
        };
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