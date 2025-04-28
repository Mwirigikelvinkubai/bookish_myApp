import { Navigate } from "react-router-dom";
import { useUser } from "../context/UserContext";


const RequireAuth = ({children}) => {
    const {user} = useUser()
    console.log(user)

    if(!user || !user.id) {
        return <Navigate to="/login" replace/>
    }

    return children
}

export default RequireAuth