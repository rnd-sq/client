// @ts-check

import isEmpty from "./isEmpty";

/**
 * @param {Position} pos 
 * @param {Field} map 
 * @returns {Direction}
 */
export default function findDirection(pos, map) {
    if (!isEmpty(map, pos.row, pos.col - 1))
        return "left";
    if (!isEmpty(map, pos.row, pos.col + 1))
        return "right";
    if (!isEmpty(map, pos.row - 1, pos.col))
        return "up";
    if (!isEmpty(map, pos.row + 1, pos.col))
        return "down";
}