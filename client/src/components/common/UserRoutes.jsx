import { Navigate, Outlet } from "react-router-dom";

import { AuthContext, useAuthContext } from "../../contexts/AuthContextProvider";

export default function UserRoutes() {
    const { isAuthenticated } = useAuthContext(AuthContext);
    
    if (!isAuthenticated){
        return <Navigate to="/login" />
    }
    return <Outlet />
}