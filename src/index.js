import './sass/main.scss';
import cards from './menu.json';
import main from './templates/main.hbs';
import { setLocalStorage, getLocalStorage } from './utils/utils';
import { onLightTheme, onDarkTheme } from './utils/chooseThemeColor'

const cardsRef = document.querySelector('.js-menu');

const markup = main(cards);
cardsRef.insertAdjacentHTML('beforeend', markup);

export const refs = {
  theme: document.getElementById('theme-switch-toggle'),
  bodyEl: document.querySelector('body'),
};

refs.theme.addEventListener('change', onChooseTheme);

export const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

getLocalStorage();

function onChooseTheme(event) {
  if (refs.theme.checked) {
    onDarkTheme();
    setLocalStorage('dark-theme');
  } else {
    onLightTheme();
    setLocalStorage('light-theme');
  }
}

