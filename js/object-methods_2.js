/* Создайте калькулятор
важность: 5
Создайте объект calculator с тремя методами:

read() запрашивает prompt два значения и сохраняет их как свойства объекта
sum() возвращает сумму этих двух значений
mul() возвращает произведение этих двух значений
var calculator = {
  ...ваш код...
}

calculator.read();
console.log( calculator.sum() );
console.log( calculator.mul() ); */

var calculator = {
  read() {
    this.varA = +prompt('Введите первое число', '');
    this.varB = +prompt('Введите второе число', '');
  },
  sum() {
    return this.varA + this.varB
  },
  mul() {
    return this.varA * this.varB
  }
}

calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());