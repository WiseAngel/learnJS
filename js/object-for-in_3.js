"use strict";

var salaries = {
  "Вася": 100,
  "Петя": 300,
  "Даша": 250
};
let total = 0;
let name  = '';

for (let key in salaries) {
  if (salaries[key] > total) {
    total = salaries[key];
    name = key;
  }
};

alert( name || "нет сотрудников" )
// ... ваш код выведет "Петя"