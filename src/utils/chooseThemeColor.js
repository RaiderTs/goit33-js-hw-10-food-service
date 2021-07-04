import { refs } from '../index';
import { Theme } from '../index';


function onLightTheme(event) {
  refs.bodyEl.classList.remove(Theme.DARK);
  refs.bodyEl.classList.add(Theme.LIGHT);
}

function onDarkTheme(event) {
  refs.bodyEl.classList.remove(Theme.LIGHT);
  refs.bodyEl.classList.add(Theme.DARK);
}

module.exports = {
  onLightTheme: onLightTheme,
  onDarkTheme: onDarkTheme,
};
