import React from "react";
import Editor from "../components/MapEditor/Editor";
import getDefaultMap from "../utils/getDefaultMap";

export default function MapEditor() {
    const [size] = React.useState(70);
    const [map, setMap] = React.useState(getDefaultMap(size));

    return <section id="editor-wrapper">
        <Editor size={size} map={map} setMap={setMap} />
    </section>;
}