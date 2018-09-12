// let artistTitle = new Array(21);
// showArtistTitle(artistTitle);
// let artistTitle = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];'use strict';
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



// function descendingOrder(n){
//   let str = n +'';
//   return +(str.split('').sort( (a,b) => b-a ).join(''));
//   // console.log(arr);
//   // return +arr;
// };

// console.log(descendingOrder(123456));


// function isIsogram(str) {
//   let strArr = str.toLowerCase().split('');
//   let strObj = {};
//   strArr.forEach(letter => {
//     strObj[letter] = true; 
//   });
//   let result = Object.keys(strObj).length == strArr.length ? true : false;
//   return result;
// }
// function isIsogram(str){
//   let result = new Set(str.toUpperCase());
//  console.log(result);
// }
// console.log(isIsogram('Dermatoglyphics'));
// console.log(isIsogram('aba'));
// console.log(isIsogram(''));


// Function.prototype.curry = function() {
//   if (arguments.length<1) {
//       return this; //nothing to curry. return function
//   }
//   var self = this;
//   var args = toArray(arguments);
//   return function() {
//       return self.apply(this, args.concat(toArray(arguments)));
//   }
// }

// function toArray(args) {
//   return Array.prototype.slice.call(args);
// }

// let converter = function(factor, symbol, input){
//   return input * factor + symbol;
// };

// var milesToKm = converter.curry(1.62, 'km');
// console.log(milesToKm(3)); //result here

// var kgToLb = converter.curry(2.2, 'lb');
// console.log(kgToLb(3)); //result here



// var obj = ['a','w','q'];
// var n = Object.keys(obj);
// console.log(n);


// let makeNegative = (num) => Math.sign(num) <= 0 ? num : -num;

// function makeNegative(num){ return Math.sign(num) <= 0 ? num : -num; }

// console.log(makeNegative(-1));
// console.log(makeNegative(-10));
// console.log(makeNegative(0.1));


/* let str1 = '0,25,2,43,47,91'
let str2 = '3,5,1,2,0,4'

function getSquence(str1, str2) {
  const arr1 = str1.split(',');
  const arr2 = str2.split(',');

  let i = 0;
  let arr3 = arr2.map(n => i = arr2[i]);
  let result = '%s-%s-%s-%s-%s-%s';

  arr3.forEach(n => {
    result = result.replace('%s', arr1[n]);
  });
  return result;
}

console.log(getSquence(str1, str2)); */

/* function findMissingLetter(array)
{
  for (let i = 1; i < array.length; i++) {
    if (array[i].charCodeAt(0) !=  array[i-1].charCodeAt(0)+1){
      return String.fromCharCode(array[i].charCodeAt(0)-1);
    }
  }
}
console.log(findMissingLetter(['a','b','c','d','f']));
console.log(findMissingLetter(['O','Q','R','S'])); */


// function validPhoneNumber(phoneNumber){
//   let bracePos = phoneNumber.indexOf(')');
//   if (bracePos+1 === ' ' && phoneNumber.slice(bracePos+4) === '-'){
//     return true
//   }
//   return false;
// }



/* function validPhoneNumber(phoneNumber){
  let bracePos = phoneNumber.indexOf(')');
  let pos = phoneNumber[bracePos+5];
  let tire = phoneNumber[bracePos+1];
  if (bracePos <=0) {
    return false;
  }
  if ( tire === ' ' && pos === '-'){
    return true
  }
  return false;
} */

/* function validPhoneNumber(phoneNumber) {
  let bracePos = phoneNumber.indexOf(')');
  // let pos = phoneNumber[bracePos+5];
  // let tire = phoneNumber[bracePos+1];
  if (phoneNumber[bracePos + 1] === ' ' && phoneNumber[bracePos + 5] === '-' || phoneNumber[bracePos + 6] === '-') {

    return true
  }
  return false;
}

console.log(validPhoneNumber("(123) 456-7890"));
console.log(validPhoneNumber("(123) 456 7890"));
console.log(validPhoneNumber("(1111)555 2345"));
console.log(validPhoneNumber("(098) 123 4567"));
console.log(validPhoneNumber("(1231) 456-7890"));

// https://www.codewars.com/kata/525f47c79f2f25a4db000025/train/javascript */

// Words to match


/*    
let positionSize = (tradeType, entryPrice, stoploss, capital, riskPercentage) => {
  let totalLoss = capital * riskPercentage / 100;
  let longType = stoploss < entryPrice;
  let shortType = stoploss > entryPrice;
  let priceDifference = entryPrice - stoploss;
  let result = Math.round(totalLoss / priceDifference);
  
  tradeType = tradeType.toLowerCase();
  
    return tradeType === 'long' && longType ? Math.abs(result) : false;

    return tradeType === 'short' && shortType ? Math.abs(result) : false;
};


console.log(positionSize('SHORT', 9.45, 9.54, 3500, 3)); */

// (function varTest() {
//   // var x = 1;
//   for (var i = 0; i<5; i++) {
//     x++;
//     console.log(x);
//     }
//   if (true) {
//     var x = 2;  // та же переменная!
//     console.log(x);  // 2
//   };

//   console.log(x);  // 2
// })()


// function openPageAll(indexArtistTitle) {
//   console.log(indexArtistTitle);
// };

// function showArtistTitle(arr) {
//   (function iterate(i) {
//     if (i <= 2) {
//       openPageAll(arr[i]);
//     } else if (i <= arr.length) {
//       setTimeout(function () {
//         openPageAll(arr[i]);
//         iterate(i + 1);
//       }, 1000);
//     }
//   })(0);
// }


function openPageAll(indexArtistTitle) {
  console.log(indexArtistTitle);
};

function showArtistTitle(arr) {
  let shortArr = arr.slice(0, 3);
  openPageAll(shortArr);
  (function iterate(i) {
    let shortArr = arr.slice(i, i + 3);

    if (i < arr.length) {
      setTimeout(function () {
        openPageAll(shortArr);
        iterate(i + 3);
      }, 1000);
    }

  })(3);
}

// let artistTitle = new Array(21);
let artistTitle = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];
showArtistTitle(artistTitle);
