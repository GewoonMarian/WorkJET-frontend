import { Button } from "react-bootstrap";
import { User } from "../../types/user";
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
