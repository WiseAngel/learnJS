'use strict';

function my(n) {
  if (n <= 1) return 1;
  return (n + my(n - 1));
}
console.log(my(7));