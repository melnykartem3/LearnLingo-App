import css from './AboutSection.module.css';

export default function AboutSection() {
  return (
    <section className={css.aboutSection}>
      <div className={css.aboutWrapper}>
        <div className={css.wrapperInfo}>
          <div className={css.generalWrapper}>
            <div className={css.wrapper}>
              <p className={css.firstParagraph}>32,000 +</p>
              <p className={css.secondParagraph}>Experienced tutors</p>
            </div>
            <div className={css.wrapper}>
              <p className={css.firstParagraph}>300,000 +</p>
              <p className={css.secondParagraph}>5-star tutor reviews</p>
            </div>
            <div className={css.wrapper}>
              <p className={css.firstParagraph}>120 +</p>
              <p className={css.secondParagraphAdd}>Subjects taught</p>
            </div>
            <div className={css.wrapper}>
              <span className={css.firstParagraph}>200 +</span>
              <p className={css.secondParagraph}>Tutor nationalities</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
