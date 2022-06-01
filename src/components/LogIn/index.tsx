import React, { FormEvent } from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import "./login.css";

function LoginForm({ Login, error }: any) {
  const [details, setDetails] = useState({ email: "", password: "" });

  const submitHandler = (event: FormEvent): void => {
    event.preventDefault();

    Login(details);
  };
  return (
    <form onSubmit={submitHandler}>
      <div
        className="Container"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          className="card "
          style={{
            width: "40rem",
            backgroundColor: "transparent",
            boxShadow: "5px 40px 60px #000000",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="card-body">
            <h2>LogIn</h2>
            {error !== "" ? <div className="error">{error}</div> : ""}

            <div className="mb-3">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Type your email"
                onChange={(event) =>
                  setDetails({ ...details, email: event.target.value })
                }
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Type your password"
                onChange={(event) =>
                  setDetails({ ...details, password: event.target.value })
                }
              />
            </div>
            <Button variant="outline-primary">LogIn</Button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default LoginForm;
