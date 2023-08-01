import { createSlice } from "@reduxjs/toolkit";
import { fetchLoginEmail } from "./LoginEmailThunk";

const LoginEmailReducer = createSlice({
  name: "loginEmail",
  initialState: {
    data: {},
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [fetchLoginEmail.pending]: (state) => {
      state.loading = true;
    },
    [fetchLoginEmail.fulfilled]: (state, { payload }) => {
      state.data = payload;
      state.loading = false;
      state.error = null;
    },
    [fetchLoginEmail.rejected]: (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    },
  },
});

export default LoginEmailReducer.reducer;
