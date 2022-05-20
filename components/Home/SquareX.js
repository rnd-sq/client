// @ts-check
export default function SquareX({ style, havePlayer, onClick = () => {} }) {
    return <div className="sq-x" style={style} onClick={onClick}>
        {havePlayer ? <div id="player"></div> : "X"}
    </div>;
}