// @ts-check
import React from "react";
import { NotificationManager } from "react-notifications";

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

    React.useEffect(() => {
        const href = URL.createObjectURL(new Blob([JSON.stringify(map)]));
        setFileHref(href);
    }, []);

    /**
     * @type {React.MouseEventHandler<HTMLDivElement>}
     */
    const onButtonLoadMap = e => e.currentTarget.querySelector("input").click();

    return <div id="menu">
        <div onClick={onButtonLoadMap}>
            Load an existing map
            <input type="file" onChange={onLoadMap} className="hidden" />
        </div>
        <a
            download="map.json"
            href={fileHref}
        >Save as</a>
    </div>
}