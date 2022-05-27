// @ts-check
import React from "react";
import "semantic-ui-css/semantic.min.css";
import { Input } from "semantic-ui-react";
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
        <div id="search-bar">
            <Input placeholder="Search..." icon="search" fluid size="large" />
        </div>
        <Maps map={maps} />
    </section>;
}