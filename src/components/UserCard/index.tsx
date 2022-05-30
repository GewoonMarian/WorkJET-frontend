import { User } from "../../types/user";

export default function UserCard(props: User) {
  return (
    <div>
      <p>
        Name: <strong>{props.name}</strong>
      </p>
      <p>
        Email: <strong>{props.email}</strong>
      </p>
      <p>
        Location: <strong>{props.location}</strong>
      </p>
      <p>
        Available: <strong>{props.isAvailable}</strong>
      </p>
      <div>
        <img src={props.imageUrl} alt="" width="200px" />
      </div>
      <p>
        Description: <strong>{props.description}</strong>
      </p>
    </div>
  );
}
