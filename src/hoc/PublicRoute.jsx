import { Navigate } from "react-router";
import { DASHBOARD } from "../constants/router";
import useAuth from "../hook/useAuth";

const PublicRoute = ({children}) => {

   const auth = {token: useAuth()}

   return !auth?.token ? children : <Navigate to={DASHBOARD} />  

}

export default PublicRoute