/* 
В объекте есть свойство className, которое содержит список «классов» – слов, разделенных пробелом:

var obj = {
  className: 'open menu'
}
Создайте функцию addClass(obj, cls), которая добавляет в список класс cls, но только если его там еще нет:

addClass(obj, 'new'); // obj.className='open menu new'
addClass(obj, 'open'); // без изменений (класс уже существует)
addClass(obj, 'me'); // obj.className='open menu new me'

alert( obj.className ); // "open menu new me"
P.S. Ваша функция не должна добавлять лишних пробелов. 
*/

'use strict';

function addClass(obj, cls) {
  let classes = obj.className ? obj.className.split(' ') : [];
  classes.indexOf(cls) < 0 ? classes.push(cls) : classes;
  obj.className = classes.join(' ');
  return obj.className;
};

let obj = {
  className: 'open mymenu'
};

addClass(obj, 'new');
addClass(obj, 'open');
addClass(obj, 'me');
addClass(obj, 'menu');

console.log(obj.className);