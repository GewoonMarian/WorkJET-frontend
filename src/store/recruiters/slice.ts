import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Recruiter } from "../../types";

interface IState {
  recruiters: Recruiter[];
}

const initialState: IState = {
  recruiters: [],
};

export const recruiterSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    fechedRecruiters: (state, action: PayloadAction<Recruiter[]>) => {
      console.log("what's the action", action);
      state.recruiters = action.payload;
    },
  },
});

export const { fechedRecruiters } = recruiterSlice.actions;

export default recruiterSlice.reducer;
