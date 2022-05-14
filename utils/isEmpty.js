export default function isEmpty(map, row, col) {
    return !map[row] || !map[row][col] || map[row][col] === "empty";
}