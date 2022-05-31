import { Recruiter } from "../../types";

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
        <strong style={{ color: "red" }}>{props.isRecruting!}!</strong>
      </p>
      <div>
        <img src={props.imageUrl} alt="" width="200px" />
      </div>
    </div>
  );
}
