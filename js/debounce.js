/* function debounce(f, ms) {

  let timer = null;

  return function (...args) {
    const onComplete = () => {
      f.apply(this, args);
      timer = null;
    }

    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(onComplete, ms);
  };
}

function f(x) { alert(x) }
let fq = debounce(f, 1000);

fq(1); // вызов отложен на 1000 мс
fq(2); // предыдущий отложенный вызов игнорируется, текущий (2) откладывается на 1000 мс

// через 1 секунду появится alert(2)

setTimeout( function() { fq(3) }, 1100); // через 1100 мс отложим вызов еще на 1000 мс
setTimeout( function() { fq(4) }, 1200); // игнорируем вызов (3)

// через 2200 мс от начала выполнения появится alert(4) */



const debounce = (func, timeout) => {

  let timer = null;

  return (...args) => {
    const onComplete = () => func.apply(null, args);

    if (timer) clearTimeout(timer);

    timer = setTimeout(onComplete, timeout);
  };
}

const fun = (x) => alert(x);
const f = debounce(fun, 1000);

f(1); // вызов отложен на 1000 мс
f(2); // предыдущий отложенный вызов игнорируется, текущий (2) откладывается на 1000 мс
f(3); 
f(4); // игнорируем вызов (3)
