// @ts-check
/**
 * @param {{ player: import("../../utils/Player").default }} param0 
 */
export default function PlayerData({ player }) {
    return <div id="player-data">{"Moves left: " + player.movesLeft}</div>
}