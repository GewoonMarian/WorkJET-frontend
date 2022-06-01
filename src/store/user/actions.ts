import { apiUrl } from "../../config/constants";
import axios from "axios";
import { fechedUsers, signUpSuccess } from "./slice";
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
      const { data }: { data: User[] } = await axios.get(`${apiUrl}/users`);

      dispatch(fechedUsers(data));
    } catch (error) {
      console.log(error);
    }
  };
};

// SignUp
export const signUp = (
  name: string,
  email: string,
  password: string
): ThunkAction<Promise<void>, any, any, AnyAction> => {
  return async (dispatch: Dispatch<AnyAction>): Promise<void> => {
    try {
      const { response }: { response: User[] } = await axios.post(
        `${apiUrl}/users/signup`,
        {
          name,
          email,
          password,
        }
      );
      dispatch(signUpSuccess(response));
    } catch (error) {
      if (error) {
        console.log(error);
      }
    }
  };
};
