import toast from "react-hot-toast";
import { ToSearch } from "react-icons/io5";
import css from "./MovieSearchForm.module.css";

const MovieSearchForm = ({ onSearch }) => {
  const hendleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const result = form.elements.query.value.trim();
    if (result === "") {
        toast.error("Please, enter search params!");
        onSearch("");
    }

    onSearch(result);
    form.reset();
  };
  
  return (
    <form className={css.form} onSubmit={hendleSubmit}>
      <input
        type="text"
        name="query"
        className={css.input}
        required
        autoFocus
        placeholder="Search..."
      />
      <button className={css.btn} type="submit" title="Search">
        <ToSearch />
      </button>
    </form>
  );
};

export default MovieSearchForm;
