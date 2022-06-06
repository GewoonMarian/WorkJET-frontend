import { Recruiter } from "../../types";
import Badge from "react-bootstrap/Badge";

export default function RecruiterCard(props: Recruiter) {
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
        Recruiting:
        <Badge bg="success">{props.isRecruting ? "✅" : "📛"}</Badge>
      </p>
      <div>
        <img src={props.imageUrl} alt="" width="200px" />
      </div>
    </div>
  );
}
