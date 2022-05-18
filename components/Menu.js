// @ts-check
import React from "react";
import useForceUpdate from "../utils/useForceUpdate";
import RestartGame from "./RestartGame";
import RollTheDice from "./RollTheDice";
/**
 * @param {{ player: import("../utils/Player").default, rerender: () => void }} param0
 * @returns 
 */
export default function Menu({ player, rerender }) {
    return <div id="menu">
        <RollTheDice player={player} rerender={rerender} />
        <RestartGame player={player} rerender={rerender} />
        <div id="player-data">{"Moves left: " + player.movesLeft}</div>
    </div>
}