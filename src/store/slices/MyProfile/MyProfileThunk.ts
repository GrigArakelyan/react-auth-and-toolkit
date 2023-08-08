import { createAsyncThunk } from "@reduxjs/toolkit";
import { getMyProfile } from "../../../services/login";
import { GeneralInfoData } from "../../../types/GeneralInfo";

export const fetchMyProfile = createAsyncThunk<GeneralInfoData,undefined,{rejectValue: string }>(
  "myProfile/fetchMyProfile",
  async (_, { rejectWithValue }) => {
    return getMyProfile()
      .then(({data}) => data)
      .catch((error) => rejectWithValue(error.message));
  }
);
