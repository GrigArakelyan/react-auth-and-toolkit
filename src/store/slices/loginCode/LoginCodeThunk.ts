import { createAsyncThunk } from "@reduxjs/toolkit";
import { postLoginCode } from "../../../services/login";
import { setRefreshToken, setToken } from "../../../services/token";
import { LoginCodePostData } from "../../../types/LoginCode";
import { FetchType } from "../../../types/Reducers";



export const fetchLoginCode:any = createAsyncThunk<FetchType, LoginCodePostData>(
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
