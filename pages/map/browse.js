// @ts-check
import Head from "next/head";
import React from "react";
import "semantic-ui-css/semantic.min.css";
import { Input } from "semantic-ui-react";
import Maps from "../../components/MapBrowser/Maps";
import axios from "axios";

/**
 * @returns {[any[], React.Dispatch<React.SetStateAction<any[]>>]}
 */
function useMaps() {
    const [maps, setMaps] = React.useState([]);
    React.useEffect(() => {
        fetch("/api/maps/all", {
            method: "POST",
            body: "{}"
        })
            .then(res => res.json())
            .then(json => setMaps(json.data));
    }, []);
    // @ts-ignore
    return [maps, setMaps];
}

export default function BrowseMap() {
    const [maps, setMaps] = useMaps();

    /**
     * @param {React.ChangeEvent<HTMLInputElement>} e 
     */
    const onChange = e =>
        axios.post(`/api/maps/all`, {
            query: e.currentTarget.value
        })
            .then(res => res.data)
            .then(json => setMaps(json?.data || {}));

    return <>
        <Head>
            <title>Browse Map</title>
        </Head>
        <section id="map-browser">
            <div id="search-bar">
                <Input placeholder="Search..." icon="search" fluid size="large" onChange={onChange} />
            </div>
            <Maps map={maps} />
        </section>
    </>;
}