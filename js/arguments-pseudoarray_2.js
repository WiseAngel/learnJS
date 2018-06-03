/* 
Сумма аргументов
Напишите функцию sum(...), которая возвращает сумму всех своих аргументов: 
*/


function sum() {

  let result = 0;
  for (let i = 0; i < arguments.length; i++) {
    if (!arguments.length) {
      return 0;
    }
    result += arguments[i];
  }
  return result
}


/* function sum() {
  var result = 0;

  for (var i = 0; i < arguments.length; i++) {
    result += arguments[i];
  }

  return result;
} */

console.log(sum()) // = 0
console.log(sum(0, 1)) // = 1
console.log(sum(1, 2)) // = 3
console.log(sum(1, 2, 3)) // = 6
console.log(sum(1, 2, 3, 4)) // = 10