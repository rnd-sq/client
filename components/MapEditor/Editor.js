// @ts-check
import repeat from "../../utils/repeat";
import Row from "./Row";
import useForceUpdate from "../../utils/useForceUpdate";

/**
 * @param {{ size: number, map: Field, setMap: React.Dispatch<React.SetStateAction<Field>> }} param0 
 */
export default function Editor({ size, map, setMap }) {
    const rerender = useForceUpdate();

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
                setMap={a => {
                    setMap(a);
                    rerender();
                }}
            />    
        )}
    </div>;
}