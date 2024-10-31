import { useDispatch, useSelector } from 'react-redux';
import {
  setLanguageFilter,
  setLevelFilter,
  setPriceFilter,
} from '../../redux/filters/slice.js';
import {
  selectLanguagesOptions,
  selectLevelsOptions,
  selectPriceOptions,
} from '../../redux/filters/selectors.js';
import CustomSelect from '../CustomSelect/CustomSelect.jsx';
import css from './Filters.module.css';

export default function Filters() {
  const dispatch = useDispatch();

  const languagesOptions = useSelector(selectLanguagesOptions);
  const levelsOptions = useSelector(selectLevelsOptions);
  const priceOptions = useSelector(selectPriceOptions);

  const handleLanguageChange = language => {
    dispatch(setLanguageFilter(language));
  };

  const handleLevelChange = level => {
    dispatch(setLevelFilter(level));
  };

  const handlePriceChange = formattedPrice => {
    const priceValue = formattedPrice.replace('~ ', '').replace(' $', '');
    dispatch(setPriceFilter(priceValue));
  };

  const formattedPriceOptions = priceOptions.map(price => `~ ${price} $`);

  return (
    <div className={css.filtersWrapper}>
      <CustomSelect
        options={languagesOptions}
        onChange={handleLanguageChange}
        label="Languages"
        selectClass={css.languageSelect}
      />
      <CustomSelect
        options={levelsOptions}
        onChange={handleLevelChange}
        label="Level of knowledge"
        selectClass={css.levelSelect}
      />
      <CustomSelect
        options={formattedPriceOptions}
        onChange={handlePriceChange}
        label="Price"
        selectClass={css.priceSelect}
      />
    </div>
  );
}
