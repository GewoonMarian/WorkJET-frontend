import { RootState } from "..";

export const selectUsers = (state: RootState) => state.users.users;
// export const selectToken = (state: RootState) => state.users.token;
