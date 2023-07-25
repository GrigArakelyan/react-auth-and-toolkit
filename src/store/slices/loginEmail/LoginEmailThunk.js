import { createAsyncThunk } from "@reduxjs/toolkit";
import { postLoginEmail } from "../../../services/login";

export const fetchLoginEmail = createAsyncThunk(
  "loginEmail/fetchLoginEmail",
  async (loginEmail, { rejectWithValue }) => {
    return postLoginEmail(loginEmail)
      .then(() => {})
      .catch((error) => rejectWithValue(error.message));
  }
);
