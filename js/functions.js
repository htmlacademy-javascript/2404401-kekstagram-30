//Функция для проверки длины строки.
function checkLengthString(value,num) {
  return value.length <= num;
}
checkLengthString('проверяемая строка', 20); // true
checkLengthString('проверяемая строка', 18); // true
checkLengthString('проверяемая строка', 10); // false

//Функция для проверки, является ли строка палиндромом.
function getPalindrome(value) {
  value = value.toLowerCase();
  let expandedValue = '';
  let newValue = '';
  // reversed string, without spaces, lower
  for (let i = value.length - 1; i >= 0; i--) {
    if (value[i] !== ' ') {
      expandedValue += value[i];
    }
  }
  // normal string, without spaces, lower
  newValue = value.replaceAll(' ', '');
  return expandedValue === newValue;
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
    if (!isNaN(parseInt(value[i], 10))) {
      result += value[i];
    }
  }
  return parseInt(result, 10);
}
getNum('2023 год'); // 2023
getNum('ECMAScript 2022'); // 2022
getNum('1 кефир, 0.5 батона'); // 105
getNum('агент 007'); // 7
getNum('а я томат'); // NaN
getNum(2023); // 2023
getNum(-1); // 1
getNum(1.5); // 15

const MINUTES = 60;

function calculatorWorkTime(value) {
  const getArrayInTime = value.split(':');
  const minuteTime = parseInt(getArrayInTime[0], 10) * MINUTES + parseInt(getArrayInTime[1], 10);
  return minuteTime;
}

function workTime(startWork, endWork, startMeeting, durationMeeting) {
  const minutesInStart = calculatorWorkTime(startWork);
  const minutesInEnd = calculatorWorkTime(endWork);
  const minutesInMeeting = calculatorWorkTime(startMeeting);

  return (minutesInStart <= minutesInMeeting && (minutesInMeeting + durationMeeting) <= minutesInEnd);
}

workTime('08:00', '17:30', '14:00', 90); // true
workTime('8:0', '10:0', '8:0', 120); // true
workTime('08:00', '14:30', '14:00', 90); // false
workTime('14:00', '17:30', '08:0', 90); // false
workTime('8:00', '17:30', '08:00', 900); // false
