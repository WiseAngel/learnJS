/* Сумма через замыкание
важность: 4
Напишите функцию sum, которая работает так: sum(a)(b) = a+b.

Да, именно так, через двойные скобки (это не опечатка). Например:

sum(1)(2) = 3
sum(5)(-1) = 4 */

function sum(a) {
  return function (b) {
    return a + b;
  };
}

// let sum = (a) => (b) => a + b;;


console.log(sum(1)(2));
console.log(sum(5)(-1));