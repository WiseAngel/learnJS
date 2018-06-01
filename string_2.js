function truncate(str, maxlength) {
  let newStr = (str.length > maxlength) ? str.slice(0, maxlength-3) + '...' : str;
  alert( newStr );
}
truncate("Вот, что мне хотелось бы сказать на эту тему:", 20); //= "Вот, что мне хоте..."

truncate("Всем привет!", 20); //= "Всем привет!"