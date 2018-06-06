// (function (a) { //расширение алерта, для вывода нескольких значений(мне так нравится=))
//   window.console.log = function () {
//     a(Array.prototype.slice.call(arguments).join('\n'))
//   }
// }(window.console.log))

'use strict';

if (!Object.keys) { //Object.keys для ослов(с MDN)
  Object.keys = (function () {
    let hasOwnProperty = Object.prototype.hasOwnProperty,
      hasDontEnumBug = !({
        toString: null
      }).propertyIsEnumerable('toString'),
      dontEnums = [
        'toString',
        'toLocaleString',
        'valueOf',
        'hasOwnProperty',
        'isPrototypeOf',
        'propertyIsEnumerable',
        'constructor'
      ],
      dontEnumsLength = dontEnums.length

    return function (obj) {
      if (typeof obj !== 'object' && typeof obj !== 'function' || obj === null) throw new TypeError('Object.keys called on non-object')

      let result = []

      for (let prop in obj) {
        if (hasOwnProperty.call(obj, prop)) result.push(prop)
      }

      if (hasDontEnumBug) {
        for (let i = 0; i < dontEnumsLength; i++) {
          if (hasOwnProperty.call(obj, dontEnums[i])) result.push(dontEnums[i])
        }
      }
      return result
    }
  })()
};




Object.equals = function (first, second) {

  let cache = []; //кеш обьектов, для избежания рекурсии

  function inCache(first, second) {
    let i = cache.length;
    while (i--)
      if (
        (cache[i][0] === first || cache[i][0] === second) && (cache[i][1] === second || cache[i][1] === first)
      ) return true;
    return false
  }

  return function eq(f, s) {
    if (f === s) return true; //сравниваем обычным образом
    if (f instanceof Date && s instanceof Date) return +f === +s; //время
    if (typeof f !== 'object' || typeof s !== 'object') return false; //если хотябы один из аргументов не объект (положительный случай для необъектов рассмотрен выше)
    if (inCache(f, s)) return true; //есть в кеше
    cache.push([f, s]); //кешируем

    let keys = Object.keys(f),
      i = keys.length; //получаем ключи
    if (Object.keys(s).length !== i) return false; //если количество ключей не совпадает
    while (i--)
      if (!eq(f[keys[i]], s[keys[i]])) return false; //рекурсивный вызов

    return true
  }(first, second)
}



let a = {x: 1,c: {r: 0}};
let b = {x: 1,c: {r: 0}};
let c = {x: 1,c: {r: 0}};
a.c.r = a;
b.c.r = b;
c.c.r = c;
a.z = b;
b.z = c;
c.z = a;

console.log(
  'Обычные объекты:',
  Object.equals({a: [1, 2, 3],b: 2}, {b: 2,a: [1, 2, 3]}), //true
  Object.equals(null, null), //true
  Object.equals(1, 1), //true
  Object.equals(1, '1'), //false
  Object.equals(1, {a: 1}), //false
  Object.equals([1, 2], [1, 2]), //true
  Object.equals(new Date(), new Date()) //true
);

console.log(
  'Рекурсивные:',
  Object.equals(a, b), //true
  Object.equals(a, c), //true
  Object.equals(c, b), //true
  Object.equals(a, {x: 1,c: {r: ''}}) //false
);


let objA = {
  prop1: 'value1',
  prop2: 'value2',
  prop3: 'value3',
  prop4: {
    subProp1: 'sub value1',
    subProp2: {
      subSubProp1: 'sub sub value1',
      subSubProp2: [1, 2, {
        prop2: 1,
        prop: 2
      }, 4, 5]
    }
  },
  prop5: 1000,
  prop6: new Date(2016, 2, 10)
};

let objB = {
  prop5: 1000,
  prop3: 'value3',
  prop1: 'value1',
  prop2: 'value2',
  prop6: new Date('2016/03/10'),
  prop4: {
    subProp2: {
      subSubProp1: 'sub sub value1',
      subSubProp2: [1, 2, {
        prop2: 1,
        prop: 2
      }, 4, 5]
    },
    subProp1: 'sub value1'
  }
};
console.log(Object.equals(objA, objB));