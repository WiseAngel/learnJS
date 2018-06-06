// /** сравнить объекты по значению рекурсивно все свойства.
//  *@param Object firstObj один из объектов для сравнения
//  *@param Object secondObject другой объект для сравнения
//  *@return boolean true одинаковы, false - различаются
//  *Пр.: Object.equals({a:[1,2,3],b:2}, {b:2,a:[1,2,3]}); //true
//  *     Object.equals(null, null); //false
//  *     Object.equals(1, 1); //true
//  *     Object.equals(1, '1');//true
//  *     Object.equals(1, {a:1});//false
//  *     Object.equals([1,2], [1,2]);//true
//  *     Object.equals(new Date(), new Date())//true
//  *     
//  *     let d= new Date();
//  *     let d2= new Date(d.getTime()+3600000);
//  *     Object.equals(d, d2); //false
//  *     Object.equals(d, d); //true
//  *     Object.equals(d, new Date(d.getTime())); //true
//  **/

'use strict';

Object.equals = function (firstObj, secondObject) {
  if ((null == firstObj) || (null == secondObject)) return false; //null сравниваем правильно. Если хоть в одном операнде значит false
  if (('object' != typeof firstObj) && ('object' != typeof secondObject)) return firstObj == secondObject; //оба из простых - сравнение простых значений. 
  else if (('object' != typeof firstObj) || ('object' != typeof secondObject)) return false; //сравнивается простое значение с объектом - всегда не равны
  //в этой точке только если сравниваем именно объекты (оба)    

  //отдельно для дат
  if ((firstObj instanceof Date) && (secondObject instanceof Date)) return firstObj.getTime() == secondObject.getTime(); //исключение для дат. сравним их по микросекундам
  else if ((firstObj instanceof Date) && (secondObject instanceof Date)) return false; //Если дата сравнивается с чем-то ещё -то всегда выдать несоответствие

  //далее сравниваем нормальные объекты
  let keysFirstObj = Object.keys(firstObj);
  let keysSecondObject = Object.keys(secondObject);
  if (keysFirstObj.length != keysSecondObject.length) {
    return false;
  }
  return !keysFirstObj.filter(function (key) {
    if (typeof firstObj[key] == "object" || Array.isArray(firstObj[key])) {
      return !Object.equals(firstObj[key], secondObject[key]);
    } else {
      return firstObj[key] !== secondObject[key];
    }
  }).length;
}
let objA = {
  prop1: 'value1',
  prop2: 'value2',
  prop3: 'value3',
  prop4: {
    subProp1: 'sub value1',
    subProp2: {
      subSubProp1: 'sub sub value1',
      subSubProp2: [1, 2, {
        prop2: 1,
        prop: 2
      }, 4, 5]
    }
  },
  prop5: 1000,
  prop6: new Date(2016, 2, 10)
};

let objB = {
  prop5: 1000,
  prop3: 'value3',
  prop1: 'value1',
  prop2: 'value2',
  prop6: new Date('2016/03/10'),
  prop4: {
    subProp2: {
      subSubProp1: 'sub sub value1',
      subSubProp2: [1, 2, {
        prop2: 1,
        prop: 2
      }, 4, 5]
    },
    subProp1: 'sub value1'
  }
};
console.log(Object.equals(objA, objB));
// console.log(Object.equals({a: [1, 2, 3],b: 2}, {b: 2, a: [1, 2, 3]})); 
// console.log(Object.equals(null, null));
// console.log(Object.equals(1, 1)); 
// console.log(Object.equals(1, '1'));
// console.log(Object.equals(1, {a: 1}));
// console.log(Object.equals([1, 2], [1, 2]));
// console.log(Object.equals(new Date(), new Date()));