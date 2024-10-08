import { createSelector } from '@reduxjs/toolkit';

import { selectTeachers } from '../teachers/selectors.js';

export const selectLanguagesFilter = state => state.filters.languages;
export const selectLevelsFilter = state => state.filters.levels;
export const selectPriceFilter = state => state.filters.price;

export const selectFilteredTeachers = createSelector({});
