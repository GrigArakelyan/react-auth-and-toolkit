import { AsyncThunk, createAsyncThunk } from "@reduxjs/toolkit";
import { postLoginCode } from "../../../services/login";
import { setRefreshToken, setToken } from "../../../services/token";
import { LoginCodePostData } from "../../../types/LoginCode";

export const fetchLoginCode: AsyncThunk<any, LoginCodePostData, any> = createAsyncThunk(
  "loginCode/fetchLoginCode",
  async (userLoginObj:LoginCodePostData, { rejectWithValue }) => {
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
