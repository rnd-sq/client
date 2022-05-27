// @ts-check
import React from "react";
import { NotificationManager } from "react-notifications";
import ShareMap from "./ShareMap";

/**
 * @param {{ map: Field, setMap: React.Dispatch<React.SetStateAction<Field>> }} param0
 */
export default function Menu({ map, setMap }) {
    const [fileHref, setFileHref] = React.useState("");

    /**
     * Load the map
     * @type {React.ChangeEventHandler<HTMLInputElement>}
     */
    const onLoadMap = async e => {
        try {
            const fileContent = await e.target.files.item(0).text();
            const map = JSON.parse(fileContent);
            setMap(map);
        } catch (e) {
            NotificationManager.error("Error loading map! File format is not correct");
        }
    }

    // Load blob href
    React.useEffect(() => {
        const href = URL.createObjectURL(new Blob([JSON.stringify(map)]));
        setFileHref(href);
    }, [map]);

    /**
     * @type {React.MouseEventHandler<HTMLDivElement>}
     */
    const onButtonLoadMap = e => e.currentTarget.querySelector("input").click();

    return <div id="menu">
        <div onClick={onButtonLoadMap} id="load-an-existing-map">
            Load an existing map
            <input type="file" onChange={onLoadMap} className="hidden" />
        </div>
        <ShareMap map={map} />
        <a
            download="map.json"
            href={fileHref}
            id="download-map"
        >Save as</a>
    </div>
}