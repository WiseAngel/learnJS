/* Функция - строковый буфер
важность: 5
В некоторых языках программирования существует объект «строковый буфер», который аккумулирует внутри себя значения. Его функционал состоит из двух возможностей:

Добавить значение в буфер.
Получить текущее содержимое.
Задача – реализовать строковый буфер на функциях в JavaScript, со следующим синтаксисом:

Создание объекта: let buffer = makeBuffer();.
Вызов makeBuffer должен возвращать такую функцию buffer, которая при вызове buffer(value) добавляет значение в некоторое внутреннее хранилище, а при вызове без аргументов buffer() – возвращает его.
Вот пример работы:

function makeBuffer() { }

let buffer = makeBuffer();

// добавить значения к буферу
buffer('Замыкания');
buffer(' Использовать');
buffer(' Нужно!');

// получить текущее значение
console.log( buffer() ); // Замыкания Использовать Нужно!
Буфер должен преобразовывать все данные к строковому типу:

let buffer = makeBuffer();
buffer(0);
buffer(1);
buffer(0);

console.log( buffer() ); // '010'
Решение не должно использовать глобальные переменные. */



function makeBuffer() {
  let currentBuffer = '';

  function buffer(value) {
    if (arguments.length) {

     return currentBuffer += value;
    }
    return currentBuffer;
  }
  return buffer;
};

let buffer = makeBuffer();
buffer('Замыкания');
buffer(' Использовать');
buffer(' Нужно!');
console.log(buffer());

let buffer2 = makeBuffer();
buffer2(0);
buffer2(1);
buffer2(0);
console.log(buffer2());