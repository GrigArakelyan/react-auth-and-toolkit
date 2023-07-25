import "./UserLayout.scss";
import {ReactComponent as MenuLogo} from "../../img/icons/Menu.svg"
import {ReactComponent as UserPageLogo} from "../../img/icons/Patient.svg"
import {ReactComponent as UserProfileLogo} from "../../img/icons/Schedule.svg"
import { Outlet } from "react-router";
import { DASHBOARD, USER_PROFILE } from "../../constants/router";
import { NavLink } from "react-router-dom";
import PrivateRoute from "../../hoc/PrivateRoute";

const UserLayout = () => {
  const classActive = ({isActive}) => isActive ? "active" : "link" 

  
  return (
  <>
     <PrivateRoute>
      <header className="user_header">
        <div className="header_img_div">
          <MenuLogo className="user_header_icon" />
          <NavLink to={DASHBOARD} className={classActive}>
            <UserProfileLogo className= "user_header_icon"/>
          </NavLink>
          <NavLink to={USER_PROFILE} className={classActive}>
            <UserPageLogo className= "user_header_icon"/>
          </NavLink>
        </div>
      </header>
      <Outlet />
     </PrivateRoute >
    </>
  );
};
export default UserLayout;
