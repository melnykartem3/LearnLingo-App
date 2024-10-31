import { createSelector } from '@reduxjs/toolkit';
import { selectTeachers } from '../teachers/selectors.js';

const selectFilters = state => state.filters;

export const selectLanguagesOptions = createSelector(
  [selectTeachers],
  teachers => {
    const languages = teachers.flatMap(teacher => teacher.languages);
    return [...new Set(languages)];
  },
);

export const selectLevelsOptions = createSelector(
  [selectTeachers],
  teachers => {
    const levels = teachers.flatMap(teacher => teacher.levels);
    return [...new Set(levels)];
  },
);

export const selectPriceOptions = createSelector([selectTeachers], teachers => {
  const prices = teachers.map(teacher => teacher.price_per_hour);
  const minPrice = Math.min(...prices);
  const maxPrice = Math.max(...prices);
  const step = 5;
  const options = [];
  for (let price = minPrice; price <= maxPrice; price += step) {
    options.push(price);
  }
  return options;
});

export const selectFilteredTeachers = createSelector(
  [selectTeachers, selectFilters],
  (teachers, filters) => {
    const filteredTeachers = teachers.filter(teacher => {
      const matchesLanguage = filters.languages.length
        ? teacher.languages.includes(filters.languages)
        : true;
      const matchesLevel = filters.levels.length
        ? teacher.levels.includes(filters.levels)
        : true;
      const matchesPrice =
        filters.price && !isNaN(filters.price)
          ? Math.abs(teacher.price_per_hour - filters.price) <= 3
          : true;

      const isMatch = matchesLanguage && matchesLevel && matchesPrice;
      return isMatch;
    });

    return filteredTeachers;
  },
);
