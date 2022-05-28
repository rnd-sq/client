// @ts-check
import Head from "next/head";
import "./styles/index.scss";

export default function App({ Component, props }) {
    return <>
        <Head>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="description" content="A simple paper game which uses a dice" />
            <link rel="shortcut icon" href="/square.png" />
        </Head>
        <Component {...props} />
    </>;
}