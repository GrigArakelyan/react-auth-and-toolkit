import { AsyncThunk, createAsyncThunk } from "@reduxjs/toolkit";
import { postLoginEmail } from "../../../services/login";
import { LoginEmailPostData } from "../../../types/LoginEmail";

export const fetchLoginEmail:any = createAsyncThunk<void, LoginEmailPostData>(
  "loginEmail/fetchLoginEmail",
  async (loginEmail:LoginEmailPostData, { rejectWithValue }) => {
    return postLoginEmail(loginEmail)
      .then(() => {})
      .catch((error) => rejectWithValue(error.message));
  }
);
