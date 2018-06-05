/* 
Строковый буфер с очисткой
важность: 5
Добавьте буферу из решения задачи Функция - строковый буфер метод buffer.clear(), который будет очищать текущее содержимое буфера:
 function makeBuffer() {
  ...ваш код...
}

var buffer = makeBuffer();

buffer("Тест");
buffer(" тебя не съест ");
alert( buffer() ); // Тест тебя не съест

buffer.clear();

alert( buffer() ); // ""
*/

function makeBuffer() {
  let currentBuffer = '';

  function buffer(value) {
    if (arguments.length) {

      return currentBuffer += value;
    }
    return currentBuffer;
  }
  
  buffer.clear =function () {
    currentBuffer = '';
  }
  return buffer;
};

let buffer = makeBuffer();
buffer('Замыкания');
buffer(' Использовать');
buffer(' Нужно!');
console.log(buffer());
buffer.clear();
console.log(buffer());

let buffer2 = makeBuffer();
buffer2(0);
buffer2(1);
buffer2(0);
console.log(buffer2());