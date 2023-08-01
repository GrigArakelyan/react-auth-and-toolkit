import { AnyAction, configureStore } from "@reduxjs/toolkit";
import LoginEmailSlice from "./slices/loginEmail/LoginEmailSlice";
import MyProfileSlice from "./slices/MyProfile/MyProfileSlice";
import WorkLogsSlice from "./slices/WorkLogs/WorkLogsSlice";
import LoginCodeSlice from "./slices/loginCode/LoginCodeSlice";
import { WorkLogType } from "../types/WorkLog";

export const store = configureStore<{
  loginEmail: {
      data: {};
      loading: boolean;
      error: null;
  };
  loginCode: {
      data: {};
      status: null;
      loading: boolean;
      error: null;
  };
  myProfile: {
      data: {};
      status: null;
      loading: boolean;
      error: null;
  };
  workLogs:{
      data: WorkLogType;
      status: null;
      loading: boolean;
      error: null;
  };
}, AnyAction, []>({
  reducer: {
    loginEmail: LoginEmailSlice,
    loginCode: LoginCodeSlice,
    myProfile: MyProfileSlice,
    workLogs: WorkLogsSlice,
  },
});

