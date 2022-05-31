import { apiUrl } from "../../config/constants";
import axios from "axios";
import { fechedRecruiters } from "./slice";
import { Recruiter } from "../../types";
import { AnyAction, Dispatch, ThunkAction } from "@reduxjs/toolkit";

// Get the users
export const fetchRecruiters = (): ThunkAction<
  Promise<void>,
  any,
  any,
  AnyAction
> => {
  return async (dispatch: Dispatch<AnyAction>): Promise<void> => {
    try {
      const { data }: { data: Recruiter[] } = await axios.get(
        `${apiUrl}/recruiters`
      );

      console.log("RECRUIT", data);
      dispatch(fechedRecruiters(data));
    } catch (error) {
      console.log(error);
    }
  };
};
