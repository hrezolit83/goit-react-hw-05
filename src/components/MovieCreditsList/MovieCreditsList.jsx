import MovieCreditItem from "../../components/MovieCreditItem/MovieCreditItem";
import css from "./MovieCreditsList.module.css";

const MovieCreditsList = ({ casts }) => {
  return (
    <ul className={css.list}>
      {casts.map((cast) => {
        return (
          <li key={cast.id} className={css.item}>
            <MovieCreditItem cast={cast} />
          </li>
        );
      })}
    </ul>
  );
};

export default MovieCreditsList;
