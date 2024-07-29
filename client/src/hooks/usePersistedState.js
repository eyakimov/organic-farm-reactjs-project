import { useState } from "react";

export default function usePersistedState(key, initialsState) {
    const [state, setState] = useState(() => {
        const persistedAuth = localStorage.getItem(key);

        if (!persistedAuth) {
            return typeof initialsState === 'function'
                ? initialsState()
                : initialsState;
        }

        const authData = JSON.parse(persistedAuth);

        return authData;
    });

    const updateState = (stateOfAuth) => {
        const newState = typeof stateOfAuth === 'function'
            ? stateOfAuth(state)
            : stateOfAuth;

        localStorage.setItem(key, JSON.stringify(newState))

        setState(newState);
    }

    return [state, updateState];
}