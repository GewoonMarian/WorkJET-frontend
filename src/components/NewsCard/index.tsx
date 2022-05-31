import { News } from "../../types/news";

export default function NewsCard(props: News) {
  return (
    <div>
      <h1>
        <strong>{props.title}</strong>
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

      <div>
        <img src={props.imageUrl} alt="" width="600px" />
      </div>
      <p>
        <strong>{props.description}</strong>
      </p>
    </div>
  );
}