import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../types";

interface IState {
  users: User[];
}

const initialState: IState = {
  users: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    fechedUsers: (state, action: PayloadAction<User[]>) => {
      console.log("what's the action", action);
      state.users = action.payload;
    },
  },
});

export const { fechedUsers } = userSlice.actions;

export default userSlice.reducer;
