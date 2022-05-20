// @ts-check
/**
 * @template T
 * @param {number} time 
 * @param {(index: number) => T} cb 
 * @returns {T[]}
 */
export default function repeat(time, cb) {
    const result = [];

    for (let i = 0; i < time; i++) 
        result.push(cb(i));

    return result;
}