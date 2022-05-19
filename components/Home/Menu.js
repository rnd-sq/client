// @ts-check
import React from "react";
import LoadMap from "./LoadMap";
import MapEditor from "./MapEditor";
import RestartGame from "./RestartGame";
import RollTheDice from "./RollTheDice";
/**
 * @param {{ player: import("../../utils/Player").default, rerender: () => void, setMap: React.Dispatch<React.SetStateAction<Field>> }} param0
 * @returns 
 */
export default function Menu({ player, rerender, setMap }) {
    return <div id="menu">
        <RollTheDice player={player} rerender={rerender} />
        <RestartGame player={player} rerender={rerender} />
        <LoadMap setMap={setMap} />
        <MapEditor />
        <div id="player-data">{"Moves left: " + player.movesLeft}</div>
    </div>
}