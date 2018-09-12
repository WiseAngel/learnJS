// Получить абсолютный URL из строчной переменной не так просто, как кажется. 
// Существует конструктор URL, но он «барахлит», если вы не предоставите требуемые параметры (которых у вас может не быть). 
// Вот хитрый способ получить абсолютный URL из строки:

var getAbsoluteUrl = (function() {
	var a;
    
	return function(url) {
		if(!a) a = document.createElement('a');
		a.href = url;
        
		return a.href;
	};
})();
    
// Пример использования
getAbsoluteUrl('/something'); // http://davidwalsh.name/something
// Передаваемый на вход href и URL не имеют значения, функция в любом случае вернёт надежный абсолютный URL в ответ.

