import css from "./MovieReviewsList.module.css";

const MovieReviewsList = ({ reviews }) => {
  return (
    <ul>
      {reviews.map((review) => {
        return (
          <li key={review.id} className={css.item}>
            <p className={css.list}>
              Author Name: {review.author}. Rating:{" "}
              {review.author_details.rtimg}.
            </p>
            <p className={css.description}>{review.content}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default MovieReviewsList;
