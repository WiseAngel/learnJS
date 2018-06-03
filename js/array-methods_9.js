/* Вывести односвязный список
важность: 5
Односвязный список – это структура данных, которая состоит из элементов, каждый из которых хранит ссылку на следующий. Последний элемент может не иметь ссылки, либо она равна null.

Например, объект ниже задаёт односвязный список, в next хранится ссылка на следующий элемент:

var list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};
Графическое представление этого списка: 

Альтернативный способ создания:

var list = { value: 1 };
list.next = { value: 2 };
list.next.next = { value: 3 };
list.next.next.next = { value: 4 };
Такая структура данных интересна тем, что можно очень быстро разбить список на части, объединить списки, удалить или добавить элемент в любое место, включая начало. При использовании массива такие действия требуют обширных перенумерований.

Задачи:

Напишите функцию printList(list), которая выводит элементы списка по очереди, при помощи цикла.
Напишите функцию printList(list) при помощи рекурсии.
Напишите функцию printReverseList(list), которая выводит элементы списка в обратном порядке, при помощи рекурсии. Для списка выше она должна выводить 4,3,2,1
Сделайте вариант printReverseList(list), использующий не рекурсию, а цикл.
Как лучше – с рекурсией или без? */

'use strict';

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

/* function printList(list) {
  let tmp = list;

  while (tmp) {
    console.log(tmp.value);
    tmp = tmp.next;
  }

};
printList(list); */

/* function printList(list) {

  console.log(list.value);
  (list.next !== null) ? printList(list.next): list;

};
printList(list); */

/* function printReverseList(list) {

  if (list.next) {
    printReverseList(list.next);
  }

  console.log(list.value);
}

printReverseList(list); */

/* function printReverseList(list) {
  var arr = [];
  var tmp = list;

  while (tmp) {
    arr.push(tmp.value);
    tmp = tmp.next;
  }

  for (var i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
  }
}
printReverseList(list); */