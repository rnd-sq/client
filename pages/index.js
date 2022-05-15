import defaultMap from "../utils/map";
import React from "react";
import Game from "../components/Game";

export default function Home() {
	const [map, setMap] = React.useState(defaultMap);

	return <Game map={map} />
}

/**
 * Map:
 * 0: sq-empty
 * 1: sq-road
 * 2: sq-x
 * 3: sq-start
 */