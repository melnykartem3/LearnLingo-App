import { useSelector } from 'react-redux';
import { selectFavorites } from '../../redux/favorites/selectors.js';
import BackNavigate from '../../components/BackNavigate/BackNavigate.jsx';
import HomeNavigate from '../../components/HomeNavigate/HomeNavigate.jsx';
import Teacher from '../../components/Teacher/Teacher.jsx';
import css from './FavoritesPage.module.css';

export default function FavoritesPage() {
  const favorites = useSelector(selectFavorites);

  return (
    <div>
      <div className={css.wrapper}>
        <BackNavigate />
        <h1 className={css.favoriteTitle}>Favorite Teachers</h1>
        <HomeNavigate />
      </div>
      {favorites.length === 0 ? (
        <p className={css.notFoundText}>No favorite teachers added yet.</p>
      ) : (
        <ul className={css.favoritesList}>
          {favorites.map(teacher => (
            <li key={teacher.id} className={css.teachersListItem}>
              <Teacher key={teacher.id} teacher={teacher} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
