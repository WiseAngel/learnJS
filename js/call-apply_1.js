/*
Перепишите суммирование аргументов
важность: 5
Есть функция sum, которая суммирует все элементы массива:

 function sum(arr) {
  return arr.reduce(function(a, b) {
    return a + b;
  });
}

alert( sum([1, 2, 3]) ); // 6 (=1+2+3)
Создайте аналогичную функцию sumArgs(), которая будет суммировать все свои аргументы:

function sumArgs() {
 
}

alert( sumArgs(1, 2, 3) ); // 6, аргументы переданы через запятую, без массива
Для решения примените метод reduce к arguments, используя call, apply или одалживание метода.
*/

// Одалживание метода
function sumArgs() {
	arguments.reduce = [].reduce;
	return arguments.reduce(function (a, b) {
		return a + b;
	});
}
alert(sumArgs(1, 2, 3));

//Метод call
function sumArgs() {
	let reduce = [].reduce;
	return reduce.call(arguments, function (a, b) {
		return a + b;
	});
}

console.log(sumArgs(1, 2, 3));