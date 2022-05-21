// @ts-check
import React from "react";
import Guide from "./Guide";
import LoadMap from "./LoadMap";
import MapEditor from "./MapEditor";
import PlayerData from "./PlayerData";
import RestartGame from "./RestartGame";
import RollTheDice from "./RollTheDice";
/**
 * @param {{ player: import("../../utils/Player").default, rerender: () => void, setMap: React.Dispatch<React.SetStateAction<Field>> }} param0
 * @returns 
 */
export default function Menu({ player, rerender, setMap }) {
    return <div id="menu">
        <PlayerData player={player} />
        <RollTheDice player={player} rerender={rerender} />
        <RestartGame player={player} rerender={rerender} />
        <LoadMap setMap={setMap} />
        <MapEditor />
        <Guide href="https://github.com/aquapi/rnd-sq/blob/main/README.md" />
    </div>
}