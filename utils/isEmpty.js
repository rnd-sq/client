/**
 * @param {Field} map 
 * @param {number} row 
 * @param {number} col 
 */
export default function isEmpty(map, row, col) {
    return !map[row] || !map[row][col] || map[row][col] === "empty";
}