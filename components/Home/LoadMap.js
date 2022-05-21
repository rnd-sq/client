// @ts-check

import { NotificationManager } from "react-notifications";
import React from "react";

/**
 * @param {{ setMap: React.Dispatch<React.SetStateAction<Field>> }} param0 
 */
export default function LoadMap({ setMap }) {
    /**
     * @type {React.MouseEventHandler<HTMLDivElement>}
     */
    const onClick = e => e.currentTarget.querySelector("input").click();

    /**
     * @type {React.ChangeEventHandler<HTMLInputElement>} 
     */
    // TODO: The event doesn't get called when the file is loaded
    const onLoad = async e => {
        const fileContent = await e.target.files.item(0).text();
        try {
            setMap(JSON.parse(fileContent));
        } catch (e) {
            NotificationManager.error("Error loading map! File format is not correct");
        }
    };

    return <div id="load-map" onClick={onClick}>
        Load map
        <input type="file" onChange={onLoad} className="hidden" />
    </div>
}