function isEscapeKey(evt) {
  return evt.key === 'Escape';
}
const DEBOUNCE_DELAY = 500;

function onModalEscapeKeydown(cb) {
  document.addEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      cb();
    }
  }, { once: true });
}
const checkStringLength = (string, maxLength) => string.length <= maxLength;
const isRepeatElement = (array) => array.length !== new Set(array).size;
function debounce (callback, timeoutDelay = DEBOUNCE_DELAY) {
  let timeoutId;

  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
}


export {debounce};
export { isEscapeKey };
export { checkStringLength };
export { isRepeatElement };
export { onModalEscapeKeydown };
