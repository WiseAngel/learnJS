/* 
Имя дня недели
важность: 5
Создайте функцию getWeekDay(date), которая выводит текущий день недели в коротком формате „пн“, „вт“, … „вс“.
Например:
var date = new Date(2012,0,3);  // 3 января 2012
alert( getWeekDay(date) );      // Должно вывести 'вт' 
*/



function getWeekDay(date) {
  let days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];

  return days[date.getDay()];
}

let date = new Date(2012, 0, 3); // 3 января 2012
console.log(getWeekDay(date)); // Должно вывести 'вт'


//для новых браузеров
var date = new Date(2014, 0, 3); // 3 января 2014
alert( date.toLocaleString('ru', {weekday: 'short'}) ); // 'Пт'