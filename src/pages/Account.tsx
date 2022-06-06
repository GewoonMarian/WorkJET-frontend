import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../store";

import { selectUserProfile } from "../store/user/selectors";
export default function Account() {
  const user = useSelector(selectUserProfile);
  // const dispatch: AppDispatch = useDispatch();

  console.log("account", user);

  return <div>Account</div>;
}
