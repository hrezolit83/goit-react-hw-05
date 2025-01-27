import Movie from "../Movie/Movie";
import css from "./MovieList.module.css";

const MovieList = ({ movies }) => {
  return (
    <ul className={css.list}>
      {movies.map((movie) => {
        return (
          <li key={movie.id} className={css.item}>
            <Movie movie={movie} />
          </li>
        );
      })}
    </ul>
  );
};

export default MovieList;
