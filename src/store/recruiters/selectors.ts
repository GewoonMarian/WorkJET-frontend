import { RootState } from "..";

export const selectRecruiters = (state: RootState) =>
  state.recruiter.recruiters;
