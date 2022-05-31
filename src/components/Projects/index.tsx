import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../store";
import { fetchProjects } from "../../store/user/actions";
import { selectProjects } from "../../store/user/selectors";
import { Project } from "../../types";
import ProjectCard from "../ProjectCard";

export default function UsersPage() {
  const dispatch: AppDispatch = useDispatch();
  // const users = useSelector((state: RootState) => state.users);
  const projects = useSelector(selectProjects);
  console.log("projects", projects);

  useEffect(() => {
    dispatch(fetchProjects());
  }, []);
  return (
    <div>
      {projects
        ? projects.map((project: Project) => {
            return (
              <div>
                <div>
                  <ProjectCard
                    id={project.id}
                    name={project.name}
                    linkUrl={project.linkUrl}
                    description={project.description}
                  />
                </div>
              </div>
            );
          })
        : "LOADING..."}
    </div>
  );
}
