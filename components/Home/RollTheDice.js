// @ts-check
import { NotificationManager } from "react-notifications";

import random from "../../utils/random";

/**
 * @param {{ player: import("../../utils/Player").default; rerender: () => void }} param0 
 */
export default function RollTheDice({ player, rerender }) {
    /**
     * @type {React.MouseEventHandler<HTMLButtonElement>}
     */
    const onClick = () => {
        if (player.hasWin())
            return;

        if (player.movesLeft === 0) {
            player.setMovesLeft(random(1, 6));
            NotificationManager.info("You rolled " + player.movesLeft, null, 1000);
            rerender();
            return;
        }

        NotificationManager.warning(`You have ${player.movesLeft} moves left! Finish all the moves then roll again!`);
    }

    return <button id="roll-the-dice" onClick={onClick}>Roll the dice</button>;
}