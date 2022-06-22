import { News } from "../../types/news";
import "./style.css";

export default function NewsCard(props: News) {
  return (
    <div className="newsCardComponent">
      <h1>
        <strong>{props.title}</strong>
      </h1>

      <a href={props.linkUrl} target="_blank">
        <button
          type="button"
          className="btn btn-outline-info"
          style={{
            backgroundColor: "gray",
          }}
        >
          Info
        </button>
      </a>

      <img src={props.imageUrl} alt="" width="400px" />
      <p>
        <strong>{props.description}</strong>
      </p>
      <p>{props.date}</p>
    </div>
  );
}
