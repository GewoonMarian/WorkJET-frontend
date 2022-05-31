import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User, Project } from "../../types";

interface IState {
  users: User[];
  projects: Project[];
}

const initialState: IState = {
  users: [],
  projects: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    fechedUsers: (state, action: PayloadAction<User[]>) => {
      console.log("what's the action", action);
      state.users = action.payload;
    },
    fechedProjects: (state, action: PayloadAction<Project[]>) => {
      console.log("what's the action", action);
      state.projects = action.payload;
    },
  },
});

export const { fechedUsers, fechedProjects } = userSlice.actions;

export default userSlice.reducer;
