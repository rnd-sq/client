import { NotificationManager } from "react-notifications";
import random from "../utils/random"
import useForceUpdate from "../utils/useForceUpdate";

/**
 * @param {{ player: import("../utils/Player").default; }} param0 
 */
export default function RollTheDice({ player }) {
    const rerender = useForceUpdate();

    /**
     * @type {React.MouseEventHandler<HTMLButtonElement>}
     */
    const onClick = () => {
        if (player.movesLeft === 0) {
            player.setMovesLeft(random(1, 6));
            rerender();
        }

        NotificationManager.warning(`You have ${player.movesLeft} moves left! Finish all the moves then roll again!`);
    }

    return <div id="roll-the-dice">
        <button onClick={onClick}>Roll the dice</button>
    </div>
}