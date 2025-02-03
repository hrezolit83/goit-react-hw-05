import css from "./MovieReviewsList.module.css";

const MovieReviewsList = ({ reviews }) => {
  return (
    <ul className={css.list}>
      {reviews.map((review) => {
        return (
          <li key={review.id} className={css.item}>
            <p className={css.list}>
              Author name: {review.author}. Rating:{" "}
              {review.author_details.rating}.
            </p>
            <p className={css.desc}>{review.content}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default MovieReviewsList;
