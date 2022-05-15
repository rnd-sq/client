export default function SquareX({ style, havePlayer }) {
    return <div className="sq-x" style={style}>
        {havePlayer ? <div id="player"></div> : "X"}
    </div>;
}