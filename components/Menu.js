// @ts-check
import React from "react";
import useForceUpdate from "../utils/useForceUpdate";
import RollTheDice from "./RollTheDice";
/**
 * @param {{ player: import("../utils/Player").default }} param0
 * @returns 
 */
export default function Menu({ player }) {
    const rerender = useForceUpdate();

    return <div id="menu">
        <RollTheDice player={player} rerender={rerender} />
        <div id="player-data">{"Moves left: " + player.movesLeft}</div>
    </div>
}