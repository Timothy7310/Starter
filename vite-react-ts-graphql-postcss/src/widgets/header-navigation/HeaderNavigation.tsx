import { NavLink } from 'react-router-dom';
import styles from './HeaderNavigation.module.css';

export const HeaderNavigation = () => {
  return (
    <nav className={styles.nav}>
      <NavLink to="/anime">Anime</NavLink>
      <NavLink to="/manga">Manga</NavLink>
    </nav>
  );
};
