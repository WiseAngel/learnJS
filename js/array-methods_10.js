/* Отфильтровать анаграммы
важность: 3
Анаграммы – слова, состоящие из одинакового количества одинаковых букв, но в разном порядке. Например:

воз - зов
киборг - гробик
корсет - костер - сектор
Напишите функцию aclean(arr), которая возвращает массив слов, очищенный от анаграмм.

Например:

var arr = ["воз", "киборг", "корсет", "ЗОВ", "гробик", "костер", "сектор"];

alert( aclean(arr) ); // "воз,киборг,корсет" или "ЗОВ,гробик,сектор"
Из каждой группы анаграмм должно остаться только одно слово, не важно какое. */

function aclean(arr) {
  let newArr = [];
  
  for (let i = 0; i < arr.length; i++) {
    let item = arr[i].toLowerCase().split('').sort().join('');
    newArr.push(item);
  }

  for (let i = 0; i < newArr.length; i++) {
    if (newArr.indexOf(newArr[i], i+1)>=0) {
      newArr.splice(i,1);
      arr.splice(i,1);
      i--;
    }
  }
  return arr;
}

/* function aclean(arr) {
  // этот объект будем использовать для уникальности
  var obj = {};

  for (var i = 0; i < arr.length; i++) {
    // разбить строку на буквы, отсортировать и слить обратно
    var sorted = arr[i].toLowerCase().split('').sort().join(''); // (*)

    obj[sorted] = arr[i]; // сохраняет только одно значение с таким ключом
  }

  var result = [];

  // теперь в obj находится для каждого ключа ровно одно значение
  for (var key in obj) result.push(obj[key]);

  return result;
}
 */

let arr = ["воз", "киборг", "корсет", "ЗОВ", "гробик", "костер", "сектор"];

console.log(aclean(arr));