//Функция для проверки длины строки.
function getLineWidth(value,num) {
  // if (value.length <= num) {
  //   return true;
  // }
  // return false;
  //const lineWidth = value.length <= num ? true : false;
  const result = value.length <= num;
  return result;
}
getLineWidth('проверяемая строка', 20); // true
getLineWidth('проверяемая строка', 18); // true
getLineWidth('проверяемая строка', 10); // false

//Функция для проверки, является ли строка палиндромом.
function getPalindrome(value) {
  let expandedValue = '';
  let newValue = '';
  // reversed string, without spaces, lower
  for (let i = value.length - 1; i >= 0; i--) {
    if (value[i] !== ' ') {
      expandedValue += value[i].toLowerCase();
    }
  }
  // normal string, without spaces, lower
  for (let i = 0; i < value.length; i++) {
    if (value[i] !== ' ') {
      newValue += value[i].toLowerCase();
    }
  }
  const result = expandedValue === newValue;
  return result;
}
getPalindrome('топот'); // true
getPalindrome('ДовОд'); // true
getPalindrome('Кекс'); // false
getPalindrome('Лёша на полке клопа нашёл '); // true


/* Функция принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 */

function getNum(value) {
  value = String(value);
  let result = '';
  for (let i = 0; i < value.length; i++) {
    if (Number(value[i]) || value[i] === '0') {
      result += value[i];
    }
  }
  result = parseInt(result, NaN);
  return result;
}
getNum('2023 год'); // 2023
getNum('ECMAScript 2022'); // 2022
getNum('1 кефир, 0.5 батона'); // 105
getNum('агент 007'); // 7
getNum('а я томат'); // NaN
getNum(2023); // 2023
getNum(-1); // 1
getNum(1.5); // 15
