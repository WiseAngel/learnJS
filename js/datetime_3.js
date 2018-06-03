/*
День недели в европейской нумерации
важность: 5
Напишите функцию, getLocalDay(date) которая возвращает день недели для даты date.
День нужно возвратить в европейской нумерации, т.е. понедельник имеет номер 1, вторник номер 2, …, воскресенье – номер 7.
var date = new Date(2012, 0, 3);  // 3 янв 2012
alert( getLocalDay(date) );       // вторник, выведет 2 
*/

function getLocalDay(date) {
  return date.getDay() == 0 ? date.getDay() + 7 : date.getDay();
}

let date = new Date(2012, 0, 3); // 3 янв 2012
console.log(getLocalDay(date)); // вторник, выведет 2