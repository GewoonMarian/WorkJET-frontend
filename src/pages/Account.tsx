import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import SkillForm from "../components/EditProfile/SkillForm";
import { selectUserProfile, selectToken } from "../store/user/selectors";
import { useNavigate } from "react-router-dom";

import { useEffect } from "react";

export default function Account() {
  const user = useSelector(selectUserProfile);
  const token = useSelector(selectToken);
  const navigate = useNavigate();

  useEffect(() => {
    if (token === null) {
      navigate("/login");
    }
  }, [token, navigate]);

  return user !== null ? (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "50px",
      }}
    >
      <div>
        <div className=" container d-flex flex-col">
          <div className="col-sm-6">
            <div
              className="d-flex flex-col"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "60rem",
                height: "30rem",
                backgroundColor: "#586c67",
                boxShadow: "5px 40px 60px #000000",
                color: "white",
              }}
            >
              <div
                className="User-card"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                key={user.id}
              >
                <li>
                  <p>
                    Name <p>{user.name}</p>
                  </p>
                  <p>
                    Email <p>{user.email}</p>
                  </p>
                  <p>
                    Location <p>{user.location}</p>
                  </p>

                  <p>
                    Availability <p>{user.isAvailable ? "yess" : "noo"}</p>
                  </p>
                </li>

                <img src={user.imageUrl} alt={user.name} width="300" />

                <p>
                  <div style={{ padding: "50px" }}>
                    {" "}
                    About
                    <svg
                      viewBox="0 0 36 36"
                      fill="none"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      width="80"
                      height="80"
                    >
                      <title>Mother Frances</title>
                      <mask
                        id="mask__beam"
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="36"
                        height="36"
                      >
                        <rect
                          width="36"
                          height="36"
                          rx="72"
                          fill="#FFFFFF"
                        ></rect>
                      </mask>
                      <g mask="url(#mask__beam)">
                        <rect width="36" height="36" fill="#e8175d"></rect>
                        <rect
                          x="0"
                          y="0"
                          width="36"
                          height="36"
                          transform="translate(-5 9) rotate(229 18 18) scale(1.1)"
                          fill="#363636"
                          rx="36"
                        ></rect>
                        <g transform="translate(-5 4.5) rotate(9 18 18)">
                          <path
                            d="M13,20 a1,0.75 0 0,0 10,0"
                            fill="#FFFFFF"
                          ></path>
                          <rect
                            x="10"
                            y="14"
                            width="1.5"
                            height="2"
                            rx="1"
                            stroke="none"
                            fill="#FFFFFF"
                          ></rect>
                          <rect
                            x="24"
                            y="14"
                            width="1.5"
                            height="2"
                            rx="1"
                            stroke="none"
                            fill="#FFFFFF"
                          ></rect>
                        </g>
                      </g>
                    </svg>
                  </div>
                  <p>{user.description}</p>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <p>
            <a
              className="btn btn-primary"
              data-toggle="collapse"
              href="skillEdit"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              Update Skills
            </a>
          </p>
          <p>
            <a
              className="btn btn-primary"
              data-toggle="collapse"
              href="profileEdit"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              Update Profile
            </a>
          </p>
          <p>
            <a
              className="btn btn-primary"
              data-toggle="collapse"
              href="projectEdit"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              Update Projects
            </a>
          </p>{" "}
          <p>
            <a
              className="btn btn-primary"
              data-toggle="collapse"
              href="certificationEdit"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              Update Certifications
            </a>
          </p>
        </div>
        {user
          ? user.projects.map((project) => (
              <div
                className="container d-flex flex-row"
                style={{ padding: "150px" }}
              >
                <div className="col-sm-6">
                  <div
                    className="d-flex flex-row"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "60rem",
                      height: "20rem",
                      backgroundColor: "#809e97",
                      boxShadow: "5px 40px 60px #000000",
                      color: "white",
                    }}
                  >
                    <div className="col">
                      <h1>Projects</h1>
                    </div>
                    <h3 className="col">
                      Name<h5>{project.name}</h5>
                    </h3>
                    <h3 className="col">
                      Description<h5>{project.description}</h5>
                    </h3>
                    <h3 className="col">
                      Link
                      <h5>
                        {" "}
                        <a href={project.linkUrl}>
                          <Button variant="link">Link</Button>
                        </a>
                      </h5>
                    </h3>
                  </div>
                </div>
              </div>
            ))
          : ""}
        {user
          ? user.certifications.map((certification) => (
              <div
                className="container d-flex flex-row"
                style={{ padding: "20px" }}
              >
                <div className="col-sm-6">
                  <div
                    className="d-flex flex-row"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "60rem",
                      height: "20rem",
                      backgroundColor: "transparent",
                      boxShadow: "5px 40px 60px #000000",
                      color: "white",
                    }}
                  >
                    <div className="col">
                      <h1>Certifications</h1>
                    </div>
                    <h3 className="col">
                      Name<h5>{certification.title}</h5>
                    </h3>
                    <h3 className="col">
                      Description<h5>{certification.date}</h5>
                    </h3>
                  </div>
                </div>
              </div>
            ))
          : ""}
        <div className="container d-flex flex-row" style={{ padding: "20px" }}>
          <div className="col-sm-6">
            <div
              className="d-flex flex-row"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "60rem",
                height: "20rem",
                backgroundColor: "transparent",
                boxShadow: "5px 40px 60px #000000",
                color: "white",
              }}
            >
              <div className="col">
                <h1>Skills</h1>
              </div>
              {user
                ? user.skills.map((skill) => (
                    <div
                      className="container d-flex flex-row"
                      style={{ padding: "20px" }}
                    >
                      <h3 className="col">
                        Name<h5>{skill.name}</h5>
                      </h3>
                    </div>
                  ))
                : ""}
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <p>Loading ...</p>
  );
}
