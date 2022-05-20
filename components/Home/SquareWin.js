// @ts-check
export default function SquareWin({ style, havePlayer, onClick = () => {} }) {
    return <div className="sq-win" style={style} onClick={onClick}>
        {havePlayer ? <div id="player"></div> : "W"}
    </div>;
}