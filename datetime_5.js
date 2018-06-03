/* 
Сколько секунд уже прошло сегодня?
важность: 5
Напишите функцию getSecondsToday() которая возвращает, сколько секунд прошло с начала сегодняшнего дня.

Например, если сейчас 10:00 и не было перехода на зимнее/летнее время, то:

getSecondsToday() == 36000 // (3600 * 10)
Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты. 
*/

function getSecondsToday(){
  let now = new Date();
  let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  return parseInt((now-today)/1000/60);
};
console.log(getSecondsToday());