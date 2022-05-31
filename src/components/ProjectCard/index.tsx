import { Project } from "../../types/project";
export default function ProjectCard(props: Project) {
  return (
    <div>
      <h1>
        <strong>{props.name}</strong>
      </h1>

      <a href={props.linkUrl}>
        <button
          type="button"
          className="btn btn-outline-info"
          style={{ backgroundColor: "lightblue" }}
        >
          Info
        </button>
      </a>

      <p>
        <strong>{props.description}</strong>
      </p>
    </div>
  );
}
