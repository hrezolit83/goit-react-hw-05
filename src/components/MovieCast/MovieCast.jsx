import { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Loader from "../Loader/Loader";
import MovieCreditsList from "../../components/MovieCreditsList/MovieCreditsList";

import { useParams } from "react-router-dom";
import { fetchCredits } from "../../movies-api";
import css from "./MovieCast.module.css";

const MovieCast = () => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [casts, setCasts] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;
    const fetchMovie = async () => {
      try {
        setLoading(true);
        setError(false);
        const response = await fetchCredits(movieId);
        setCasts(response);
      } catch (error) {
        setError(error);
        toast.error("Whoops, something went wrong!");
      } finally {
        setLoading(false);
      }
    };
    fetchMovie();
  }, [movieId]);

  return (
    <div className={css.container}>
      <Toaster position="top-right" reverseOrder={false} />
      {error && <ErrorMessage />}
      <p className={css.title}>Movie Cast</p>
      {loading && <Loader />}
      {casts.length > 0 ? (
        <MovieCreditsList casts={casts} />
      ) : (
        <p>Sorry, there are no results...</p>
      )}
    </div>
  );
};

export default MovieCast;
