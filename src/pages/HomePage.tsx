import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import NewsCard from "../components/NewsCard";
import { AppDispatch } from "../store";
import { fetchNews } from "../store/news/actions";
import { selectNews } from "../store/news/selectors";
import { News } from "../types";
import { selectToken } from "../store/user/selectors";
import { useNavigate } from "react-router-dom";
import Box from "@mui/joy/Box";
import Sheet from "@mui/joy/Sheet";
import AspectRatio from "@mui/joy/AspectRatio";
// import "./style.css";

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
              <div>
                <NewsCard
                  id={news.id}
                  title={news.title}
                  imageUrl={news.imageUrl}
                  description={news.description}
                  linkUrl={news.linkUrl}
                />
              </div>
            );
          })
        : "Loading"}
    </div>
  );
}
