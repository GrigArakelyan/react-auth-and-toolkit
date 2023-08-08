import GeneralInfo from "./components/GeneralInfo";
import WorkLogs from "./components/WorkLogs/";
import Loading from "../../Components/Loading/Loading";
import { fetchMyProfile } from "../../store/slices/MyProfile/MyProfileThunk";
import "./UserProfile.scss";
import React, {FC, useEffect } from "react";
import { selectMyProfile } from "../../store/selectores/MyProfileSelector";
import { useAppDispatch } from "../../hook/useAppDispatch";
import { useAppSelector } from "../../hook/useAppSelector";

const UserProfile:FC = () => {
  const dispatch = useAppDispatch();
  const {loading} = useAppSelector(selectMyProfile);

  useEffect(() => {
    dispatch(fetchMyProfile())
      .unwrap()
      .then(() => {})
      .catch(() => {});
  }, []);


  return (
    <div className="profile_page">
      <h1 className="h1_title">My Profile</h1>  
        {loading? 
          <Loading /> : 
          <GeneralInfo />}
          <WorkLogs />
    </div>
  );
};

export default UserProfile;
