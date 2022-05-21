// @ts-check
import { NotificationManager } from "react-notifications";

/**
 * @param {{ map: Field, setMap: React.Dispatch<React.SetStateAction<Field>> }} param0
 */
export default function Menu({ map, setMap }) {
    const blob = new Blob([JSON.stringify(map)], { type: "application/json" });

    /**
     * Load the map
     * @type {React.ChangeEventHandler<HTMLInputElement>}
     */
    const onLoadMap = async e => {
        try {
            const fileContent = await e.target.files.item(0).text();
            const map = JSON.parse(fileContent);

            if (fileContent.length !== 70) 
                throw new Error("Map size is not correct");

            setMap(map);
        } catch (e) {
            NotificationManager.error("Error loading map! File format is not correct");
        }
    }

    /**
     * @type {React.MouseEventHandler<HTMLButtonElement>}
     */
    const onButtonLoadMap = e => e.currentTarget.querySelector("input").click();

    return <div id="menu">
        <button onClick={onButtonLoadMap}>
            Load an existing map
            <input type="file" onChange={onLoadMap} className="hidden" />
        </button>
        <a
            download="map.json"
            href={URL.createObjectURL(blob)}
        >Save as</a>
    </div>
}