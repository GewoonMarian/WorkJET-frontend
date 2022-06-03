import { User } from "../../types/user";

export default function CertificationCard(props: User) {
  return (
    <div>
      {props.certifications.map(function (certification) {
        return (
          <>
            <div>
              name:
              <p>{certification.title}</p>
            </div>
            <div>{certification.date}</div>
          </>
        );
      })}
    </div>
  );
}
