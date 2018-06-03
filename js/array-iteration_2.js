/*
На входе массив чисел, например: arr = [1,2,3,4,5].
ите функцию getSums(arr), которая возвращает массив его частичных сумм.
Иначе говоря, вызов getSums(arr) должен возвращать новый массив из такого же числа элементов, в котором на каждой позиции должна быть сумма элементов arr до этой позиции включительно.
Функция не должна модифицировать входной массив.
В решении используйте метод arr.reduce.
То есть: 
getSums( arr ) = [ 1, 1+2, 1+2+3, 1+2+3+4, 1+2+3+4+5 ] = [ 1, 3, 6, 10, 15 ]
Еще пример: getSums([-2,-1,0,1]) = [-2,-3,-3,-2].
*/

let arr = [1, 2, 3, 4, 5];
// let arr = [-2, -1, 0, 1];

function getSums(arr) {
  let newArr = [];

  arr.reduce(function (sum, current) {
    let currentSum = sum + current;
    newArr.push(currentSum);
    return currentSum;
  }, 0);

  return newArr;
};

console.log(getSums(arr));