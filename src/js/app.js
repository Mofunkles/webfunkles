const randomElement = document.querySelector('.random');

const randomNumber = function () {
  this.textContent = Math.floor(Math.random() * 100);
};

randomElement?.addEventListener('click', randomNumber);
