/* 
День указанное количество дней назад
важность: 4
Создайте функцию getDateAgo(date, days), которая возвращает число, которое было days дней назад от даты date.

Например, для 2 января 2015:

var date = new Date(2015, 0, 2);

alert( getDateAgo(date, 1) ); // 1, (1 января 2015)
alert( getDateAgo(date, 2) ); // 31, (31 декабря 2014)
alert( getDateAgo(date, 365) ); // 2, (2 января 2014)
P.S. Важная деталь: в процессе вычислений функция не должна менять переданный ей объект date. 
*/


function getDateAgo(date, days) {
  let newDate = new Date(date.getFullYear(), date.getMonth(), date.getDate() - days);
  return newDate;
}


/* function getDateAgo(date, days) {
  date = new Date(date.getFullYear(), date.getMonth(), date.getDate() - days);
  let newDate = `${date.getDate()}  ${date.toLocaleString('ru', {month: 'long'})} ${date.getFullYear()}` 
  return newDate;
} */



let date = new Date(2015, 0, 2);

console.log(getDateAgo(date, 1)); // 1, (1 января 2015)
console.log(getDateAgo(date, 2)); // 31, (31 декабря 2014)
console.log(getDateAgo(date, 365)); // 2, (2 января 2014)