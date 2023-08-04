import { createSlice } from "@reduxjs/toolkit";
import { fetchLoginEmail } from "./LoginEmailThunk";
import initialState from "./InitialState";

const LoginEmailReducer = createSlice({
  name: "loginEmail",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(fetchLoginEmail.pending, (state) => {
      state.loading = true;
    })
    .addCase(fetchLoginEmail.fulfilled, (state, {payload}) => {
      state.data = {};
      state.loading = false;
      state.error = "";
    })
    .addCase(fetchLoginEmail.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    })
  },
});

export default LoginEmailReducer.reducer;
