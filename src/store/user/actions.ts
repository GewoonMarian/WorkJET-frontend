import { apiUrl } from "../../config/constants";
import axios from "axios";
import {
  fechedUsers,
  loginSuccess,
  logOut,
  tokenStillValid,
  skillUpdated,
} from "./slice";
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
  password: string,
  isRcruiter: boolean
): ThunkAction<Promise<void>, any, any, AnyAction> => {
  return async (dispatch): Promise<void> => {
    try {
      if (isRcruiter) {
        const response = await axios.post(`${apiUrl}/users/signup`, {
          name,
          email,
          password,
          isRcruiter,
        });
        console.log("signUp rec", response);
        dispatch(
          loginSuccess({
            token: response.data.token,
            user: response.data.user,
          })
        );
      } else {
        const response = await axios.post(`${apiUrl}/users/signup`, {
          name,
          email,
          password,
          isRcruiter,
        });
        console.log("signUp user", response);

        dispatch(
          loginSuccess({ token: response.data.token, user: response.data.user })
        );
        dispatch(
          showMessageWithTimeout("success", true, "account created", 1500)
        );
        dispatch(appDoneLoading());
      }
    } catch (error) {
      if (error instanceof Error) {
        console.log(error);
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

// send Email
export const sendEmail = (
  name: string,
  email: string,
  subject: string,
  message: string
) => {
  return async (dispatch: Dispatch<AnyAction>): Promise<void> => {
    try {
      dispatch(appLoading());

      const response = await axios.post(`${apiUrl}/contact`, {
        name,
        email,
        subject,
        message,
      });

      dispatch(appDoneLoading());
    } catch (error) {
      let errorMessage = "Failed to do something ";
      if (error instanceof Error) {
        errorMessage = error.message;
      }
      console.log(errorMessage);
    }
  };
};

// Update profile

export const updateMySkills = (
  skills: number[] | null | undefined
): ThunkAction<Promise<void>, any, any, AnyAction> => {
  return async (dispatch: Dispatch<AnyAction>, getState): Promise<void> => {
    try {
      const user = getState().users.profile;

      dispatch(appLoading());

      const response = await axios.post(`${apiUrl}/users/${user.id}/skill`, {
        skills,
      });

      console.log("update skill", response);
      // dispatch(
      //   showMessageWithTimeout("success", false, response.data.message, 3000)
      // );
      dispatch(skillUpdated(response.data.skill));
      dispatch(appDoneLoading());
    } catch (e: any) {
      console.log(e.message);
    }
  };
};
