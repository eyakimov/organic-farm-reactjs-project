import { useContext } from "react";
import { login } from "../api/auth-api";
import { AuthContext } from "../contexts/AuthContextProvider";

export const UseLogin = () => {
    const { changeAuthState } = useContext(AuthContext);

    const loginHandler = async (email, password) => {
        const result = await login(email, password);

        changeAuthState(result);
    }

    return loginHandler;
}