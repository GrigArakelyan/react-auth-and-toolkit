import { configureStore } from "@reduxjs/toolkit";
import LoginEmailSlice from "./slices/loginEmail/LoginEmailSlice";
import MyProfileSlice from "./slices/MyProfile/MyProfileSlice";
import WorkLogsSlice from "./slices/WorkLogs/WorkLogsSlice";
import LoginCodeSlice from "./slices/loginCode/LoginCodeSlice";

export const store = configureStore({
  reducer: {
    loginEmail: LoginEmailSlice,
    loginCode: LoginCodeSlice,
    myProfile: MyProfileSlice,
    workLogs: WorkLogsSlice,
  },
});
