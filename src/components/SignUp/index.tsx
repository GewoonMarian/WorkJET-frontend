import { signUp } from "../../store/user/actions";
import { useDispatch, useSelector } from "react-redux";
import { FormEvent, useEffect, useState } from "react";
import { AppDispatch } from "../../store";
import { useNavigate } from "react-router-dom";
import { selectToken } from "../../store/user/selectors";
export default function SignUp() {
  const [name, setName] = useState<string>("");
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
    dispatch(signUp(name, email, password));

    setEmail("");
    setPassword("");
    setName("");
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
            <h3>Sign Up</h3>
            <div className="mb-3">
              <label>Name</label>
              <input
                type="text"
                className="form-control"
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Enter name"
                required
              />
            </div>

            <div className="mb-3">
              <label>Email address</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
              />
            </div>
            <div className="d-grid">
              <button
                type="submit"
                className="btn btn-primary"
                onClick={submitForm}
              >
                Sign Up
              </button>
            </div>
            <p>
              Already registered? <a href="/logIn">LogIn</a>
            </p>
          </div>
        </div>
      </div>
    </form>
  );
}
