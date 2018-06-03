/*
Перепишите суммирование аргументов
*/

// Одалживание метода
function sumArgs() {
    arguments.reduce = [].reduce;
    return arguments.reduce(function(a, b) {
        return a + b;
    });
}
alert(sumArgs(1, 2, 3));

//Метод call
function sumArgs() {
    var reduce = [].reduce;
    return reduce.call(arguments, func);
    function func(a, b) { return a + b };
}
alert(sumArgs(1, 2, 3));
