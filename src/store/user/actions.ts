import { apiUrl } from "../../config/constants";
import axios from "axios";
import {
  fechedUsers,
  loginSuccess,
  logOut,
  tokenStillValid,
  skillUpdated,
  certificationUpdated,
  projectUpdated,
  profileUpdated,
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
          showMessageWithTimeout("success", true, "account created", 2500)
        );
        dispatch(appDoneLoading());
      }
    } catch (error: any) {
      if (error.response) {
        console.log(error.response.data.message);
        dispatch(
          setMessage({
            variant: "danger",
            dismissable: true,
            text: error.response.data.message,
          })
        );
      } else {
        console.log(error.message);
        dispatch(
          setMessage({
            variant: "danger",
            dismissable: true,
            text: error.message,
          })
        );
      }
      dispatch(appDoneLoading());
    }
  };
};

// Sign In
export const login = (
  email: string,
  password: string
): ThunkAction<Promise<void>, any, any, AnyAction> => {
  return async (dispatch) => {
    dispatch(appLoading());

    try {
      const response = await axios.post(`${apiUrl}/users/login`, {
        email,
        password,
      });

      dispatch(
        loginSuccess({ token: response.data.token, user: response.data.user })
      );
      dispatch(showMessageWithTimeout("success", false, "Welcome Back ", 3500));
    } catch (error: any) {
      if (error.response) {
        console.log(error.response.data.message);
        dispatch(
          setMessage({
            variant: "danger",
            dismissable: true,
            text: error.response.data.message,
          })
        );
      } else {
        console.log(error.message);
        dispatch(
          setMessage({
            variant: "danger",
            dismissable: true,
            text: error.response.data.message,
          })
        );
      }
      dispatch(appDoneLoading());
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

// Update skills

export const updateMySkills = (
  skills: number[] | null | undefined,
  extraSkill: string
): ThunkAction<Promise<void>, any, any, AnyAction> => {
  return async (dispatch: Dispatch<AnyAction>, getState): Promise<void> => {
    try {
      const user = getState().users.profile;

      dispatch(appLoading());

      const response = await axios.post(`${apiUrl}/users/${user.id}/skill`, {
        skills,
        extraSkill,
      });

      console.log("update skill", response.data);

      dispatch(skillUpdated(response.data.skill));
      dispatch(appDoneLoading());
    } catch (e: any) {
      console.log(e.message);
    }
  };
};

// Add certification
export const postCertification = (
  title: string,
  date: string
): ThunkAction<Promise<void>, any, any, AnyAction> => {
  return async (dispatch: Dispatch<AnyAction>, getState): Promise<void> => {
    try {
      const user = getState().users.profile;

      dispatch(appLoading());

      const response = await axios.post(
        `${apiUrl}/certifications/${user.id}/certification`,
        {
          title,
          date,
        }
      );

      console.log("POST CERTIFICATION", response);

      dispatch(certificationUpdated(response.data.certification));
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

// Post a project
export const postProject = (
  name: string,
  description: string,
  linkUrl: string
): ThunkAction<Promise<void>, any, any, AnyAction> => {
  return async (dispatch: Dispatch<AnyAction>, getState): Promise<void> => {
    try {
      const user = getState().users.profile;

      dispatch(appLoading());

      const response = await axios.post(
        `${apiUrl}/projects/${user.id}/project`,
        {
          name,
          description,
          linkUrl,
        }
      );

      console.log("POST PROJECT", response);

      dispatch(projectUpdated(response.data.project));
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

// Update  user profile
export const postProfileDesc = (
  name: string,
  email: string,
  password: string,
  location: string,
  description: string,
  imageUrl: string,
  isAvailable: boolean
): ThunkAction<Promise<void>, any, any, AnyAction> => {
  return async (dispatch: Dispatch<AnyAction>, getState): Promise<void> => {
    try {
      const user = getState().users.profile;

      dispatch(appLoading());

      const response = await axios.put(`${apiUrl}/users/${user.id}/user`, {
        name,
        email,
        password,
        location,
        description,
        imageUrl,
        isAvailable,
      });

      console.log("POST NEW USER", response);

      dispatch(profileUpdated(response.data.profile));
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
