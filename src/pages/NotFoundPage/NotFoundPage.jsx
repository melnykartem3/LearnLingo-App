import css from './NotFoundPage.module.css';

export default function NotFoundPage() {
  return (
    <div className={css.main_wrapper}>
      <div className={css.main}>
        <div className={css.antenna}>
          <div className={css.antenna_shadow}></div>
          <div className={css.a1}></div>
          <div className={css.a1d}></div>
          <div className={css.a2}></div>
          <div className={css.a2d}></div>
          <div className={css.a_base}></div>
        </div>
        <div className={css.tv}>
          <div className={css.cruve}>
            <svg
              xmlSpace="preserve"
              viewBox="0 0 189.929 189.929"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              className={css.curve_svg}
            >
              <path
                d="M70.343,70.343c-30.554,30.553-44.806,72.7-39.102,115.635l-29.738,3.951C-5.442,137.659,11.917,86.34,49.129,49.13
        C86.34,11.918,137.664-5.445,189.928,1.502l-3.95,29.738C143.041,25.54,100.895,39.789,70.343,70.343z"
              ></path>
            </svg>
          </div>
          <div className={css.display_div}>
            <div className={css.screen_out}>
              <div className={css.screen_out1}>
                <div className={css.screen}>
                  <span className={css.notfound_text}>NOT FOUND</span>
                </div>
              </div>
            </div>
          </div>
          <div className={css.lines}>
            <div className={css.line1}></div>
            <div className={css.line2}></div>
            <div className={css.line3}></div>
          </div>
          <div className={css.buttons_div}>
            <div className={css.b1}>
              <div></div>
            </div>
            <div className={css.b2}></div>
            <div className={css.speakers}>
              <div className={css.g1}>
                <div className={css.g11}></div>
                <div className={css.g12}></div>
                <div className={css.g13}></div>
              </div>
              <div className={css.g}></div>
              <div className={css.g}></div>
            </div>
          </div>
        </div>
        <div className={css.bottom}>
          <div className={css.base1}></div>
          <div className={css.base2}></div>
          <div className={css.base3}></div>
        </div>
      </div>
      <div className={css.text_404}>
        <div className={css.text_4041}>4</div>
        <div className={css.text_4042}>0</div>
        <div className={css.text_4043}>4</div>
      </div>
    </div>
  );
}
