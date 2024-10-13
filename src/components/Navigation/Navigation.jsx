import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import { CiLogin } from 'react-icons/ci';

import UkraineIcon from '../../images/homePage/ukraine.svg';
import logoIcon from '../../images/homePage/logo.svg';

import css from './Navigation.module.css';

const buildLinkClass = ({ isActive }) => {
  return clsx(css.navLink, isActive && css.activeLink);
};

export default function Navigation() {
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
        </div>
        <div className={css.buttonsWrapper}>
          <button className={css.btnLogIn} type="button">
            <a href="#" className={css.btn2}>
              <span className={css.span}>Log in</span>
            </a>
          </button>
          <button className={css.btnRegistration} type="button">
              <span>Registration</span>
          </button>
          <button className={css.logOutBtn} type="button">
            <span className={css.background}>
              <CiLogin className={css.logOutIcon} />
            </span>
          </button>
        </div>
      </nav>
    </header>
  );
}
