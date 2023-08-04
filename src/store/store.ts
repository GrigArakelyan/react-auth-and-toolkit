import { configureStore } from "@reduxjs/toolkit";
import LoginEmailSlice from "./slices/loginEmail/LoginEmailSlice";
import MyProfileSlice from "./slices/MyProfile/MyProfileSlice";
import WorkLogsSlice from "./slices/WorkLogs/WorkLogsSlice";
import LoginCodeSlice from "./slices/loginCode/LoginCodeSlice";


const store = configureStore({
  reducer: {
    loginEmail: LoginEmailSlice,
    loginCode: LoginCodeSlice,
    myProfile: MyProfileSlice,
    workLogs: WorkLogsSlice,
  },
});


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store