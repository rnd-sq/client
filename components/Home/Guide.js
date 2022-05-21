// @ts-check
/**
 * @param {{ href: string }} param0 
 */
export default function Guide({ href }) {
    const onClick = () => location.href = href;

    return <button onClick={onClick} id="go-to-guide">Guide</button>;
}