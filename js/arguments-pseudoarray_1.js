/* 
Проверка на аргумент-undefined
Как в функции отличить отсутствующий аргумент от undefined?
Выведите 1, если первый аргумент есть, и 0 - если нет.
*/


function f(x) {
  arguments.length === 0 || arguments[0] === '' ? console.log(0) : console.log(1);
}


/* function f(x) {
  alert( arguments.length ? 1 : 0 );
} */

f(undefined); // 1
f(); // 0
f(''); // 0




