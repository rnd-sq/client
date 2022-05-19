/**
 * @param {number} from 
 * @param {number} to 
 */
export default function random(from, to) {
    return to + Math.round(Math.random() * (from - to));
}