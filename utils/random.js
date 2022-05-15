/**
 * @param {number} from 
 * @param {number} to 
 */
export default function random(from, to) {
    return to + Math.floor(Math.random() * (from - to + 1));
}