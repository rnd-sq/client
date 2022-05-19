// @ts-check
export default function StartPos({ style, havePlayer }) {
    return <div className="sq-start" style={style}>
        {havePlayer ? <div id="player"></div> : "S"}
    </div>;
}