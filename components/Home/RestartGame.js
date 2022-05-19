// @ts-check
import { NotificationManager } from "react-notifications";

/**
 * @param {{ player: import("../../utils/Player").default, rerender: () => void }} param0 
 */
export default function RestartGame({ player, rerender }) {
    const onClick = () => {
        NotificationManager.info("Game restarted!");
        player.restart();
        rerender();
    };

    return <button id="restart-game" onClick={onClick}>Restart</button>;
}