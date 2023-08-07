import React, { FC } from "react";
import "../UserPage/UserPage.scss";
import userPageImg from "../../img/userpageimg.png";
import { useNavigate } from "react-router";
import { HOME, USER_PROFILE } from "../../constants/router";
import { removeRefreshToken, removeToken } from "../../services/token";
import { removeTokenRed } from "../../store/slices/loginCode/LoginCodeSlice";
import { clearData } from "../../store/slices/MyProfile/MyProfileSlice";
import { useAppDispatch } from "../../hook/useAppDispatch";
import Button from "../../Components/Button/Button";

const UserPage:FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const myProfilePage = ():void => {
    navigate(USER_PROFILE);
  };


  const logout = ():void => {
    removeToken();
    removeRefreshToken();
    dispatch(removeTokenRed());
    dispatch(clearData({}));
    navigate(HOME, {replace: true});
  };

  return (
    <div className="user_page_content">
      <img src={userPageImg} className="user_page_img" alt="img"/>
      <h2 className="h2_title">COMING SOON</h2>
      <Button className={"edit_profile_button"}
        text={"EDIT MY PROFILE AND MY WORKLOG"} type="button"
        onClick={myProfilePage}/>
      <Button className={"logout_button"} type="button" 
        text={"Lodout"} onClick={logout}/>
    </div>
  );
};
export default UserPage;
