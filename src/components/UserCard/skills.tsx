import { User } from "../../types/user";

export default function SkillCard(props: User) {
  return (
    <div>
      {props.skills.map(function (skill) {
        return (
          <>
            <div>
              name:
              <p>{skill.name}</p>
            </div>
          </>
        );
      })}
    </div>
  );
}
