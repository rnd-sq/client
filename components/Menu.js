// @ts-check
import React from "react";
import RollTheDice from "./RollTheDice";

/**
 * @param {{ player: import("../utils/Player").default }} param0
 * @returns 
 */
export default function Menu({ player }) {
    return <div id="menu">
        <RollTheDice player={player} />
    </div>
}