import { Navigate } from "react-router";
import { HOME } from "../constants/router";
import useAuth from "../hook/useAuth";

const PrivateRoute = ({children}) => {

   const auth = {token: useAuth()}

   return auth?.token ? children  : <Navigate to={HOME} />
}

export default PrivateRoute