// Функцию debounce не всегда возможно подключить для обозначения желаемого состояния: 
// если событие не существует — это будет не возможно. В этом случае вы должны проверять состояние с помощью интервалов:

function poll(fn, callback, errback, timeout, interval) {
    var endTime = Number(new Date()) + (timeout || 2000);
    interval = interval || 100;
  
    (function p() {
        // В случае успешного выполнения условия
        if(fn()) {
            callback();
        }
        // Условие не выполнилось, но время ещё не вышло (тик интервала)
        else if (Number(new Date()) < endTime) {
            setTimeout(p, interval);
        }
        // Условие не выполнилось, а отведённое время вышло
        else {
            errback(new Error('timed out for ' + fn + ': ' + arguments));
        }
    })();
}

// При использовании: убедитесь что элемент видим
poll(
    function() {
        return document.getElementById('lightbox').offsetWidth > 0;
    },
    function() {
        // Функция на случай успешного выполнения
    },
    function() {
        // Функция на случай ошибки
    }
);