/* 
Случайный порядок в массиве
важность: 3
Используйте функцию sort для того, чтобы «перетрясти» элементы массива в случайном порядке.

var arr = [1, 2, 3, 4, 5];

arr.sort(ваша функция);

alert( arr ); // элементы в случайном порядке, например [3,5,1,2,4] 
*/

function rndSort(a, b) {
  let rnd = Math.random() - 0.5;
  //let rnd = Math.random() 
  //return ((rnd - 0.5) * a - (rnd - 0.5) * b);
  return rnd
};

let arr = [1, 2, 3, 4, 5];

arr.sort(rndSort);


console.log(arr);