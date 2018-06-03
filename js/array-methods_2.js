/* 
Перевести текст вида border-left-width в borderLeftWidth
важность: 3
Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».

То есть, дефисы удаляются, а все слова после них получают заглавную букву.

Например:

camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition") == 'WebkitTransition';
Такая функция полезна при работе с CSS.

P.S. Вам пригодятся методы строк charAt, split и toUpperCase.
*/

function camelize(str) {
  let arr = str.split('-');
  for (let i = 1; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }
  return arr.join('');
};
console.log(camelize("background-color")); // == 'backgroundColor';
console.log(camelize("list-style-image")); // == 'listStyleImage';
console.log(camelize("-webkit-transition")); // == 'WebkitTransition';


/* function camelize(str) {
  var css = str.split('');
  for (var i = 0; i < css.length; i++) {
    if (css[i] == '-') {
      css.splice(i, 1);
      if (!css[i + 1]) {
        continue
      } else {
        css[i] = css[i].toUpperCase();
      }

    }
  }
  str = css.join('');
  console.log(str)
};
camelize('background-color');
camelize('-webkit-color-');
camelize("-webkit-transition"); */

