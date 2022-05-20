// @ts-check
import React from "react";
import isEmpty from "../../utils/isEmpty";
import SquareEmpty from "../Home/SquareEmpty";
import SquareRoad from "../Home/SquareRoad";
import SquareWin from "../Home/SquareWin";
import SquareX from "../Home/SquareX";
import StartPos from "../Home/StartPos";

/**
 * @param {{ type: SquareType, position: Position, map: Field, setMap: React.Dispatch<React.SetStateAction<Field>> }} param0 
 */
export default function Square({ type, position, map, setMap }) {
    const onClick = () => {
        if (type === "empty") 
            type = "road";

        else if (type === "road")
            type = "x";

        else if (type === "x")
            type = "win";

        else if (type === "win")
            type = "empty";

        setMap(map => {
            map[position.row][position.col] = type;
            return map;
        });
    }

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
        havePlayer: false,
        onClick
    }

    // Fix alighment of squares
    if (type !== "empty") {
        if (isEmpty(map, position.row, position.col - 1)) {
            props.style.width -= 1;
            props.style.borderLeft = "2px solid black";
        }

        if (isEmpty(map, position.row, position.col + 1)) {
            props.style.width -= 1;
            props.style.borderRight = "2px solid black";
        }

        if (isEmpty(map, position.row - 1, position.col)) {
            props.style.height -= 1;
            props.style.borderTop = "2px solid black";
        }
        
        if (isEmpty(map, position.row + 1, position.col)) {
            props.style.height -= 1;
            props.style.borderBottom = "2px solid black";
        }
    }

    // Render the correct square
    if (type === "start")
        return <StartPos {...props} key={props.key} />;

    if (type === "road") 
        return <SquareRoad {...props} key={props.key} />;

    if (type === "x") 
        return <SquareX {...props} key={props.key} />;

    if (type === "win")
        return <SquareWin {...props} key={props.key} />;

    return <SquareEmpty key={props.key} onClick={onClick} />;
}