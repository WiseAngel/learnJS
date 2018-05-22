var leader = {
  name: "Василий Иванович",
  age: 35
};

var str = JSON.stringify(leader);
alert( str ); 

// Обратное преобразование.
leader = JSON.parse(str);