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
        Available: <strong>{props.isAvailable}</strong>
      </p>
      <div>
        <img src={props.imageUrl} alt="" width="200px" />
      </div>
      <p>{/* <strong>{props.description}</strong> */}</p>
      <p>{props.projects}</p>
    </div>
  );
}
