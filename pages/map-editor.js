// @ts-check
import React from "react";
import Editor from "../components/MapEditor/Editor";
import Menu from "../components/MapEditor/Menu";
import getDefaultMap from "../utils/getDefaultMap";

export default function MapEditor() {
    const [size] = React.useState(70);
    const [map, setMap] = React.useState(getDefaultMap(size));
    console.log(map[0][0])

    return <section id="editor-wrapper">
        <Menu map={map} setMap={setMap} />
        <Editor size={size} map={map} setMap={setMap} />
    </section>;
}