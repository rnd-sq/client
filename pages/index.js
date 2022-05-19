import defaultMap from "../utils/map.json";

import React from "react";

// Components
import Game from "../components/Home/Game";
import Player from "../utils/Player";
import Menu from "../components/Home/Menu";
import { NotificationContainer, NotificationManager } from "react-notifications";

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
	const move = e => {
		// Key events
		if (e.key === "ArrowUp")
			player.go("up");

		else if (e.key === "ArrowDown")
			player.go("down");

		else if (e.key === "ArrowLeft")
			player.go("left");

		else if (e.key === "ArrowRight")
			player.go("right");

		// If the player lost, show a notification and restart the game
		if (player.hasLost()) {
			NotificationManager.error("You touched X. Now you need to go again from the beginning!");
			player.restart();
		}

		// If the player won, show a notification and restart the game
		else if (player.hasWin()) 
			NotificationManager.success("You completed the map!");

		// Update the UI
		rerender();
	}

	React.useEffect(() => {
		window.addEventListener("keydown", move);
		return () => window.removeEventListener("keydown", move);
	});

	// Render the game and the control bar
	return <>
		<Game map={player.field} pos={player.position} />
		<Menu player={player} rerender={rerender} setMap={setMap} />
		<NotificationContainer />
	</>;
}

/**
 * Map:
 * 0: sq-empty
 * 1: sq-road
 * 2: sq-x
 * 3: sq-start
 */