import { Slice, createSlice } from "@reduxjs/toolkit";
import { fetchLoginCode } from "./LoginCodeThunk";
import { State } from "../../../types/Reducers";
import { ActionLoginCode } from "../../../types/LoginCode";


const LoginCodeReducer:Slice = createSlice({
  name: "loginCode",
  initialState: {
    data: {},
    loading: false,
    error: null,
  },
  reducers: {
    removeTokenRed(state:State):void{
      state.data = {}
    }
  },
  extraReducers: {
    [fetchLoginCode.pending]: (state:State):void => {
      state.loading = true;
      state.error = null;
      state.data = {}
    },
    [fetchLoginCode.fulfilled]: (state:State, action:ActionLoginCode):void => {
      state.data = action;
      state.loading = false;
      state.error = null;
    },
    [fetchLoginCode.rejected]: (state:State, action:ActionLoginCode):void => {
      state.error = action.payload;
      state.loading = false;
      state.data = {};
    },
  },
});
export default LoginCodeReducer.reducer;
export const {removeTokenRed} = LoginCodeReducer.actions
