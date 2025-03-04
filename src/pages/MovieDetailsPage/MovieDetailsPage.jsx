import { useState, useEffect, useRef } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Link, Outlet, useParams, useLocation } from "react-router-dom";
import { fetchMoviesById } from "../../movies-api";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import MovieDetails from "../../components/MovieDetails/MovieDetails";
import css from "./MovieDetailsPage.module.css";

const MovieDetailsPage = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const { movieId } = useParams();
  const backLinkHref = useRef(location.state?.from ?? "/movies");
  const prevHref = useRef(null);
  const backLink = backLinkHref.current;

  useEffect(() => {
    prevHref.current = backLink;
    const fetchMovie = async () => {
      try {
        setLoading(true);
        setError(false);
        const response = await fetchMoviesById(movieId);
        setMovie(response);
      } catch (error) {
        setError(true);
        toast.error("Sorry, something went wrong!");
      } finally {
        setLoading(false);
      }
    };
    fetchMovie();
  }, [movieId, backLink]);

  return (
    <div className={css.container}>
      {!loading && (
        <Link to={backLinkHref.current} className={css.link}>
          Go Back
        </Link>
      )}

      <Toaster position="top-right" revereOrder={false} />
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {movie && <MovieDetails movie={movie} />}
      {!loading && (
        <div className={css.info}>
          <Link to="cast" className={css.link}>
            Cast
          </Link>

          <Link to="reviews" className={css.link}>
            Reviews
          </Link>
        </div>
      )}

      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;
