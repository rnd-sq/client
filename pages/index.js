// @ts-check
import Head from "next/head";
import React from "react";
import 'semantic-ui-css/semantic.min.css';
import { Header, Button } from "semantic-ui-react";

/**
 * @type {React.CSSProperties}
 */
const buttonStyle = {
    width: "300px",
    height: "80px",
    fontSize: "20px",
    margin: "10px",
};

/**
 * @type {React.CSSProperties}
 */
const headerStyle = {
    textAlign: 'center',
    margin: '40px',
}

/**
 * @type {React.CSSProperties}
 */
const wrapperStyle = { 
    display: "flex", 
    flexDirection: "column", 
    alignItems: "center",
    justifyContent: "center",
};

// @ts-check
export default function IndexPage() {
    // Check whether the user is logged in
    const [isLoggedIn, setIsLoggedIn] = React.useState(false);

    React.useEffect(() => {
        if (localStorage.getItem("token"))
            setIsLoggedIn(true);
    });

    const goToPlay = () => location.href = "/game";
    const goToLogin = () => location.href = isLoggedIn ? "/logout" : "/login";

    return <>
        <Head>
            <title>Random Square</title>
        </Head>
        <div style={{ ...wrapperStyle, height: "100vh" }}>
            {/*@ts-ignore*/}
            <Header size='huge' style={headerStyle} color="black">Random Square</Header>
            <div style={wrapperStyle}>
                <Button size="huge" style={buttonStyle} onClick={goToPlay} color="red">Play</Button>
                <Button size="huge" style={buttonStyle} onClick={goToLogin} color="black">{"Log " + (isLoggedIn ? "out" : "in")}</Button>
            </div>
        </div>
    </>;
}