import React, { FormEvent, useEffect } from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AppDispatch } from "../../store";
import { login } from "../../store/user/actions";
import { selectToken } from "../../store/user/selectors";
import "./style.css";

export default function LogIn() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const dispatch: AppDispatch = useDispatch();
  const token = useSelector(selectToken);
  const navigate = useNavigate();

  useEffect(() => {
    if (token !== null) {
      navigate("/");
    }
  }, [token, navigate]);

  function submitForm(event: FormEvent): void {
    event.preventDefault();

    dispatch(login(email, password));

    setEmail("");
    setPassword("");
  }
  return (
    <form onSubmit={submitForm}>
      <div
        className="Container"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="login-box">
          <div className="user-box">
            <h2>LogIn</h2>

            <div className="mb-3">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Type your email"
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <div className="user-box">
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Type your password"
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>

            <a href="#">
              <Button
                variant="outline-primary"
                type="submit"
                onClick={submitForm}
              >
                LogIn
              </Button>
            </a>
            <div>
              <p style={{ color: "white" }}>
                Click here to <a href="/signup">SignUp</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
