// // function friend(friends){
// //   let myFriends = [];
// //   friends.map((name) => {
// //     if(name.length == 4) myFriends.push(name)
// //   })
// //   return myFriends;
// // }


// // function friend(friends){
// //   let myFriends = [];
// //   for(let i = 0; i<friends.length; i++){
// //     if(friends[i].length == 4) myFriends.push(friends[i])
// //   }
// //   return myFriends;
// // }


// // function friend(friends){
// //   let myFriends = [];

// //   friends.forEach(name => {
// //     if(name.length == 4) myFriends.push(name)
// //   });

// //   return myFriends;
// // }




// /* function validatePIN (pin) {
//   if (parseInt(pin).toString().length == 4 || parseInt(pin).toString().length == 6 ) return true;
//     return false;
//  } */

// // function validatePIN (pin) {
// //   if ( /* parseInt(pin) && */ parseInt(pin) > 0 &&  /* (parseInt(pin)).toString().length == 4 || (parseInt(pin)).toString().length == 6 && */ pin.length == 4 || pin.length == 6) return pin;
// //     return false;
// //  }




// // function validatePIN (pin) {
// //   let num = parseInt(pin);

// //   if (1000 <= num <= 9999 && num.toString().length == 4 || pin === '0000' ) {
// //     return true;
// //   } else if ( 100000 <= num <= 999999 && num.toString().length == 6 || pin === '000000' ) {
// //     return true;
// //   } else {
// //     return false;
// //   }
// //  }


// /* function validatePIN(pin) {
//   let num = parseInt(pin);
//   if (pin === '0000' || pin === '000000') {
//     // console.log(true);
//     return true;
//   }
//   if (num > 0 && pin.length == 4 || num > 0 && pin.length == 6) {
//     for (let i = 0; i < pin.length; i++) {
//       if (typeof (parseInt(pin[i])) == 'number' && isNaN(pin[i])) {
//         // console.log(false);
//         return false;
//       }
//       // console.log(true);
//       // return true;
//     }
//     //  console.log(true);
//       return true;
//   }
//   // console.log(false);
//   return false;
// }

// function validatePIN(pin) {
//   return /^(\d{4}|\d{6})$/.test(pin)
// } 

// function validatePIN (pin) {
//   var reg = new RegExp('^([0-9]{4}|[0-9]{6})$');
//   return reg.test(pin);
// }
// */

// validatePIN('097804')
// // console.log(validatePIN('99P7'))


// let sums = (...values) => values.reduce((sum, current) => sum + current);
// let str = 'hello';
// console.log(str);

// console.log(sums(1, 2, 3, 4));

'use strict';

let user = {
  'name': "Ilya",
  'surname': "Kantor",
  '_version': 1,
  '_secret': 123456
};
let props = Object.keys(user).filter(prop => prop[0] != '_');
let proxy = new Proxy(user, props);

// отфильтрованы свойства, начинающиеся с _
for(let prop in proxy) {
  alert(prop); // Выведет свойства user: name, surname
}