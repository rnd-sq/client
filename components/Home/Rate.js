import Link from "next/link";

function Rate() {
    return <Link href={"/map/rate?name=" + encodeURIComponent(window.location.pathname.replace("/map/", ""))} passHref>
        <a id="go-to-rate">Rate</a>
    </Link>
}

export default Rate;