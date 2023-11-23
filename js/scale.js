const MIN_SCALE = 25;
const MAX_SCALE = 100;
const SCALE_STEP = 25;
const SCALE_START = 100;

const modalElement = document.querySelector('.img-upload');
const smallerBtn = modalElement.querySelector('.scale__control--smaller');
const biggerBtn = modalElement.querySelector('.scale__control--bigger');
const scaleСounter = modalElement.querySelector('.scale__control--value');
const imageElement = modalElement.querySelector('.img-upload__preview img');

smallerBtn.addEventListener('click', onSmallerButton);
biggerBtn.addEventListener('click', onBiggerButton);

function onSmallerButton() {
  scaleTransformElement(Math.max(parseInt(scaleСounter.value, 10) - SCALE_STEP, MIN_SCALE));
}
function onBiggerButton() {
  scaleTransformElement(Math.max(parseInt(scaleСounter.value, 10) + SCALE_STEP, MAX_SCALE));
}

function scaleTransformElement(value) {
  if (value >= 100) {
    value = 100;
    return;
  }
  //временно, почему-то не работает.
  imageElement.style.transform = `scale(${value / 100})`;
  scaleСounter.value = `${value}%`;
}

function resetScale() {
  scaleTransformElement(SCALE_START);
}

export { resetScale };
