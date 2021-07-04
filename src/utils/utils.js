import { STORAGE_KEY } from './constants';
import { refs } from '../index';
import { Theme } from '../index';

export const setLocalStorage = theme => {
  try {
      localStorage.setItem(STORAGE_KEY, theme);
  } catch (error) {
    console.log(error);
  }
};

export const getLocalStorage = () => {
  try {
    const isThemeExists = localStorage.getItem(STORAGE_KEY);
    if (isThemeExists === 'dark-theme') {
      refs.bodyEl.classList.add(Theme.DARK);
      refs.theme.checked = true;
    }
  } catch (error) {
    console.log(error);
  }
};
