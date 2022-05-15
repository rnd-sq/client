// @ts-check
/**
 * @param {Field} map 
 * @returns {Position}
 */
export default function findStart(map) {
    for (const rowIndex in map)
        for (const colIndex in map[rowIndex])
            if (map[rowIndex][colIndex] === "start")
                return { 
                    row: Number(rowIndex), 
                    col: Number(colIndex)
                };
}