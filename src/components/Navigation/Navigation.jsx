import css from "./Navigation.module.css";
import clsx from "clsx";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  const buildLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };

  return (
    <nav className={css.nav}>
      <NavLink to="/" className={buildLinkClass}>
        Home
      </NavLink>
      <NavLink to="/movies" className={buildLinkClass}>
        Movies
      </NavLink>
    </nav>
  );
};

export default Navigation;
