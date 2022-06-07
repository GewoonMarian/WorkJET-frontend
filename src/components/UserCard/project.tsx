import { Button } from "react-bootstrap";
import { User } from "../../types/user";
export default function ProjectCard(props: User) {
  return (
    <div>
      <div>
        {props.projects.map((project) => {
          return (
            <div>
              <div>
                name:
                <p>{project.name}</p>
              </div>
              <div>{project.description}</div>
              <div>
                <p>
                  <a href={project.linkUrl}>
                    <Button variant="link">Link</Button>
                  </a>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
