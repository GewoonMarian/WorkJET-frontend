import { apiUrl } from "../../config/constants";
import axios from "axios";
import { fechedNews } from "./slice";
import { News } from "../../types";
import { AnyAction, Dispatch, ThunkAction } from "@reduxjs/toolkit";

// Get the users
export const fetchNews = (): ThunkAction<
  Promise<void>,
  any,
  any,
  AnyAction
> => {
  return async (dispatch: Dispatch<AnyAction>): Promise<void> => {
    try {
      const { data }: { data: News[] } = await axios.get(`${apiUrl}/news`);

      dispatch(fechedNews(data));
    } catch (error) {
      console.log(error);
    }
  };
};
