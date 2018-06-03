/* 
Как отсортировать массив чисел в обратном порядке?

var arr = [5, 2, 1, -10, 8];

// отсортируйте?

alert( arr ); // 8, 5, 2, 1, -10 
*/

/* var arr = [5, 2, 1, -10, 8, 1, 9, -1];

function sortNum(func, arr) {
  arr.sort(func).reverse();
  return arr;
};

function compareNumeric(a, b) {
  return a - b;
};

console.log(sortNum(compareNumeric, arr)); */

var arr = [5, 2, 1, -10, 8, 1, 9, -1];

function sortNum(arr) {
  arr.sort((a, b) => b - a);
  return arr;
};

console.log(sortNum(arr));