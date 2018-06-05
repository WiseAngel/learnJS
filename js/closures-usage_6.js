/* Армия функций
важность: 5
Следующий код создает массив функций-стрелков shooters. По замыслу, каждый стрелок должен выводить свой номер:

 function makeArmy() {

  var shooters = [];

  for (var i = 0; i < 10; i++) {
    var shooter = function() { // функция-стрелок
      console.log( i ); // выводит свой номер
    };
    shooters.push(shooter);
  }

  return shooters;
}

var army = makeArmy();

army[0](); // стрелок выводит 10, а должен 0
army[5](); // стрелок выводит 10...
// .. все стрелки выводят 10 вместо 0,1,2...9
Почему все стрелки́ выводят одно и то же? Поправьте код, чтобы стрелки работали как задумано. Предложите несколько вариантов исправления. */


/* function makeArmy() {

  let shooters = [];

  for (let i = 0; i < 10; i++) {
    let shooter = function () { // функция-стрелок
      console.log(i); // выводит свой номер
    };
    shooters.push(shooter);
  }

  return shooters;
} */



/*
 //Обернуть весь цикл во временную функцию:
function makeArmy() {
  var shooters = [];
  for (var i = 0; i < 10; i++)(function (i) {
    var shooter = function () {
      console.log(i);
    };
    shooters.push(shooter);
  })(i);
  return shooters;
} 
*/


var army = makeArmy();
army[0](); // стрелок выводит 10, а должен 0
army[5](); // стрелок выводит 10...