import { AsyncThunk, createAsyncThunk } from "@reduxjs/toolkit";
import { postLoginEmail } from "../../../services/login";
import { LoginEmailPostData } from "../../../types/LoginEmail";

export const fetchLoginEmail = createAsyncThunk<void, LoginEmailPostData, {rejectValue: string}>(
  "loginEmail/fetchLoginEmail",
  async (loginEmail, { rejectWithValue }) => {
    return postLoginEmail(loginEmail)
      .then(() => {})
      .catch((error) => rejectWithValue(error.message));
  }
);
