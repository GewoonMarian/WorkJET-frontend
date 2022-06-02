import { User } from "../../types/user";

export default function SkillCard(props: User) {
  return (
    <div>
      <ol>
        <li>
          name<p>{props.skills[0]?.name}</p>
        </li>
      </ol>
    </div>
  );
}
