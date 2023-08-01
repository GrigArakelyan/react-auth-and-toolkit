import React, { FC } from "react"
import { Outlet } from "react-router"

const PublicLayout:FC = () => {

   return (
      <Outlet />
   ) 
}

export default PublicLayout