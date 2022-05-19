// @ts-check
export default function SquareRoad({ style, havePlayer }) {
    return <div className="sq-road" style={style}>
        {havePlayer && <div id="player"></div>}
    </div>;
}