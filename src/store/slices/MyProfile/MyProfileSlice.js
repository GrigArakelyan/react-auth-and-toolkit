import { createSlice } from "@reduxjs/toolkit";
import { fetchMyProfile } from "./MyProfileThunk";

const MyProfileReducer = createSlice({
  name: "myProfile",
  initialState: {
    data: {},
    status: null,
    loading: false,
    error: null,
  },
  reducers: {
    changeGeneralInfo(state, action){
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
      // console.log(state.data, "state data")
    }
  },
  extraReducers: {
    [fetchMyProfile.pending]: (state) => {
      state.loading = true;
    },
    [fetchMyProfile.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.data = payload;
      state.error = null;
    },
    [fetchMyProfile.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export default MyProfileReducer.reducer;
export const {changeGeneralInfo} = MyProfileReducer.actions;
