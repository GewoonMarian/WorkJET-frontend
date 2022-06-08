import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../store/user/slice";
import Button from "react-bootstrap/Button";
import { selectUserProfile } from "../../store/user/selectors";
import Nav from "react-bootstrap/Nav";

export default function LoggedIn() {
  const dispatch = useDispatch();
  const user = useSelector(selectUserProfile);
  return (
    <>
      <Nav.Item style={{ padding: ".5rem 1rem", color: "red" }}>
        {user?.name}
      </Nav.Item>
      <Button className="button" onClick={() => dispatch(logOut())}>
        Logout
      </Button>
    </>
  );
}
