function printNumbersInterval() {

  var i = 1;

  var timerId = setTimeout(function tick() {
    console.log(i);
    timerId = setTimeout(tick, 100);
    if (i == 20) clearTimeout(timerId);
    i++;
  }, 100);
}

printNumbersInterval();
