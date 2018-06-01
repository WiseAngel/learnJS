/* 
**Есть список чисел приходит еще число. Нужно добавить, если такого нет и удалить, если есть. Иммутабельно. 
*/


const solve = (source, num) => {
  const result = [];
  let found = false;
  source.forEach(val => {
    if (val === num) return found = true;
    result.push(val);
  });
  if (!found) result.push(num);
  return result;
};
console.log(solve([1,2,3], 3))
console.log(solve([1,2,3], 4))

/* 

const solve = (source, num) => (
  index = source.indexOf(num),
  index < 0 ? [...source, num] : [...source.slice(0, index), ...source.slice(index + 1)]
);
console.log(solve([1,2,3], 3))

console.log(solve([1,2,3], 4)) */