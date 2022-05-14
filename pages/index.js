// @ts-check
import defaultMap from "./map.json";
import React from "react";
import SquareEmpty from "../components/SquareEmpty";
import SquareRoad from "../components/SquareRoad";
import SquareX from "../components/SquareX";
import StartPos from "../components/StartPos";

export default function Home() {
	const [map, setMap] = React.useState(defaultMap);

	return <div id="game-wrapper">
		{map.map((row, rowIndex) => {
			return <div className="row" key={Math.random()}>
				{row.map((square, squareIndex) => {
					const style = {
						border: "1px solid black",
					}

					// Props
					const props = {
						key: Math.random(),
						style,
					}

					// Render the correct square
					if (square === "start")
						return <StartPos {...props} key={props.key} />;

					if (square === "road") 
						return <SquareRoad {...props} key={props.key} />;

					// Weird bug here
					if (square === "x") 
						return <SquareX {...props} key={props.key} />;

					props.style.border = "none !important";
					return <SquareEmpty {...props} key={props.key} />;
				})}
			</div>;
		})}
	</div>
}

/**
 * Map:
 * 0: sq-empty
 * 1: sq-road
 * 2: sq-x
 * 3: sq-start
 */