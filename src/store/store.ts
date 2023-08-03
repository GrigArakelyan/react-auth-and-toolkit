import { AnyAction, configureStore } from "@reduxjs/toolkit";
import LoginEmailSlice from "./slices/loginEmail/LoginEmailSlice";
import MyProfileSlice from "./slices/MyProfile/MyProfileSlice";
import WorkLogsSlice from "./slices/WorkLogs/WorkLogsSlice";
import LoginCodeSlice from "./slices/loginCode/LoginCodeSlice";
import { WorkLogType } from "../types/WorkLog";
import { Store } from "../types/Reducers";

export const store = configureStore<Store, AnyAction, []>({
  reducer: {
    loginEmail: LoginEmailSlice,
    loginCode: LoginCodeSlice,
    myProfile: MyProfileSlice,
    workLogs: WorkLogsSlice,
  },
});

