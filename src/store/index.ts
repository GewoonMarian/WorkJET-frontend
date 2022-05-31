import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/slice";
import newsReducer from "./news/slice";
import recruiterReducer from "./recruiters/slice";

const store = configureStore({
  reducer: {
    users: userReducer,
    news: newsReducer,
    recruiter: recruiterReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
