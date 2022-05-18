export default function SquareWin({ style, havePlayer }) {
    return <div className="sq-win" style={style}>
        {havePlayer ? <div id="player"></div> : "W"}
    </div>;
}