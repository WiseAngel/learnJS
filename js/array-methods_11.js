/*
 Оставить уникальные элементы массива
важность: 3
Пусть arr – массив строк.

Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы arr.

Например:

function unique(arr) {
   ваш код 
}

var strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", "8-()"
];

alert( unique(strings) );  кришна, харе, 8-() 
*/


/* function unique(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr.indexOf(arr[i], i + 1) >= 0) {
      arr.splice(arr.indexOf(arr[i], i + 1), 1);
      i--;
    }
  }
  return arr;
} */

/* function unique(arr) {
  var obj = {};

  for (var i = 0; i < arr.length; i++) {
    var str = arr[i];
    obj[str] = true; // запомнить строку в виде свойства объекта
  }

  return Object.keys(obj); // или собрать ключи перебором для IE8-
} */

/* function unique(arr) {
  var obj = {};

  for (var i = 0; i < arr.length; i++) {
    var str = arr[i];
    obj[str] = true; // запомнить строку в виде свойства объекта
  }

  return Object.keys(obj); // или собрать ключи перебором для IE8-
}  */

function unique(arr) {
  var obj = {};
  arr.forEach((item, i, arr) => {
    let str = arr[i];
    obj[str] = true;
  });

  return Object.keys(obj);
}

let strings = ["the", "at", "a", "of", "with", "and", "or", "in", "from", "by", "with", "and", "or", "for", "to", "at", "a"];
let strings2 = ["кришна", "кришнаc", "харе", "харе", "харе", "харе", "кришна", "кришна", "8-()"];

console.log(unique(strings));
console.log(unique(strings2));