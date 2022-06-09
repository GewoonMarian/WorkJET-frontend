import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../types";

interface IState {
  users: User[];
  token: string | null;
  profile: User | null;
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
    skillUpdated: (state, action) => {
      state.profile = action.payload;
    },
    certificationUpdated: (state, action) => {
      state.profile = action.payload;
    },
    projectUpdated: (state, action) => {
      state.profile = action.payload;
    },
    profileUpdated: (state, action) => {
      state.profile = action.payload;
    },
  },
});

export const {
  fechedUsers,
  loginSuccess,
  logOut,
  tokenStillValid,
  skillUpdated,
  certificationUpdated,
  projectUpdated,
  profileUpdated,
} = userSlice.actions;

export default userSlice.reducer;
