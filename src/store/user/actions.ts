import { apiUrl } from "../../config/constants";
import axios from "axios";
import { fechedUsers, fechedProjects } from "./slice";
import { User, Project } from "../../types";
import { AnyAction, Dispatch, ThunkAction } from "@reduxjs/toolkit";

// Get the users
export const fetchUsers = (): ThunkAction<
  Promise<void>,
  any,
  any,
  AnyAction
> => {
  return async (dispatch: Dispatch<AnyAction>): Promise<void> => {
    try {
      const { data }: { data: User[] } = await axios.get(`${apiUrl}/users`);

      dispatch(fechedUsers(data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchProjects = (): ThunkAction<
  Promise<void>,
  any,
  any,
  AnyAction
> => {
  return async (dispatch: Dispatch<AnyAction>): Promise<void> => {
    try {
      const { data }: { data: Project[] } = await axios.get(
        `${apiUrl}/projects`
      );
      console.log("Project", data);

      dispatch(fechedProjects(data));
    } catch (error) {
      console.log(error);
    }
  };
};
