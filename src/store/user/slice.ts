import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../types";

interface IState {
  users: User[];
  token: string | null;
  profile: User[] | null;
}

const initialState: IState = {
  token: localStorage.getItem("token"),
  profile: null,
  users: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    fechedUsers: (state, action: PayloadAction<User[]>) => {
      state.users = action.payload;
    },
    loginSuccess: (state, action) => {
      console.log("what's the action? login", action);
      localStorage.setItem("token", action.payload.token);
      state.token = action.payload.token;
      state.profile = action.payload.user;
    },
    logOut: (state) => {
      localStorage.removeItem("token");
      state.token = null;
      state.profile = null;
    },
    tokenStillValid: (state, action) => {
      state.profile = action.payload.user;
    },
  },
});

export const { fechedUsers, loginSuccess, logOut, tokenStillValid } =
  userSlice.actions;

export default userSlice.reducer;
