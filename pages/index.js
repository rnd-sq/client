// @ts-check
import defaultMap from "../utils/map";
import React from "react";
import Game from "../components/Game";
import Player from "../utils/Player";
import findStart from "../utils/findStart";
import useForceUpdate from "../utils/useForceUpdate";

export default function Home() {
	const [map] = React.useState(defaultMap);
	// @ts-ignore
	const player = React.useMemo(() => new Player(map, findStart(map)), [map]);
	const rerender = useForceUpdate();

	/**
	 * @type {(this: Window, ev: KeyboardEvent) => any} 
	 */
	const move = e => {
		if (e.key === "ArrowUp") 
			console.log(player.go("up"));

		if (e.key === "ArrowDown")
			console.log(player.go("down"));

		if (e.key === "ArrowLeft")
			console.log(player.go("left"));

		if (e.key === "ArrowRight")
			console.log(player.go("right"));

		rerender();
	}

	React.useEffect(() => {
		window.addEventListener("keydown", move);
		return () => window.removeEventListener("keydown", move);
	});

	// Render the game and the control bar
	return <Game map={player.field} pos={player.position} />
}

/**
 * Map:
 * 0: sq-empty
 * 1: sq-road
 * 2: sq-x
 * 3: sq-start
 */