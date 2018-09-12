// Как правило, мы проверям входные данные, прежде чем продолжать что-то делать: 
// удостоверяемся, что значение верно, что содержимое формы валидно, и т.д.

// Но как часто мы проверяем, что имеющийся элемент подходит для дальнейших действий? 
// Для проверки соответствия элемента заданному селектору вы можете использовать функцию matchesSelector:

function matchesSelector(el, selector) {
    var p = Element.prototype;
    var f = p.matches || p.webkitMatchesSelector || p.mozMatchesSelector || p.msMatchesSelector || function(s) {
        return [].indexOf.call(document.querySelectorAll(s), this) !== -1;
    };
    return f.call(el, selector);
}
 
// Пример использования
matchesSelector(document.getElementById('myDiv'), 'div.someSelector[some-attribute=true]')