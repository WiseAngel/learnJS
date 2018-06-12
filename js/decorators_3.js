/* Кеширующий декоратор
важность: 5
Создайте декоратор makeCaching(f), который берет функцию f и возвращает обертку, которая кеширует её результаты.

В этой задаче функция f имеет только один аргумент, и он является числом.

При первом вызове обертки с определенным аргументом – она вызывает f и запоминает значение.
При втором и последующих вызовах с тем же аргументом возвращается запомненное значение.
Должно работать так:

function f(x) {
  return Math.random() * x; // random для удобства тестирования
}

function makeCaching(f) {  }

f = makeCaching(f);

var a, b;

a = f(1);
b = f(1);
alert( a == b ); // true (значение закешировано)

b = f(2);
alert( a == b ); // false, другой аргумент => другое значение */


function f(x) {
  return Math.random() * x; // random для удобства тестирования
}

function makeCaching(f) {
  var cache = {};

  return function (x) {
    if (!(x in cache)) {
      cache[x] = f.call(this, x);
    }
    return cache[x];
  };

}

f = makeCaching(f);

var a, b;

a = f(1);
b = f(1);
alert(a == b); // true (значение закешировано)

b = f(2);
alert(a == b); // false, другой аргумент => другое значение