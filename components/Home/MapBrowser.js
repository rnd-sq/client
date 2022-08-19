// @ts-check
import Link from "next/link";

export default function MapBrowser() {
    return <Link href="/map/browse" passHref>
        <a id="go-to-map-browser">Browse map</a>
    </Link>;
}