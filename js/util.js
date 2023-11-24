function getRandomNumber (min, max) {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const number = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(number);
}
function generatesUniqueId(min, max) {
  const ARRAY_ID = [];
  return function () {
    let num = getRandomNumber(min, max);
    while (ARRAY_ID.includes(num)){
      num = getRandomNumber(min, max);
    }
    ARRAY_ID.push(num);
    return num;
  };
}
const isEscapeKey = (evt) => evt.key === 'Escape';

const stopIsEscapeKey = (element) => {
  element.addEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      evt.stopPropagation();
    }
  });
};

function onModalEscapeKeydown(callback) {
  document.addEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      callback();
    }
  }, { once: true });
}
const checkStringLength = (string, maxLength) => string.length <= maxLength;
const isRepeatElement = (array) => array.length !== new Set(array).size;


export { isEscapeKey };
export { getRandomNumber };
export { checkStringLength };
export { isRepeatElement };
export { generatesUniqueId };
export { onModalEscapeKeydown };
export { stopIsEscapeKey };
