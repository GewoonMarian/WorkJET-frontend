import { Badge } from "react-bootstrap";
import { User } from "../../types/user";

export default function UserCard(props: User) {
  return (
    <div>
      <p>
        <strong>{props.name}</strong>
      </p>
      <p>
        <strong>{props.email}</strong>
      </p>
      <p>
        <strong>{props.location}</strong>
      </p>
      <p>
        Available:
        <Badge bg="success">{props.isAvailable ? "✅" : "📛"}</Badge>
      </p>

      <div>
        <img src={props.imageUrl} alt="" width="200px" />
      </div>
      <div>
        {props.projects.map((project) => {
          return (
            <>
              <div>{project.name}</div>
              <div>{project.description}</div>
            </>
          );
        })}
      </div>
    </div>
  );
}
