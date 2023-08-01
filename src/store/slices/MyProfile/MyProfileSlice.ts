import { Slice, createSlice } from "@reduxjs/toolkit";
import { fetchMyProfile } from "./MyProfileThunk";

const MyProfileReducer:Slice = createSlice({
  name: "myProfile",
  initialState: {
    data: {},
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
    },
    clearData(state, action){
      state.data = action.payload
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
export const {changeGeneralInfo, clearData} = MyProfileReducer.actions;
