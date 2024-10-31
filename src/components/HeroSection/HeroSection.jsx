import { NavLink } from 'react-router-dom';
import homePageBackground from '../../images/homePage/homePageImageDesktop.jpg';
import homePageBackground_2x from '../../images/homePage/homePageImageDesktop@2x.jpg';
import css from './HeroSection.module.css';

export default function HeroSection() {
  return (
    <section className={css.heroSection}>
      <div className={css.startedWrapper}>
        <h1 className={css.homePageTitle}>
          Unlock your potential with the best
          <span className={css.homePageSpan}> language</span> tutors
        </h1>
        <p className={css.homePageDesc}>
          Embark on an Exciting Language Journey with Expert Language Tutors:
          Elevate your language proficiency to new heights by connecting with
          highly qualified and experienced tutors.
        </p>
        <div className={css.btnWrapper}>
          <NavLink to="/teachers" className={css.getStartedLink}>
            Get Started
          </NavLink>
        </div>
      </div>
      <div className={css.visualWrapper}>
        <picture>
          <source
            srcSet={`${homePageBackground_2x} 2x, ${homePageBackground} 1x`}
          />
          <img
            src={homePageBackground}
            alt="teacherPhoto"
            className={css.teacherPhoto}
          />
        </picture>
      </div>
    </section>
  );
}
