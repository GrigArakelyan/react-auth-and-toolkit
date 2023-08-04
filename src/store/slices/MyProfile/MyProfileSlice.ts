import { Slice, createSlice } from "@reduxjs/toolkit";
import { fetchMyProfile } from "./MyProfileThunk";
import initialState from "./initialState";

const MyProfileReducer = createSlice({
  name: "myProfile",
  initialState: initialState,
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
  extraReducers: (builder) => {
    builder
    .addCase(fetchMyProfile.pending, (state) => {
      state.loading = true;
    })
    .addCase(fetchMyProfile.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = "";
    })
    .addCase(fetchMyProfile.rejected, (state, {payload}) => {
      state.loading = false;
      state.error = payload;
    })
  },
});

export default MyProfileReducer.reducer;
export const {changeGeneralInfo, clearData} = MyProfileReducer.actions;
