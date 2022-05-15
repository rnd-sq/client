// @ts-check
import SquareEmpty from "./SquareEmpty";
import SquareRoad from "./SquareRoad";
import SquareX from "./SquareX";
import StartPos from "./StartPos";
import isEmpty from "../utils/isEmpty";
import React, { useEffect } from "react";

/**
 * @param {{ player: import("../utils/Player").default }} param0 
 */
export default function Game({ player }) {
	const map = player.field;
	const [playerPos, setPos] = React.useState(player.position);

	/**
	 * @type {(this: Window, ev: KeyboardEvent) => any} 
	 */
	// TODO: The player does not move yet. But the functionality is correct.
	const move = e => {
		if (e.key === "ArrowUp") 
			console.log(player.go("up"));

		if (e.key === "ArrowDown")
			console.log(player.go("down"));

		if (e.key === "ArrowLeft")
			console.log(player.go("left"));

		if (e.key === "ArrowRight")
			console.log(player.go("right"));

		setPos(player.position);
	}

	useEffect(() => {
		window.addEventListener("keydown", move);
		return () => window.removeEventListener("keydown", move);
	});

	// Render the game wrapper
    return <div id="game-wrapper">
		{map.map((row, rowIndex) => {
			return <div className="row" key={Math.random()}>
				{row.map((square, squareIndex) => {
					const style = {
						border: "1px solid black",
						width: 50,
						height: 50,
						borderLeft: "1px solid black",
						borderTop: "1px solid black",
						borderRight: "1px solid black",
						borderBottom: "1px solid black",
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
					}

					// Props
					const props = {
						key: Math.random(),
						style,
						havePlayer: playerPos.row === rowIndex && playerPos.col === squareIndex,
					}

					// Fix alighment of squares
					if (square !== "empty") {
						if (isEmpty(map, rowIndex, squareIndex - 1)) {
							props.style.width -= 1;
							props.style.borderLeft = "2px solid black";
						}
	
						if (isEmpty(map, rowIndex, squareIndex + 1)) {
							props.style.width -= 1;
							props.style.borderRight = "2px solid black";
						}
	
						if (isEmpty(map, rowIndex - 1, squareIndex)) {
							props.style.height -= 1;
							props.style.borderTop = "2px solid black";
						}
						
						if (isEmpty(map, rowIndex + 1, squareIndex)) {
							props.style.height -= 1;
							props.style.borderBottom = "2px solid black";
						}
					}

					// Render the correct square
					if (square === "start")
						return <StartPos {...props} key={props.key} />;

					if (square === "road") 
						return <SquareRoad {...props} key={props.key} />;

					if (square === "x") 
						return <SquareX {...props} key={props.key} />;

					props.style.border = "none !important";
					props.style.width = props.style.height = 52;
					return <SquareEmpty {...props} key={props.key} />;
				})}
			</div>;
		})}
	</div>
}