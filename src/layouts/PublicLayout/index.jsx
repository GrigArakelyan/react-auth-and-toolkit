import { Outlet } from "react-router"
import PublicRoute from "../../hoc/PublicRoute"

const PublicLayout = () => {

   return (
   <PublicRoute>
      <Outlet />
   </PublicRoute>
   ) 
}

export default PublicLayout