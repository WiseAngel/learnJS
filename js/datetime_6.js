/* 
Сколько секунд - до завтра?
важность: 5
Напишите функцию getSecondsToTomorrow() которая возвращает, сколько секунд осталось до завтра.

Например, если сейчас 23:00, то:

getSecondsToTomorrow() == 3600
P.S. Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты. 
*/


function getSecondsToTomorrow(){
  let now = new Date();
  let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1);

  return parseInt((tomorrow-now)/1000/60);
};
console.log(getSecondsToTomorrow());