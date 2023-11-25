const isEscapeKey = (evt) => evt.key === 'Escape';

const stopIsEscapeKey = (element) => {
  element.addEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      evt.stopPropagation();
    }
  });
};

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
function debounce (callback, timeoutDelay = 500) {
  // Используем замыкания, чтобы id таймаута у нас навсегда приклеился
  // к возвращаемой функции с setTimeout, тогда мы его сможем перезаписывать
  let timeoutId;

  return (...rest) => {
    // Перед каждым новым вызовом удаляем предыдущий таймаут,
    // чтобы они не накапливались
    clearTimeout(timeoutId);

    // Затем устанавливаем новый таймаут с вызовом колбэка на ту же задержку
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);

    // Таким образом цикл «поставить таймаут - удалить таймаут» будет выполняться,
    // пока действие совершается чаще, чем переданная задержка timeoutDelay
  };
}


export {debounce};
export { isEscapeKey };
export { checkStringLength };
export { isRepeatElement };
export { onModalEscapeKeydown };
export { stopIsEscapeKey };
