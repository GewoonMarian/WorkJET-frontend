import { apiUrl } from "../../config/constants";
import axios from "axios";
import { fechedUsers } from "./slice";
import { User } from "../../types";
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
      const { data }: { data: User[] } = await axios.get(`${apiUrl}/auth`);

      dispatch(fechedUsers(data));
    } catch (error) {
      console.log(error);
    }
  };
};
