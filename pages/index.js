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
			return <div className="row" key={Math.random()} style={{
				marginTop: "-1px"
			}}>
				{row.map((square, squareIndex) => {
					const style = {
						border: "1px solid black",
					}

					const props = {
						key: Math.random(),
						style,
					}

					// Render the correct square
					if (square === "start")
						return <StartPos {...props} />;

					if (square === "road")
						return <SquareRoad {...props} />;

					// Weird bug here
					if (square === "x") {
						// Remove the weird part
						if (map[rowIndex - 1] && map[rowIndex - 1][squareIndex] && map[rowIndex - 1][squareIndex] !== "empty")
							props.style.borderTop = "none !important";

						return <SquareX {...props} />;
					}

					props.style.border = "none";
					props.style.margin = "0px";
					return <SquareEmpty {...props} />;
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