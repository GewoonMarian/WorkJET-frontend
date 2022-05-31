import React, { FormEvent } from "react";
import { useState } from "react";
import "./login.css";

function LoginForm({ Login, error }: any) {
  const [details, setDetails] = useState({ email: "", password: "" });

  const submitHandler = (event: FormEvent): void => {
    event.preventDefault();

    Login(details);
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="form-inner">
        <div className="login-form">
          <h2 style={{ color: "green" }}>
            <strong>Login</strong>
          </h2>
          {error !== "" ? <div className="error">{error}</div> : ""}

          <div className="form-group">
            <label htmlFor="email">Email</label>
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
          <div className="form-group">
            <label htmlFor="password">Password</label>
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
          <input type="submit" value="LOGIN" />
        </div>
      </div>
    </form>
  );
}

export default LoginForm;
