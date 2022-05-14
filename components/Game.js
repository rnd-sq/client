import SquareEmpty from "../components/SquareEmpty";
import SquareRoad from "../components/SquareRoad";
import SquareX from "../components/SquareX";
import StartPos from "../components/StartPos";
import isEmpty from "../utils/isEmpty";

// @ts-check
export default function Game({ map }) {
    return <div id="game-wrapper">
		{map.map((row, rowIndex) => {
			return <div className="row" key={Math.random()}>
				{row.map((square, squareIndex) => {
					const style = {
						border: "1px solid black",
						width: 50,
						height: 50,
					}

					// Props
					const props = {
						key: Math.random(),
						style,
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