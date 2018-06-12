/* Логирующий декоратор (1 аргумент)
важность: 5
Создайте декоратор makeLogging(f, log), который берет функцию f и массив log.

Он должен возвращать обёртку вокруг f, которая при каждом вызове записывает («логирует») аргументы в log, а затем передает вызов в f.

В этой задаче можно считать, что у функции f ровно один аргумент.

Работать должно так:

function work(a) {
   // work - произвольная функция, один аргумент
}

function makeLogging(f, log) { }

var log = [];
work = makeLogging(work, log);

work(1); // 1, добавлено в log
work(5); // 5, добавлено в log

for (var i = 0; i < log.length; i++) {
  alert( 'Лог:' + log[i] ); // "Лог:1", затем "Лог:5"
} */


function work(a) {
  /*...*/ // work - произвольная функция, один аргумент
}

function makeLogging(f, log) {

  function wrapper(a) {
    log.push(a);
    return f.call(this, a);
  }

  return wrapper;
}

var log = [];
work = makeLogging(work, log);

work(1); // 1
work(5); // 5

for (var i = 0; i < log.length; i++) {
  alert('Лог:' + log[i]); // "Лог:1", затем "Лог:5"
}