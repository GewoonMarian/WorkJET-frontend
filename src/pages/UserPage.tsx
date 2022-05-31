import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserCard from "../components/UserCard";
import { AppDispatch } from "../store";
import { fetchUsers } from "../store/user/actions";
import { selectUsers } from "../store/user/selectors";
import { Project, User } from "../types";
import Projects from "../components/Projects";
import ProjectCard from "../components/ProjectCard";

export default function UsersPage() {
  const dispatch: AppDispatch = useDispatch();
  const users = useSelector(selectUsers);

  console.log("users", users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div>
      <div>
        <h1>UsersPage</h1>
        {users
          ? users.map((user: User) => {
              return (
                <div
                  className="container d-flex flex-row"
                  style={{ paddingTop: "2%" }}
                >
                  <div className="col-sm-6">
                    <div
                      className="d-flex flex-row"
                      style={{
                        width: "60rem",
                        backgroundColor: "#212529",
                        boxShadow: "5px 40px 60px #000000",
                        color: "#52be67",
                      }}
                    >
                      <UserCard
                        id={user.id}
                        name={user.name}
                        email={user.email}
                        location={user.location}
                        isAvailable={user.isAvailable!}
                        imageUrl={user.imageUrl}
                        description={user.description}
                        projects={user.projects.name}
                      />
                      {/* <ProjectCard
                        id={user.projects.id}
                        name={user.projects.name}
                        linkUrl={user.projects}
                        description={user.projects.description}
                      /> */}

                      <div style={{ paddingTop: "2%" }}>
                        <div>{user.description}</div>
                        {/* <div>{user.projects.name}</div> */}
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
