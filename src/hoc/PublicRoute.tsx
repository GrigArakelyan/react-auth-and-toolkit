import { Navigate } from "react-router";
import { DASHBOARD } from "../constants/router";
import useAuth from "../hook/useAuth";
import { Outlet } from "react-router"
import React, { FC } from "react";


const PublicRoute:FC = () => {

   const auth = {token: useAuth()}

   return !auth?.token ?  <Outlet /> : <Navigate to={DASHBOARD} />  

}

export default PublicRoute