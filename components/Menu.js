// @ts-check
import React from "react";
import RollTheDice from "./RollTheDice";

/**
 * @param {{ player: import("../utils/Player").default }} param0
 * @returns 
 */
export default function Menu({ player }) {
    return <div id="menu">
        {/* Moves left does not display */}
        {/* Add styles for notifications */}
        <div id="player-data">{"Moves left: " + player.movesLeft}</div>
        <RollTheDice player={player} />
    </div>
}