import { createAsyncThunk } from "@reduxjs/toolkit";
import { postLoginCode } from "../../../services/login";
import { setRefreshToken, setToken } from "../../../services/token";

export const fetchLoginCode = createAsyncThunk(
  "loginCode/fetchLoginCode",
  async (userLoginObj, { rejectWithValue }) => {
    return postLoginCode(userLoginObj)
      .then((res) => {
        setToken(res.data.jwt.token);
        setRefreshToken(res.data.jwt.refreshToken);
        return res.data.jwt;
      })
      .catch((error) => {
        return rejectWithValue(error.message);
      });
  }
);
