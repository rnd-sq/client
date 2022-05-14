// @ts-check
import "../styles/globals.scss";
import Head from "next/head";

export default function App({ Component, pageProps }) {
    return <>
        <Head>
            <title>Random Square</title>
        </Head>
        <Component {...pageProps} />
    </>
}