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

export { getRandomNumber, generatesUniqueId };
