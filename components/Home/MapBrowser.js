// @ts-check
import Link from "next/link";

export default function MapBrowser() {
    return <Link href="/browse-map" passHref>
        <a id="go-to-map-browser">Browse map...</a>
    </Link>;
}