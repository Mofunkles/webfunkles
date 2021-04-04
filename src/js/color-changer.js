import { saveColors, changeColors } from './color-loader.js';

const colors = document.querySelector('.color-changer__colors');

const clickColor = function (event) {
  const target = event.target.closest('[class^="color-changer__color-"]');
  if (!target) return;

  const [main, light, dark] = [
    target.dataset.main,
    target.dataset.light,
    target.dataset.dark,
  ];

  changeColors(main, light, dark);
  saveColors(main, light, dark);
};

colors.addEventListener('click', clickColor);
