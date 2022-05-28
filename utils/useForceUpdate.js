// @ts-check
import React from "react";

export default function useForceUpdate() {
    // eslint-disable-next-line no-unused-vars
    const [_, newState] = React.useState(null);
    return React.useCallback(() => newState({}), []);
}