"use strict";

var salaries = {
  "Вася": 100,
  "Петя": 300,
  "Даша": 250
};
let total = 0;

for (let key in salaries) {
  total += salaries[key];
}

alert(total);