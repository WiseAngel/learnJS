/* 
Скопировать и отсортировать массив
важность: 5
Есть массив строк arr. Создайте массив arrSorted – из тех же элементов, но отсортированный.

Исходный массив не должен меняться.

var arr = ["HTML", "JavaScript", "CSS"];

// ... ваш код ...

alert( arrSorted ); // CSS, HTML, JavaScript
alert( arr ); // HTML, JavaScript, CSS (без изменений)
Постарайтесь сделать код как можно короче. 
*/

let arr = ["HTML", "JavaScript", "CSS"];

let arrSorted = arr.slice().sort();

console.log(arrSorted); // CSS, HTML, JavaScript
console.log(arr); // HTML, JavaScript, CSS (без изменений)