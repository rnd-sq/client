// @ts-check
/**
 * @param {number} size 
 * @returns {Field}
 */
export default function getDefaultMap(size) {
    const list = [];

    for (let i = 0; i < size; i++) {
        list.push([]);

        for (let j = 0; j < size; j++) 
            list[i].push("empty");
    }

    return list;
}