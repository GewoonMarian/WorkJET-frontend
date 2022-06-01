import { Button } from "react-bootstrap";
import { User } from "../../types/user";

export default function ProjectCard(props: User) {
  return (
    <div>
      <ol>
        <li>
          name<p>{props.projects[0]?.name}</p>
          info<p>{props.projects[0]?.description}</p>
          <p>
            <a href={props.projects[0]?.linkUrl}>
              <Button variant="link">Link</Button>
            </a>
          </p>
        </li>
      </ol>
    </div>
  );
}
