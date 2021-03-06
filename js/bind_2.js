/* Использование функции вопросов с каррингом
важность: 5
Эта задача– усложнённый вариант задачи Использование функции вопросов.В ней объект user изменён.

Теперь заменим две функции user.loginOk() и user.loginFail() на единый метод: user.loginDone(true / false), который нужно вызвать с true при верном ответе и с false– при неверном.

Код ниже делает это, соответствующий фрагмент выделен.

Сейчас он обладает важным недостатком: при записи в user другого значения объект перестанет корректно работать, вы увидите это, запустив пример ниже(будет ошибка).

Как бы вы написали правильно ?

  Исправьте выделенный фрагмент, чтобы код заработал.

"use strict";

function ask(question, answer, ok, fail) {
  let result = prompt(question, '');
  if (result.toLowerCase() == answer.toLowerCase()) ok();
  else fail();
}

let user = {
  login: 'Василий',
  password: '12345',

  // метод для вызова из ask
  loginDone: function (result) {
    console.log(this.login + (result ? ' вошёл в сайт' : ' ошибка входа'));
  },

  checkPassword: function () {
    // ask("Ваш пароль?", this.password,
    //   function () {
    //     user.loginDone(true);
    //   },
    //   function () {
    //     user.loginDone(false);
    //   }
    // );
  }
};

let vasya = user;
user = null;
vasya.checkPassword();
Изменения должны касаться только выделенного фрагмента.

Если возможно, предложите два решения, одно– с использованием bind, другое– без него.Какое решение лучше ? */


"use strict";

function ask(question, answer, ok, fail) {
  let result = prompt(question, '');
  if (result.toLowerCase() == answer.toLowerCase()) ok();
  else fail();
}

let user = {
  login: 'Василий',
  password: '12345',

  loginDone: function (result) {
    console.log(this.login + (result ? ' вошёл в сайт' : ' ошибка входа'));
  },

  checkPassword: function () {
    ask("Ваш пароль?", this.password, this.loginDone.bind(this, true), this.loginDone.bind(this, false));
  }
};

user.checkPassword();