import { Link, useLocation } from "react-router-dom";
import css from "./Movie.module.css";

const Movie = ({ movie }) => {
  const location = useLocation();
  const baseURL = "https://image.tmdb.org/t/p/w500";
  return (
    <div className={css.container}>
      <div className={css.wrap}>
        <img
          className={css.img}
          src={
            movie.backdrop_path
              ? `${baseURL}/${movie.backdrop_path}`
              : "https://kartinki.pics/pics/uploads/posts/2022-08/1659664031_1-kartinkin-net-p-kino-abstraktsiya-krasivo-1.jpg"
          }
        />
      </div>
      <Link
        to={`/movies/${movie.id}`}
        state={{ from: location }}
        className={css.Link}
      >
        <h3 className={css.title}>{movie.title}</h3>
      </Link>
    </div>
  );
};

export default Movie;
