import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import NewsCard from "../components/NewsCard";
import { AppDispatch } from "../store";
import { fetchNews } from "../store/news/actions";
import { selectNews } from "../store/news/selectors";
import { News } from "../types";
import { selectToken } from "../store/user/selectors";
import { useNavigate } from "react-router-dom";

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
      {news
        ? news.news.map((news: News) => {
            return (
              <div className="container" style={{ paddingTop: "2%" }}>
                <div className="row">
                  <div className="col-sm-14">
                    <div
                      className="card"
                      style={{
                        backgroundColor: "transparent",
                        boxShadow: "5px 40px 60px #000000",
                        color: "white",
                      }}
                    >
                      <div className="card-body">
                        <NewsCard
                          id={news.id}
                          title={news.title}
                          imageUrl={news.imageUrl}
                          description={news.description}
                          linkUrl={news.linkUrl}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        : "Loading"}
    </div>
  );
}
