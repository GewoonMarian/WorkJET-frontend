import { useState } from "react";
const ApplyForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");

  // function submitForm(event: any) {
  //   event.preventDefault();

  //   dispatch(apple(name, email, subject, message));

  //   setName("");
  //   setEmail("");
  //   setSubject("");
  //   setMessage("");
  // }

  return (
    <form>
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
              <label>Subject</label>
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
                type="message"
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
                // onClick={submitForm}
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
