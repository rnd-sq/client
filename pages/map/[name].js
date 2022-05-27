import React from "react";
import { useRouter } from "next/router";
import Game from "../../components/Home/Game";
import Player from "../../utils/Player";

/**
 * @param {string} mapName 
 */
function useMap(mapName) {
    const [map, setMap] = React.useState(null);
    React.useEffect(() => {
        fetch(`/api/maps/getAll`)
            .then(res => res.json())
            .then(json => {
                const map = json.find(m => m.name === mapName);
                setMap(map);
            });
    }, [mapName]);
    return map;
}

// @ts-check
// TODO: The game does render but cannot move the player for now
export default function Gameplay() {
    const mapName = useRouter().query.name;
    const mapData = useMap(mapName);
    const map = mapData && JSON.parse(mapData.data);

    const player = React.useMemo(() => Array.isArray(map) && new Player(map), [map]);

    return player && <Game map={map} pos={player.position} />;
}