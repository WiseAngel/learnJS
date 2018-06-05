// var sum = 0;

// for (i = 4; i < 8; i++); {
//   if (i == 6) {
//     continue;
//   }
//   sum += i;
// };
// console.log(sum);
'use strict';

function sumNum(params) {
  let sum = 0;
  for (let i = 4; i < 8; i++) {
    if (i == 6) continue;
    sum += i;
  }

  return sum;
}

console.log(sumNum());