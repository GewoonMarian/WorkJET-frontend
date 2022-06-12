import { signUp } from "../../store/user/actions";
import { useDispatch, useSelector } from "react-redux";
import { FormEvent, useEffect, useState } from "react";
import { AppDispatch } from "../../store";
import { useNavigate } from "react-router-dom";
import { selectToken } from "../../store/user/selectors";
import "./style.css";
export default function SignUp() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isRecruiter, setIsRecruiter] = useState<boolean>(false);

  console.log("rec", isRecruiter);

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
    dispatch(signUp(name, email, password, isRecruiter));

    setEmail("");
    setPassword("");
    setName("");
    setIsRecruiter(false);
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
        <div>
          <div className="login-box">
            <h3>Sign Up</h3>
            <div className="user-box">
              <input
                type="text"
                className="form-control"
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Enter name"
                required
              />
            </div>

            <div className="user-box">
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </div>
            <div className="user-box">
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <div>
                <label> Are you a Recruiter?</label>
                <input
                  type="checkbox"
                  checked={isRecruiter}
                  onChange={() => setIsRecruiter(!isRecruiter)}
                />
              </div>

              <div>
                <a href="#">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={submitForm}
                  >
                    Sign Up
                  </button>
                </a>
              </div>
              <p>
                Already registered? <a href="/logIn">LogIn</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
