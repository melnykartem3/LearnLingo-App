import clsx from 'clsx';
import css from './Button.module.css';

export default function Button({
  description,
  className,
  variant,
  type,
  onClick,
}) {
  const buttonClass = clsx(
    css.button,
    variant &&
      css[`button${variant.charAt(0).toUpperCase() + variant.slice(1)}`],
    className,
  );

  const handleClick = event => {
    if (onClick) {
      onClick(event);
    }
  };

  return (
    <button type={type} className={buttonClass} onClick={handleClick}>
      {description}
    </button>
  );
}
