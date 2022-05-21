// @ts-check
import repeat from "../../utils/repeat";
import Row from "./Row";

/**
 * @param {{ size: number, map: Field, setMap: React.Dispatch<React.SetStateAction<Field>> }} param0 
 */
export default function Editor({ size, map, setMap }) {
    return <div id="editor">
        {repeat(size, row => 
            <Row 
                key={row} 
                length={size} 

                // All row squares
                rowMap={map[row] ?? []} 

                // Row index
                row={row}

                // The current map
                map={map}

                // Set the map
                setMap={setMap}
            />    
        )}
    </div>;
}