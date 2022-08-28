const arr = [1, 2, 34, 40];
console.log(...arr);

const arr1 = [30, 40];
const arr2 = [50, 70];
const arr3 = [...arr1, ...arr2];
console.log(arr3);

//making string to array
const str = "Hello JavaScript";
const arrayStr = [...str];
console.log(arrayStr);

// const ingredients = [
//   prompt("Let's make passta,]! Ingredient 1?"),
//   prompt("Ingredint 2"),
//   prompt("Ingredint 2"),
// ];

// let prompetArray = [...ingredients];
// console.log(prompetArray)

//Spread Opperater at Right side
//Rest oiperater at left side

const [a, b, ...rest] = [2, 3, 4, 5]; //rest operater
console.log(a, b, rest[1]);

function sum(...items) {
  if (items.length === 1 && Array.isArray(items[0])) items = [...items[0]];

  let total = 0;
  for (let ele of items) total = total + ele;

  return total;
}
console.log(sum(1, 2, 3));

function restSpread() {
  if (arguments.length === 1 && Array.isArray([0]))
    arguments = [...arguments[0]];
  let sum = 0;
  for (let i of arguments) {
    sum = sum + i;
  }

  return sum;
}

console.log(restSpread([1, 2, 3, 4]));

class Math1 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  setName(name) {
    this.name = name;
  }
  getName() {
    return this.name;
  }
  static absolute(num) {
    return num < 0 ? num * -1 : num;
  }
}

const math = new Math1("Getu", 30);
math.setName("Safu");

console.log(math.getName());

let calc = Math1.absolute(-20);
console.log(calc);


const array = [30,40,50,70]
let index = Object.keys(array);
console.log(index)
