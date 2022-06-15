import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import NewsCard from "../components/NewsCard";
import { AppDispatch } from "../store";
import { fetchNews } from "../store/news/actions";
import { selectNews } from "../store/news/selectors";
import { News } from "../types";
import { selectToken } from "../store/user/selectors";
import { useNavigate } from "react-router-dom";
import "./style.css";

export default function UsersPage() {
  const dispatch: AppDispatch = useDispatch();
  const news = useSelector(selectNews);

  const token = useSelector(selectToken);
  const navigate = useNavigate();

  useEffect(() => {
    if (token === null) {
      navigate("/login");
    }
  }, [token, navigate]);

  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);

  return (
    <div>
      <div className="news-card">
        {news
          ? news.news.map((news: News) => {
              return (
                <>
                  <ul className="cards">
                    <li>
                      <a href="" className="card">
                        <img
                          src={news.imageUrl}
                          className="card__image"
                          alt=""
                        />
                        <div className="card__overlay">
                          <div className="card__header">
                            <svg
                              className="card__arc"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path />
                            </svg>
                            <img
                              className="card__thumb"
                              src="https://previews.123rf.com/images/maxkabakov/maxkabakov1312/maxkabakov131201847/24601637-news-concept-pixelated-words-it-news-on-digital-background-3d-render.jpg"
                              alt=""
                            />
                            <div className="card__header-text">
                              <h3 className="card__title">{news.title}</h3>
                              <span className="card__status">
                                {news.date} ago
                              </span>
                            </div>
                          </div>
                          <p className="card__description">
                            {news.description}
                          </p>
                          <div className="newsButton">
                            <NewsCard
                              linkUrl={news.linkUrl}
                              id={undefined}
                              title={""}
                              imageUrl={""}
                              description={""}
                              date={""}
                            />
                          </div>
                        </div>
                      </a>
                    </li>
                  </ul>
                </>
              );
            })
          : "Loading"}
      </div>
      <div></div>
    </div>
  );
}
