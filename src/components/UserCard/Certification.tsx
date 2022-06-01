import { User } from "../../types/user";

export default function CertificationCard(props: User) {
  return (
    <div>
      <ul>
        <li>
          <p>
            {props.certifications[0]?.title}
            <br />
            {props.certifications[0]?.date}
          </p>
        </li>
        <li>
          <p>
            {props.certifications[1]?.title}
            <br />
            {props.certifications[1]?.date}
          </p>
        </li>
      </ul>
    </div>
  );
}
