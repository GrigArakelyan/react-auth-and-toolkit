import { Navigate } from "react-router";
import { HOME } from "../constants/router";
import useAuth from "../hook/useAuth";
import { Outlet } from "react-router"
import React from "react";

const PrivateRoute = () => {

   const auth = {token: useAuth()}
   

   return auth?.token ? <Outlet/>  : <Navigate to={HOME} />
}

export default PrivateRoute