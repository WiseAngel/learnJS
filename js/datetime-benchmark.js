var arr = [];
for (var i = 0; i < 10; i++) arr[i] = 0;

function walkIn(arr) {
  for (var key in arr){
    arr[key]++;
    console.log(`${key} : ${arr[key]}`);

  } 
}

function walkLength(arr) {
  for (var i = 0; i < arr.length; i++) {
    arr[i]++;
    console.log(`${i} : ${arr[i]}`);

  }
}

function bench(f) {
  var date = new Date();
  for (var i = 0; i < 1000; i++) f(arr);
  return new Date() - date;
}

// bench для каждого теста запустим много раз, чередуя
var timeIn = 0,
  timeLength = 0;
for (var i = 0; i < 100; i++) {
  timeIn += bench(walkIn);
  timeLength += bench(walkLength);
}

alert( 'Время walkIn: ' + timeIn + 'мс' );
alert( 'Время walkLength: ' + timeLength + 'мс' );;