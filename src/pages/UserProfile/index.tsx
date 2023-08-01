import GeneralInfo from "./components/GeneralInfo";
import WorkLogs from "./components/WorkLogs/";
import Loading from "../../Components/Loading";
import { fetchMyProfile } from "../../store/slices/MyProfile/MyProfileThunk";
import "./UserProfile.scss";
import React, {FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectMyProfile } from "../../store/selectores/MyProfileSelector";
import { DataLoginEmail } from "../../types/LoginEmail";

const UserProfile:FC = () => {
  const dispatch = useDispatch();
  const data:DataLoginEmail = useSelector(selectMyProfile);

  useEffect(():void => {
    dispatch(fetchMyProfile())
      .unwrap()
      .then(() => {})
      .catch(() => {});
  }, [dispatch]);


  return (
    <div className="profile_page">
      <h1 className="h1_title">My Profile</h1>  
        {data.loading? 
          <Loading /> : 
          <GeneralInfo />}
          <WorkLogs />
    </div>
  );
};

export default UserProfile;
