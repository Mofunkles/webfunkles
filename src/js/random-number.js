const button = document.querySelector('.random-number__button');
const number = document.querySelector('.random-number__number');

const generateNumber = function () {
  return Math.floor(Math.random() * 100 + 1);
};

const updateNumber = function (event) {
  event.preventDefault();
  number.textContent = generateNumber();
};

button.addEventListener('click', updateNumber);
