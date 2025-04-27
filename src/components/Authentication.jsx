import { Navigate } from "react-router-dom";
import { useUser } from "../context/UserContext";
import { Children, use } from "react";

const RequireAuth = ({children}) => {
    const {user} = useUser()

    if(!user || !user.id) {
        return <Navigate to="/login" replace/>
    }

    return children
}

export default RequireAuth