// @ts-check
import repeat from "../../utils/repeat";
import Square from "./Square";

/**
 * @param {{ length: number, rowMap: SquareType[], row: number, map: Field, setMap: React.Dispatch<React.SetStateAction<Field>> }} param0 
 */
export default function Row({ length, rowMap, row, map, setMap }) {
    return <div className="row">
        {repeat(length, index => 
            <Square 
                key={index} 
                type={rowMap[index] ?? "empty"} 

                // The position of the square
                position={{ row, col: index }} 

                // The current map
                map={map}

                // Set the square
                setMap={setMap}
            />
        )}
    </div>
}