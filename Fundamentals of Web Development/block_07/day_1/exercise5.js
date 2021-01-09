let clickCount = 0;
const clickCountField = document.querySelector('#click-count');
const clickBtn = document.querySelector('#button');

clickBtn.addEventListener('click', () => {
  clickCount += 1;
  clickCountField.innerHTML = clickCount;
});

window.onload = () => {
  clickCountField.innerHTML = 0;
};
