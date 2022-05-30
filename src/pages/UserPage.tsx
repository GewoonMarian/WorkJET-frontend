import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../store";
import { fetchUsers } from "../store/user/actions";
import { selectUsers } from "../store/user/selectors";

export default function UsersPage() {
  const dispatch: AppDispatch = useDispatch();
  // const users = useSelector((state: RootState) => state.users);
  const users = useSelector(selectUsers);
  console.log("users", users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return <div>UsersPage</div>;
}
