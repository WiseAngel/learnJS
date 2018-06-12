/* Логирующий декоратор (много аргументов)
важность: 3
Создайте декоратор makeLogging(func, log), для функции func возвращающий обёртку, которая при каждом вызове добавляет её аргументы в массив log.

Условие аналогично задаче Логирующий декоратор (1 аргумент), но допускается func с любым набором аргументов.

Работать должно так:

function work(a, b) {
  alert( a + b ); // work - произвольная функция
}

function makeLogging(f, log) {  }

var log = [];
work = makeLogging(work, log);

work(1, 2); // 3
work(4, 5); // 9

for (var i = 0; i < log.length; i++) {
  var args = log[i]; // массив из аргументов i-го вызова
  alert( 'Лог:' + args.join() ); // "Лог:1,2", "Лог:4,5"
}

Решение аналогично задаче Логирующий декоратор (1 аргумент), разница в том, что в лог вместо одного аргумента идет весь объект arguments.

Для передачи вызова с произвольным количеством аргументов используем f.apply(this, arguments). */


function work(a, b) {
  alert(a + b); // work - произвольная функция
}

function makeLogging(f, log) {

  function wrapper() {
    log.push([].slice.call(arguments));
    return f.apply(this, arguments);
  }

  return wrapper;
}

var log = [];
work = makeLogging(work, log);

work(1, 2); // 3
work(4, 5); // 9

for (var i = 0; i < log.length; i++) {
  var args = log[i]; // массив из аргументов i-го вызова
  alert('Лог:' + args.join()); // "Лог:1,2", "Лог:4,5"
}