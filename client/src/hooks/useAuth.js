import { useContext } from "react";
import { login, register } from "../api/auth-api";
import { AuthContext, useAuthContext } from "../contexts/AuthContextProvider";

export const UseLogin = () => {
    const { changeAuthState } = useAuthContext(AuthContext);

    const loginHandler = async (email, password) => {
        const result = await login(email, password);

        changeAuthState(result);
    }

    return loginHandler;
}

export const useRegister = () => {
    const { changeAuthState } = useAuthContext(AuthContext);
    const registerHandler = async (email, password) => {
        const result = await register(email, password);

        changeAuthState(result);
    }

    return registerHandler;

}