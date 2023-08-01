import { createSlice } from "@reduxjs/toolkit";
import { fetchLoginCode } from "./LoginCodeThunk";

const LoginCodeReducer = createSlice({
  name: "loginCode",
  initialState: {
    data: {},
    status: null,
    loading: false,
    error: null,
  },
  reducers: {
    removeTokenRed(state, action){
      state.data = action.payload
    }
  },
  extraReducers: {
    [fetchLoginCode.pending]: (state) => {
      state.loading = true;
    },
    [fetchLoginCode.fulfilled]: (state, action) => {
      state.data = action;
      state.loading = false;
      state.error = null;
    },
    [fetchLoginCode.rejected]: (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    },
  },
});
export default LoginCodeReducer.reducer;
export const {removeTokenRed} = LoginCodeReducer.actions
