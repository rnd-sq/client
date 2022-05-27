// @ts-check
import React from "react";
import "semantic-ui-css/semantic.min.css";
import Maps from "../components/MapBrowser/Maps";

function useMaps() {
    const [maps, setMaps] = React.useState([]);
    React.useEffect(() => {
        fetch("/api/maps/getAll")
            .then(res => res.json())
            .then(json => setMaps(json));
    }, []);
    return maps;
}

export default function BrowseMap() {
    const maps = useMaps();

    return <section id="map-browser">
        <Maps map={maps} />
    </section>;
}