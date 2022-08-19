import defaultMap from "../utils/map.json";

import React from "react";

// Components
import Game from "../components/Home/Game";
import Player from "../utils/Player";
import Menu from "../components/Home/Menu";
import { NotificationContainer, NotificationManager } from "react-notifications";
import Head from "next/head";

// Hooks
import useForceUpdate from "../utils/useForceUpdate";

// Stylesheets
import 'react-notifications/lib/notifications.css';

export default function Home() {
	const [map, setMap] = React.useState(defaultMap);
	// @ts-ignore
	const player = React.useMemo(() => new Player(map), [map]);
	const rerender = useForceUpdate();

	/**
	 * @type {(this: Window, ev: KeyboardEvent) => any} 
	 */
	// This will change when player changes => map changes => Trigger the useEffect
	const move = React.useCallback(e => {
		if (player.hasWin()) 
			return;

		// Key events
		if (e.key === "ArrowUp" || e.key === "w")
			player.go("up");

		else if (e.key === "ArrowDown" || e.key === "s")
			player.go("down");

		else if (e.key === "ArrowLeft" || e.key === "a")
			player.go("left");

		else if (e.key === "ArrowRight" || e.key === "d")
			player.go("right");

		// If the player lost, show a notification and restart the game
		if (player.hasLost()) {
			NotificationManager.error("You touched X. Now you need to go again from the beginning!", null, 1000);
			player.restart();
		}

		// If the player won, show a notification and restart the game
		else if (player.hasWin())
			NotificationManager.success("You completed the map!");

		// Update the UI
		rerender();
	}, [player, rerender]);

	React.useEffect(() => {
		window.addEventListener("keydown", move);
		return () => window.removeEventListener("keydown", move);
	}, [move]);

	// Render the game and the control bar
	return <>
		<Head>
			<title>Game</title>
		</Head>
		<section id="home-wrapper">
			<Menu player={player} rerender={rerender} setMap={setMap} />
			<Game map={player.field} pos={player.position} />
			<NotificationContainer />
		</section>
	</>;
}

/**
 * Map:
 * 0: sq-empty
 * 1: sq-road
 * 2: sq-x
 * 3: sq-start
 */