// @ts-check
export default function SquareRoad({ style, havePlayer, onClick = () => {} }) {
    return <div className="sq-road" style={style} onClick={onClick}>
        {havePlayer && <div id="player" ></div>}
    </div>;
}