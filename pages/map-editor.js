// @ts-check
import React from "react";
import { NotificationContainer } from "react-notifications";
import Editor from "../components/MapEditor/Editor";
import Menu from "../components/MapEditor/Menu";
import getDefaultMap from "../utils/getDefaultMap";

export default function MapEditor() {
    const [size] = React.useState(29);
    const [map, setMap] = React.useState(getDefaultMap(size));

    return <section id="editor-wrapper">
        <Menu map={map} setMap={setMap} />
        <Editor size={size} map={map} setMap={setMap} />
        <NotificationContainer />
    </section>;
}