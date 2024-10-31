import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import css from './HomeNavigate.module.css';

export default function HomeNavigate() {
  return (
    <>
      <Link to="/" className={css.homeLink}>
        <FaHome className={css.homeIcon} />
      </Link>
    </>
  );
}
