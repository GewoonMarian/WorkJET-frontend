import { apiUrl } from "../../config/constants";
import axios from "axios";
import { fechedUsers, loginSuccess, logOut, tokenStillValid } from "./slice";
import { User } from "../../types";
import { AnyAction, Dispatch, ThunkAction } from "@reduxjs/toolkit";
import { selectToken } from "./selectors";
import { showMessageWithTimeout } from "../appState/actions";
import { appDoneLoading, appLoading, setMessage } from "../appState/slice";

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
  return async (dispatch): Promise<void> => {
    try {
      const response = await axios.post(`${apiUrl}/users/signup`, {
        name,
        email,
        password,
      });
      console.log("signUp", response);
      dispatch(
        loginSuccess({ token: response.data.token, user: response.data.user })
      );
      dispatch(
        showMessageWithTimeout("success", true, "account created", 15000)
      );
      dispatch(appDoneLoading());
    } catch (error) {
      if (error instanceof Error) {
        console.log(error);
        //  dispatch(
        //    setMessage({
        //      variant: "danger",
        //      dismissable: true,
        //      text: error.response.data.message,
        //    })
        //  );
      }
    }
  };
};

export const getUserWithStoredToken = (): ThunkAction<
  Promise<void>,
  any,
  any,
  AnyAction
> => {
  return async (dispatch: Dispatch<AnyAction>, getState) => {
    const token = selectToken(getState());

    if (token === null) return;

    dispatch(appLoading());
    try {
      const response = await axios.get(`${apiUrl}/users/me`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log(" me", response.data);

      dispatch(tokenStillValid(response.data));
      dispatch(appDoneLoading());
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      } else {
        console.log(error);
      }

      dispatch(logOut());
      dispatch(appDoneLoading());
    }
  };
};

// Sign In
export const login = (
  email: string,
  password: string
): ThunkAction<Promise<void>, any, any, AnyAction> => {
  return async (dispatch: Dispatch<AnyAction>, getState) => {
    try {
      const response = await axios.post(`${apiUrl}/users/login`, {
        email,
        password,
      });

      dispatch(
        loginSuccess({ token: response.data.token, user: response.data.user })
      );
      // dispatch(showMessageWithTimeout("success", true, "Welcome Back", 1500));
    } catch (error) {
      let errorMessage = "Failed to do something ";
      if (error instanceof Error) {
        errorMessage = error.message;
      }
      console.log(errorMessage);
    }
  };
};
