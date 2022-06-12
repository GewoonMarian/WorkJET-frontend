import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { News } from "../../types";

interface IState {
  news: News[];
}

const initialState: IState = {
  news: [],
};

export const newsSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    fechedNews: (state, action: PayloadAction<News[]>) => {
      state.news = action.payload;
    },
  },
});

export const { fechedNews } = newsSlice.actions;

export default newsSlice.reducer;
