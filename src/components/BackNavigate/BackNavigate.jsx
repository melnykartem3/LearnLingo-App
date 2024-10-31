import { Link } from 'react-router-dom';
import { IoArrowUndoSharp } from 'react-icons/io5';
import css from './BackNavigate.module.css';

export default function BackNavigate() {
  return (
    <>
      <Link to={'/teachers'} className={css.link}>
        <IoArrowUndoSharp className={css.linkIcon} />
      </Link>
    </>
  );
}
