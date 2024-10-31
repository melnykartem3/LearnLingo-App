import { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import clsx from 'clsx';
import css from './CustomSelect.module.css';

const CustomSelect = ({ options, onChange, label, selectClass }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelect = option => {
    setSelectedOption(option);
    onChange(option);
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const truncateText = (text, maxLength = 14) => {
    return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
  };

  return (
    <div className={`${css.selectWrapper} ${selectClass}`}>
      <label className={css.filterLabel} onClick={toggleDropdown}>
        {label}
        <div className={css.selectedOption}>
          {truncateText(selectedOption) || options[0]}
        </div>
        <IoIosArrowDown className={css.arrow} />
      </label>
      {isOpen && (
        <ul className={css.dropdownMenu}>
          {options.map((option, index) => (
            <li
              key={index}
              onClick={() => handleSelect(option)}
              className={clsx(css.dropdownItem, {
                [css.selectedItem]: option === selectedOption,
              })}
            >
              {truncateText(option)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomSelect;
