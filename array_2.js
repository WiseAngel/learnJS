let styles = ['Джаз', 'Блюз'];
styles.push('Рок-н-Ролл');

function changeStyle(style) {
  styles[styles.length - 2] = style;
}
changeStyle('Классика');

alert(styles.shift());
styles.unshift('Рэп','Регги');
