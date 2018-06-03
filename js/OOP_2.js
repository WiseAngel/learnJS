function User(name) {
  this.name = name;
}
User.prototype = {}; // (*)
User.constructor = 'Петя';

var obj = new User('Вася');
var obj2 = new obj.constructor('Петя');

alert( obj2.name ); // undefined