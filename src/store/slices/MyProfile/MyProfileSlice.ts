import { Slice, createSlice } from "@reduxjs/toolkit";
import { fetchMyProfile } from "./MyProfileThunk";
import { State } from "../../../types/Reducers";
import { ActionMyProfile, ActionMyProfileError } from "../../../types/MyProfile";

const MyProfileReducer:Slice = createSlice({
  name: "myProfile",
  initialState: {
    data: {},
    loading: false,
    error: null,
  },
  reducers: {
    changeGeneralInfo(state:State, action){
      state.data = {
        absences: action.payload.absences,
        dateOfBirth: action.payload.dateOfBirth,
        firstName: action.payload.firstName,
        gitHubUserName: action.payload.gitHubUserName,
        isCoreTeamMember: action.payload.isCoreTeamMember,
        lastName: action.payload.lastName,
        mobilePhone: action.payload.mobilePhone,
        personalEmail: action.payload.personalEmail,
        slackUserName: action.payload.slackUserName,
        startDate: action.payload.startDate,
        email: action.payload.email
      }
    },
    clearData(state:State, action:ActionMyProfile){
      state.data = action.payload
    }
  },
  extraReducers: {
    [fetchMyProfile.pending]: (state:State) => {
      state.loading = true;
    },
    [fetchMyProfile.fulfilled]: (state:State, action:ActionMyProfile) => {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
    },
    [fetchMyProfile.rejected]: (state:State, action:ActionMyProfileError) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default MyProfileReducer.reducer;
export const {changeGeneralInfo, clearData} = MyProfileReducer.actions;
