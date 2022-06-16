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
    deleteSkill: (state, action) => {
      if (!state.profile) return state;

      state.profile.skills = state.profile.skills.filter(
        (skill: { name: string; id: number }) => skill.id !== action.payload
      );
    },

    deleteProject: (state, action) => {
      if (!state.profile) return state;
      state.profile.projects = state.profile.projects.filter(
        (project) => project.id !== action.payload
      );
    },
    deleteCertification: (state, action) => {
      if (!state.profile) return state;
      state.profile.certifications = state.profile.certifications.filter(
        (certification) => certification.id !== action.payload
      );
    },
    deleteUser: (state, action) => {
      if (!state.users) return state;
      state.users = state.users.filter(
        (user: { id: number }) => user.id !== action.payload
      );
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
  deleteSkill,
  deleteProject,
  deleteCertification,
  deleteUser,
} = userSlice.actions;

export default userSlice.reducer;
