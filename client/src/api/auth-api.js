import requester from "./requester";
import api from "./api";

export const login = (email, password) => requester.post(`${api.LOGIN}`, {email, password});

export const register = (email, password) => requester.post(`${api.REGISTER}`, {email, password});

export const logout = () => requester.get(`${api.LOGOUT}`);

export function getUser() {
    try {
        const user = localStorage.getItem('auth');
        
        if (user) return JSON.parse(user);
    } catch (error) {
        return undefined;
    }
}