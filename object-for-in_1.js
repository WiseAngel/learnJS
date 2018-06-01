'use strict';

function isEmpty(obj) {
  for (let key in obj) {
    return false;
  }
  return true;
};

var schedule = {};

alert(isEmpty(schedule)); // true

schedule["8:30"] = "подъём";

alert(isEmpty(schedule)); // false