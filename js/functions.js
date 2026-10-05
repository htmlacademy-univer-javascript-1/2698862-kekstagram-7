function lengthCheck(value, max) {
  for (let i = 0; i < value.length; i++) {
    if (value.length <= max) {
      return true;
    } else {
      return false;
    }
  }
}
lengthCheck('Hello', 10); // true
lengthCheck('Hello World', 10); // false

function isPalindrome(str) {
  const s = str.toLowerCase().replaceAll(' ', '');
  const reversed = s.split('').reverse().join('');

  return s === reversed;
}
isPalindrome('Лёша на полке клопа нашёл'); // true
isPalindrome('Кекс'); // false
