import { createAsyncThunk } from "@reduxjs/toolkit";
import { getMyProfile } from "../../../services/login";

export const fetchMyProfile = createAsyncThunk(
  "myProfile/fetchMyProfile",
  async (_, { rejectWithValue }) => {
    return getMyProfile()
      .then(({data}) => data)
      .catch((error) => rejectWithValue(error.message));
  }
);
