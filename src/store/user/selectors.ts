import { RootState } from "..";

export const selectUsers = (state: RootState) => state.users.users;
export const selectProjects = (state: RootState) => state.users.projects;
