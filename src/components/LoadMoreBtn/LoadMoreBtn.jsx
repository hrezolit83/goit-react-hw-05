import css from "./LoadMoreBtn.module.css";

export const LoadMoreBtn = ({ onLoadMore }) => {
  return (
    <button className={css.btn} onClick={onLoadMore}>
      Load More
    </button>
  );
};
