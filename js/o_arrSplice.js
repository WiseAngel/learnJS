'use strict';
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [100, 200, 300, 400, 500];
function arrSplice(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    arr2.splice(2*i+1, 0, arr1[i])
  }
};
arrSplice(arr1, arr2);
console.log(arr2);