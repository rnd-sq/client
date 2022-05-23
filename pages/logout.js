import Head from "next/head";
import React from "react";
import { NotificationContainer, NotificationManager } from "react-notifications";
import "react-notifications/lib/notifications.css";

// @ts-check
export default function Logout() {
    React.useEffect(() => {
        localStorage.removeItem("token");
        NotificationManager.success("Logged out successfully. Please wait while we redirect you to homepage.");
        setTimeout(() => location.replace("/"), 2000);
    }, []);
    return <>
        <Head>
            <title>Logging you out...</title>
        </Head>
        <NotificationContainer />
    </>
}