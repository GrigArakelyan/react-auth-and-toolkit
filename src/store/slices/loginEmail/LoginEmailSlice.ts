import { Slice, createSlice } from "@reduxjs/toolkit";
import { fetchLoginEmail } from "./LoginEmailThunk";
import { State } from "../../../types/Reducers";
import { ActionLoginEmailFulfiled, ActionLoginEmailRejected } from "../../../types/LoginEmail";

const LoginEmailReducer:Slice = createSlice({
  name: "loginEmail",
  initialState: {
    data: {},
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [fetchLoginEmail.pending]: (state:State):void => {
      state.loading = true;
    },
    [fetchLoginEmail.fulfilled]: (state:State, action:ActionLoginEmailFulfiled):void => {
      state.data = action.payload;
      state.loading = false;
      state.error = null;
    },
    [fetchLoginEmail.rejected]: (state:State, action:ActionLoginEmailRejected):void => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export default LoginEmailReducer.reducer;
