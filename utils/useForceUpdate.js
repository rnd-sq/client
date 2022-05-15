// @ts-check
import React from "react";

export default function useForceUpdate() {
    const [_, newState] = React.useState({});
    return React.useCallback(() => newState({}), []);
}