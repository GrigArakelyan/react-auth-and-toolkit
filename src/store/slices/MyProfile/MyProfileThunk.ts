import { createAsyncThunk } from "@reduxjs/toolkit";
import { getMyProfile } from "../../../services/login";
import { FetchType } from "../../../types/Reducers";

export const fetchMyProfile:any = createAsyncThunk<FetchType, void>(
  "myProfile/fetchMyProfile",
  async (_, { rejectWithValue }) => {
    return getMyProfile()
      .then(({data}) => data)
      .catch((error) => rejectWithValue(error.message));
  }
);
