function getDecimal(num) {

  //  let numFloat = parseFloat(num) - parseInt(num);
  //  return Math.round(numFloat*1000)/1000;
  let numStr = num.toString(10)
  let numFloat = num > 0 ? (num % 1) : (-num % 1);
  let dotPos = numStr.indexOf('.');
  let numLength = numStr.slice(dotPos + 1).length;
  
  return Math.round(numFloat * ('1e' + numLength)) / ('1e' + numLength);
};

alert(getDecimal(-12.3456));
alert(getDecimal(21211.21234124));
alert(getDecimal(-1.2));