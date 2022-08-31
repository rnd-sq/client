// @ts-check
import Link from "next/link";

export default function MapEditor() {
    return <Link href="/map/editor" passHref>
        <button id="go-to-map-editor">Map Editor</button>
    </Link>
}