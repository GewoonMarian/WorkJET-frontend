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
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "30px",
          gap: 1,
          overflow: "auto",
          objectFit: "cover",

          scrollSnapType: "x mandatory",
          "& > *": {
            scrollSnapAlign: "center",
          },
          "::-webkit-scrollbar": { display: "none" },
        }}
      >
        {news
          ? news.news.map((news: News) => {
              return (
                <div>
                  <Sheet
                    key={news.id}
                    variant="outlined"
                    sx={{
                      gap: 2,
                      p: 2,

                      borderRadius: "sm",
                      minHeight: "500px",
                      width: "600px",
                      background: "#528691",
                    }}
                  >
                    <AspectRatio
                      ratio="1"
                      sx={{
                        borderRadius: "sm",
                        overflow: "auto",
                      }}
                    >
                      <NewsCard
                        id={news.id}
                        title={news.title}
                        imageUrl={news.imageUrl}
                        description={news.description}
                        linkUrl={news.linkUrl}
                      />
                    </AspectRatio>
                  </Sheet>
                </div>
              );
            })
          : "Loading"}
      </Box>
    </div>
  );
}
