import requester from "./requester";
import api from "./api";

export const login = async (email, password) => { 
    const authData = await requester.post(`${api.LOGIN}`, {email, password});
    
    return authData;
}

export function getUser() {
    try {
        const user = localStorage.getItem('user');

        if (user) return JSON.parse(user);
    } catch (error) {
        return undefined;
    }
}