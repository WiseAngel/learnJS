/* 
данные приходят в виде `[23, 45, 234, 45, 65]`
`const arr1 = ['a', ['b', 'b', 'b'], 'c'];` - это заголовки
если `arr2 = [1]` это значит, что нам не нужны заголовки на позиции 1
то есть останется `['a', 'c']`, задача - массив данных нужно правильно обработать, чтобы в данной ситуации осталось `[23, 65]` 
*/

const solve = (source, ignore) => {
  const res = [];
  const range = (begin, length) => [...Array(length)].map((e, i) => begin + i);

  let i = 0;
  
  source.forEach((item, index) => {
    const length = Array.isArray(item) ? item.length : 1;
    if (ignore.includes(index)) res.push(...range(i, length));
    i += length;
  });
  return res;
};

console.log(solve(["a", ["b", "b", "b"], "c"], [1, 2]))

console.log(solve(["a", ["b", "b", "b"], ["c", "c", "c", "c"], "d"], [1, 3]))

/* const solve = (source, ignore) => {
  ignore.sort((a, b) => a - b);
  let index = 0;
  let realIndex = 0;
  return ignore.reduce((target, v) => {
      for (let i=realIndex; i<v; i++) {
          index += Array.isArray(source[i]) ? source[i].length : 1;
      }
      realIndex = v + 1;
      return [...target, ...(Array.isArray(source[v]) ? source[v].map(_ => index++) : [index++])];
  }, []);
}

console.log(solve(["a", ["b", "b", "b"], "c"], [1, 2]))

console.log(solve(["a", ["b", "b", "b"], ["c", "c", "c", "c"], "d"], [1, 3])) */