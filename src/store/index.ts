import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/slice";
import newsReducer from "./news/slice";

const store = configureStore({
  reducer: {
    users: userReducer,
    news: newsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
