/*
Вывести дату в формате дд.мм.гг
важность: 3
Напишите функцию formatDate(date), которая выводит дату date в формате дд.мм.гг:

Например:

var d = new Date(2014, 0, 30); // 30 января 2014
alert( formatDate(d) ); // '30.01.14'
P.S. Обратите внимание, ведущие нули должны присутствовать, то есть 1 января 2001 должно быть 01.01.01, а не 1.1.1.
*/

function formatDate(date) {
  let newDate = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
  let newMonth = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1;
  let newYear = date.toLocaleString('ru', {
    year: '2-digit'
  });
  let newFullDate = `${newDate}.${newMonth}.${newYear}`
  return newFullDate;
}

let d = new Date(2014, 0, 3); // 30 января 2014
console.log(formatDate(d)); // '30.01.14'