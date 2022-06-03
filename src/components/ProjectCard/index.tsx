import { User } from "../../types";

export default function ProjectCard(props: User) {
  return (
    <div>
      <div>
        {props.projects.map(function (project) {
          return (
            <>
              <div>
                name:
                <p>{project.name}</p>
              </div>
              <div>{project.description}</div>
            </>
          );
        })}
      </div>
    </div>
  );
}
