import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import { CiLogin } from 'react-icons/ci';
import { useSelector } from 'react-redux';

import UkraineIcon from '../../images/homePage/sprite.svg';
import logoIcon from '../../images/homePage/sprite.svg';

import RegistrationModal from '../RegistrationModal/RegistrationModal.jsx';
import LogInModal from '../LogInModal/LogInModal.jsx';
import LogOutModal from '../LogOutModal/LogOutModal.jsx';
import { selectIsLoggedIn } from '../../redux/auth/selectors.js';
import { useModal } from '../../hooks/useModal.js';

import css from './Navigation.module.css';

const buildLinkClass = ({ isActive }) => {
  return clsx(css.navLink, isActive && css.activeLink);
};

export default function Navigation() {
  const { openSpecificModal, closeModal, isModalOpen } = useModal();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <header className={css.header}>
      <nav className={css.navigation}>
        <div className={css.iconsWrapper}>
          <svg className={css.ukraineIcon} width={28} height={28}>
            <use href={`${UkraineIcon}#ukraine`}></use>
          </svg>
          <a href="/" className={css.logoLink}>
            <svg className={css.logoIcon} width={97} height={24}>
              <use href={`${logoIcon}#logo`}></use>
            </svg>
          </a>
        </div>
        <div className={css.linksWrapper}>
          <NavLink to={'/'} className={buildLinkClass}>
            Home
          </NavLink>
          <NavLink to={'/teachers'} className={buildLinkClass}>
            Teachers
          </NavLink>
          {isLoggedIn && (
            <NavLink to={'/favorites'} className={buildLinkClass}>
              Favorites
            </NavLink>
          )}
        </div>
        <div className={css.buttonsWrapper}>
          {!isLoggedIn && (
            <button
              className={css.btnLogIn}
              type="button"
              onClick={() => openSpecificModal('login')}
            >
              <a href="#" className={css.btn2}>
                <span className={css.span}>Log in</span>
              </a>
            </button>
          )}
          {!isLoggedIn && (
            <button
              className={css.btnRegistration}
              type="button"
              onClick={() => openSpecificModal('registration')}
            >
              <span>Registration</span>
            </button>
          )}
          {isLoggedIn && (
            <button
              className={css.logOutBtn}
              type="button"
              onClick={() => openSpecificModal('logout')}
            >
              <span className={css.background}>
                <CiLogin className={css.logOutIcon} />
              </span>
            </button>
          )}
        </div>
      </nav>
      <RegistrationModal
        isOpen={isModalOpen('registration')}
        onRequestClose={closeModal}
      />
      <LogInModal isOpen={isModalOpen('login')} onRequestClose={closeModal} />
      <LogOutModal isOpen={isModalOpen('logout')} onRequestClose={closeModal} />
    </header>
  );
}
