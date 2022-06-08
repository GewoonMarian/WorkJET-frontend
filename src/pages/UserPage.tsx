import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserCard from "../components/UserCard";
import { AppDispatch } from "../store";
import { fetchUsers } from "../store/user/actions";
import { selectUsers } from "../store/user/selectors";
import { User } from "../types";
import ProjectCard from "../components/UserCard/project";
import Button from "react-bootstrap/Button";
import CertificationCard from "../components/UserCard/Certification";
import SkillCard from "../components/UserCard/skills";

export default function UsersPage() {
  const dispatch: AppDispatch = useDispatch();
  const users = useSelector(selectUsers);
  const [projectOpen, setProjectOpen]: any = useState();
  const [certificationOpen, setCertificationOpen]: any = useState();
  const [skillOpen, setSkillOpen]: any = useState();

  // console.log("users", users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        {users
          ? users.map((user: User) => {
              return (
                <div
                  className="container d-flex flex-row"
                  style={{ paddingTop: "5%" }}
                >
                  <div className="col-sm-6">
                    <div
                      className="d-flex flex-row"
                      style={{
                        width: "60rem",
                        height: "30rem",
                        backgroundColor: "#212529",
                        boxShadow: "5px 40px 60px #26ff04",
                        color: "#52be67",
                      }}
                      key={user.id}
                    >
                      <UserCard
                        id={user.id}
                        name={user.name}
                        email={user.email}
                        location={user.location}
                        isAvailable={user.isAvailable}
                        imageUrl={user.imageUrl}
                        description={user.description}
                        projects={[]}
                        certifications={[]}
                        skills={[]}
                      />

                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <div>
                          <div>{user.description}</div>

                          <div>
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "baseline",
                                alignItems: "baseline",
                              }}
                            >
                              <div>
                                <Button
                                  variant="outline-success"
                                  onClick={() =>
                                    setCertificationOpen(!certificationOpen)
                                  }
                                >
                                  Certifications
                                </Button>
                                {certificationOpen && (
                                  <div>
                                    <CertificationCard
                                      id={user.id}
                                      name={""}
                                      email={""}
                                      location={""}
                                      isAvailable={false}
                                      imageUrl={""}
                                      description={""}
                                      projects={[]}
                                      certifications={user.certifications}
                                      skills={[]}
                                    />
                                  </div>
                                )}
                              </div>
                              <br />
                              <div>
                                <Button
                                  variant="outline-success"
                                  onClick={() => setProjectOpen(!projectOpen)}
                                >
                                  Projects
                                </Button>
                                {projectOpen && (
                                  <div>
                                    <ProjectCard
                                      id={""}
                                      name={""}
                                      description={""}
                                      email={""}
                                      location={""}
                                      isAvailable={false}
                                      imageUrl={""}
                                      projects={user.projects}
                                      certifications={[]}
                                      skills={[]}
                                    />
                                  </div>
                                )}
                              </div>
                              <div>
                                <Button
                                  variant="outline-success"
                                  onClick={() => setSkillOpen(!skillOpen)}
                                >
                                  Skills
                                </Button>
                                {skillOpen && (
                                  <div>
                                    <SkillCard
                                      id={undefined}
                                      name={""}
                                      email={""}
                                      location={""}
                                      isAvailable={false}
                                      imageUrl={""}
                                      description={""}
                                      projects={[]}
                                      certifications={[]}
                                      skills={user.skills}
                                    />
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          : "Loading"}
      </div>
    </div>
  );
}
