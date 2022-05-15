// @ts-check
import SquareEmpty from "./SquareEmpty";
import SquareRoad from "./SquareRoad";
import SquareX from "./SquareX";
import StartPos from "./StartPos";
import isEmpty from "../utils/isEmpty";
import React from "react";

/**
 * @param {{ map: Field, pos: Position }} param0 
 */
export default function Game({ map, pos: playerPos }) {
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

					return <SquareEmpty key={props.key} />;
				})}
			</div>;
		})}
	</div>
}