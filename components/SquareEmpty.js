export default function SquareEmpty({ style, havePlayer }) {
    return <div className="sq-empty" style={style}>
        {havePlayer && <div id="player"></div>}
    </div>;
}