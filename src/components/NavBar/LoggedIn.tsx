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
      <Nav.Item
        style={{ padding: ".5rem 1rem", color: "red", background: "#343a40" }}
      >
        <a
          href="/account"
          style={{ padding: ".5rem 1rem", color: "red", background: "#343a40" }}
        >
          {" "}
          {user?.name}
        </a>
      </Nav.Item>
      <Button variant="secondary" onClick={() => dispatch(logOut())}>
        Logout
      </Button>
    </>
  );
}
