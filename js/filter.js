import { EFFECT, EFFECT_FILTER, EFFECT_OPTIONS } from './filter-util';

const modalElement = document.querySelector('.img-upload');
const imageElement = modalElement.querySelector('.img-upload__preview img');
const effectElement = modalElement.querySelector('.effects');
const sliderElement = modalElement.querySelector('.effect-level__slider');
const sliderContainerElement = modalElement.querySelector('.img-upload__effect-level');
const effectLevelElement = modalElement.querySelector('.effect-level__value');

let startEffect = EFFECT.DEFAULT;

function isDefault() {
  return startEffect === EFFECT.DEFAULT;
}

function createImageStyle() {
  if (isDefault()) {
    imageElement.style.filter = null;
    return;
  }

  const { value } = effectLevelElement;
  const { style, unit } = EFFECT_FILTER[startEffect];
  imageElement.style.filter = `${style}(${value}${unit})`;
}


function showSlider() {
  sliderContainerElement.classList.remove('.hidden');
}
function hideSlider() {
  sliderContainerElement.classList.add('.hidden');
}

function onSliderUpdate() {
  effectLevelElement.value = sliderElement.noUiSlider.get();
  createImageStyle();
}

function createSlider({min, max, step}) {
  noUiSlider.create(sliderElement, {
    range: {min, max},
    step,
    start: max,
    connect: 'lower',
    format: {
      to: (value) => Number(value),
      from: (value) => Number(value),
    },
  });
  sliderElement.noUiSlider.on('update', onSliderUpdate);
  hideSlider();
}

function updateSlider({ min, max, step }) {
  sliderElement.noUiSlider.updateOptions({
    range: {min, max},
    step,
    start: max,
  });
}

function setSlider() {
  if (isDefault()) {
    hideSlider();
  } else {
    updateSlider(EFFECT_OPTIONS[startEffect]);
    showSlider();
  }
}

function setEffect(effect) {
  startEffect = effect;
  setSlider();
  createImageStyle();
}

function reset() {
  setEffect(EFFECT.DEFAULT);
}

function onEffectsChange(evt) {
  setEffect(evt.target.value);
}

function init() {
  createSlider(EFFECT_OPTIONS[startEffect]);
  effectElement.addEventListener('change', onEffectsChange);
}

export { init, reset };
