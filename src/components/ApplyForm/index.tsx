import { useState } from "react";
import { FormEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../store";
import { sendEmail } from "../../store/user/actions";
import { selectToken } from "../../store/user/selectors";
import "./style.css";

const ApplyForm = () => {
  const dispatch: AppDispatch = useDispatch();

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [subject, setSubject] = useState<string>("");

  const token = useSelector(selectToken);

  if (!token) return null;

  function submitForm(event: FormEvent): void {
    event.preventDefault();

    dispatch(sendEmail(name, email, subject, message));

    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  }

  return (
    <form className="form-style-4">
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
            backgroundColor: "#2bb1af",
            boxShadow: "5px 40px 60px #000000",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
          }}
        >
          <div className="card-body">
            <div className="mb-3">
              <label>
                <strong>Name</strong>
              </label>
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
              <label>
                <strong>Email</strong>
              </label>
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
              <label>
                <strong>Subject</strong>
              </label>
              <input
                type="subject"
                className="form-control"
                placeholder="Enter subject"
                value={subject}
                onChange={(event) => setSubject(event.target.value)}
                required
              />
            </div>
            <div className="mb-3 pt-0">
              <textarea
                placeholder="Your message"
                className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                required
              />
            </div>
            <div className="d-grid">
              <button
                type="submit"
                className="btn btn-primary"
                onClick={submitForm}
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};
export default ApplyForm;
