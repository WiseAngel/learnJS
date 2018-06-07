/* Создать Calculator при помощи конструктора
важность: 5
Напишите функцию-конструктор Calculator, которая создает объект с тремя методами:

Метод read() запрашивает два значения при помощи prompt и запоминает их в свойствах объекта.
Метод sum() возвращает сумму запомненных свойств.
Метод mul() возвращает произведение запомненных свойств.
Пример использования:

var calculator = new Calculator();
calculator.read();

alert( "Сумма=" + calculator.sum() );
alert( "Произведение=" + calculator.mul() ); */

function Calculator() {
  this.read = function () {
      this.varA = +prompt('Введите первое число', '');
      this.varB = +prompt('Введите второе число', '');
    },
    this.sum = function () {
      return this.varA + this.varB
    },
    this.mul = function () {
      return this.varA * this.varB
    }
}

var calculator = new Calculator();
calculator.read();
console.log("Сумма=" + calculator.sum());
console.log("Произведение=" + calculator.mul());