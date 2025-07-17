import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserActionPayload {}

export interface UserSliceState {}

const initialState: UserSliceState = {};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export default userSlice;
export const {} = userSlice.actions;
