import "../UserPage/UserPage.scss";
import userPageImg from "../../img/userpageimg.png";
import { useNavigate } from "react-router";
import { HOME, USER_PROFILE } from "../../constants/router";
import { removeRefreshToken, removeToken } from "../../services/token";
import { useDispatch } from "react-redux";
import { removeTokenRed } from "../../store/slices/loginCode/LoginCodeSlice";
import { clearData } from "../../store/slices/MyProfile/MyProfileSlice";

const UserPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const myProfilePage = () => {
    navigate(USER_PROFILE);
  };


  const logout = () => {
    removeToken();
    removeRefreshToken();
    dispatch(removeTokenRed({}));
    dispatch(clearData({}));
    navigate(HOME, {replace: true});
  };

  return (
    <div className="user_page_content">
      <img src={userPageImg} className="user_page_img" alt="img"/>
      <h2 className="h2_title">COMING SOON</h2>
      <button className="edit_profile_button" onClick={myProfilePage}>
        EDIT MY PROFILE AND MY WORKLOG
      </button>
      <button className="logout_button" onClick={logout}>
        Logout
      </button>
    </div>
  );
};
export default UserPage;
