import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useParams } from "react-router-dom";
import { fetchReviews } from "../../movies-api";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Loader from "../Loader/Loader";
import { LoadMoreBtn } from "../LoadMoreBtn/LoadMoreBtn";
import MovieReviewsList from "../../components/MovieReviewsList/MovieReviewsList";

import css from "./MovieReviews.module.css";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!movieId) return;
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(false);
        const data = await fetchReviews(movieId, page);
        setReviews((prevReviews) => [...prevReviews, ...data]);
        setIsVisible(page < data.total_pages);
      } catch (error) {
        setError(error);
        toast.error("Whoops! Something went wrong...");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [movieId, page]);

  const onLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div className={css.container}>
      <Toaster position="top-right" reverseOrder={false} />
      {error && <ErrorMessage />}
      <h3 className={css.title}>Movie Reviews</h3>
      {loading && <Loader />}
      {reviews.length > 0 ? (
        <MovieReviewsList reviews={reviews} />
      ) : (
        <p>Sorry, there are no results.</p>
      )}
      {isVisible && !loading && <LoadMoreBtn onLoadMore={onLoadMore} />}
    </div>
  );
};

export default MovieReviews;
