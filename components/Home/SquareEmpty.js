// @ts-check
export default function SquareEmpty({ onClick = () => {} }) {
    return <div className="sq-empty" onClick={onClick}></div>;
}