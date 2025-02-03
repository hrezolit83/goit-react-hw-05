import { FaStar } from "react-icons/fa";
import css from "./MovieDetails.module.css";

const MovieDetails = ({ movie }) => {
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
      <h3 className={css.title}>{movie.title}</h3>
      <div className={css.listFlex}>
        <p className={css.description}>{movie.overview}</p>
        <p className={css.text}>Release date: {movie.release_date}</p>
        <p className={css.text}>Runtime: {movie.runtime}</p>
        <p className={css.text}>
          Rating: {movie.vote_average} <FaStar />
        </p>
        <div className={css.listWrap}>
          <p className={css.text}>Genres:</p>
          <ul className={css.list}>
            {movie.genres.map((genre) => (
              <li key={genre.id} className={css.item}>
                <p className={css.genre}>{genre.name}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
