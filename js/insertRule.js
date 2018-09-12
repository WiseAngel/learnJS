// Все мы знаем, что можно получить список элементов по селектору (с помощью document.querySelectorAll)
// и добавить каждому из них стили, 
// но более эффективным будет задать те же стили селектору (как вы делаете в таблице стилей), с помощью функции insertRule:

var sheet = (function() {
	// Создаём элемент <style>
	var style = document.createElement('style');
    
	// Если хотите, то добавляем атрибут `media` (и/или медиа-выражения)
	// style.setAttribute('media', 'screen')
	// style.setAttribute('media', 'only screen and (max-width : 1024px)')
    
	// Хак для WebKit :(
	style.appendChild(document.createTextNode(''));
    
	// Добавляем на страницу элемент <style>
	document.head.appendChild(style);
    
	return style.sheet;
})();
    
// Пример использования
sheet.insertRule("header { float: left; opacity: 0.8; }", 1);
// Это будет особенно полезно когда вы работаете с динамическим сайтом с большим количеством AJAX. 
// Если вы добавите стили для конкретного селектора, вам не придётся каждый раз добавлять эти же стили для элементов, 
// которые могут соответствовать этому селектору сейчас или в будущем.

