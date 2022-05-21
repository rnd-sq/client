// @ts-check
export default function StartPos({ style, havePlayer, onClick = () => {} }) {
    return <div className="sq-start" style={style} onClick={onClick}>
        {havePlayer ? <div id="player"></div> : "S"}
    </div>;
}