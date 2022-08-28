console.log(8 ** (1 / 3)); //cubic root

function randomInt(min, max) {
  if (isNaN(min) || isNaN(max)) return "invalid";
  let array = [];
  for (let i = 0; i < 5; i++) {
    let xx = Math.trunc(Math.random() * (max - min)) + min;
    array.push(xx);
  }
  return array;
}

console.log(randomInt(5, 10));
console.log(2 ** 100);
console.log(Number.MAX_SAFE_INTEGER);

//BigInt
console.log(BigInt(4 ** 30));

const huge = 204567890n;
const num = 4567890n;
const sum = huge + num;
const product = num * huge;
console.log(product);
console.log(sum);
