// @ts-check
import defaultMap from "../utils/map";
import React from "react";
import Game from "../components/Game";
import Player from "../utils/Player";
import findStart from "../utils/findStart";

export default function Home() {
	const [map, setMap] = React.useState(defaultMap);

	// @ts-ignore
	const player = React.useMemo(() => new Player(map, findStart(map)), [map]);

	// Render the game and the control bar
	return <Game map={player.field} position={player.position} />
}

/**
 * Map:
 * 0: sq-empty
 * 1: sq-road
 * 2: sq-x
 * 3: sq-start
 */