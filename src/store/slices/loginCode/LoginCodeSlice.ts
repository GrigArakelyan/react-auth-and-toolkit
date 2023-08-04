import { createSlice } from "@reduxjs/toolkit";
import { fetchLoginCode } from "./LoginCodeThunk";
import initialState from "./initialState";


const LoginCodeReducer = createSlice({
  name: "loginCode",
  initialState: initialState,
  reducers: {
    removeTokenRed(state){
      state.data = {}
    }
  },
  extraReducers: (builder) => {
    builder
    .addCase(fetchLoginCode.pending, (state) => {
      state.loading = true
    })
    .addCase(fetchLoginCode.fulfilled, (state, {payload}) => {
      state.data = payload;
      state.loading = false;
      state.error = '';
    })
    .addCase(fetchLoginCode.rejected, (state, {payload}) => {
      state.error = payload;
      state.loading = false;
    })
  }
});
export default LoginCodeReducer.reducer;
export const {removeTokenRed} = LoginCodeReducer.actions


  // {
  //   [fetchLoginCode.pending]: (state) => {
      // state.loading = true;
      // state.error = null;
      // state.data = {}
  //   },
  //   [fetchLoginCode.fulfilled]: (state, action) => {
      // state.data = action;
      // state.loading = false;
      // state.error = null;
  //   },
  //   [fetchLoginCode.rejected]: (state, action) => {
      // state.error = action.payload;
      // state.loading = false;
      // state.data = {};
  //   },
  // },