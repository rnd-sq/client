/**
 * @param {number} d
 */
export default function getDifficulty(d) {
    if (d === 0)
        return "Unrated";
    if (d === 1)
        return "Easy";
    if (d === 2)
        return "Medium";
    if (d === 3)
        return "Hard";
    if (d === 4)
        return "Expert";
    if (d === 5)
        return "Master";
    return "Unknown";
}