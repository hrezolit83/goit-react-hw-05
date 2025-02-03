import css from "./SelectTime.module.css";

const SelectTime = ({ value, hendleChangeTime }) => {
  return (
    <select
      value={value}
      onChange={(event) => hendleChangeTime(event.target.value)}
      className={css.select}
    >
      <option value="day">Day</option>
      <option value="week">Week</option>
    </select>
  );
};

export default SelectTime;
