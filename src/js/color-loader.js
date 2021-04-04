const root = document.documentElement;

export const changeColors = function (main, light, dark) {
  root.style.setProperty('--primary--400', `#${main}`);
  root.style.setProperty('--primary--100', `#${light}`);
  root.style.setProperty('--primary--600', `#${dark}`);
};

const loadColors = function () {
  const colors = localStorage.getItem('colors');

  if (!colors) return;

  const [main, light, dark] = colors.split(',');
  changeColors(main, light, dark);
};

export const saveColors = function (main, light, dark) {
  const colors = [main, light, dark];
  localStorage.setItem('colors', colors);
};

loadColors();
