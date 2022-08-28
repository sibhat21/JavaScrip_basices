console.log("Hello");


//prime number
//method one
function isPrime(number) {
  for (let factor = 2; factor < number; factor++)
    if (number % factor === 0) return false;

  return true;
}

function findPrime(limit) {
  for (let number = 2; number <= limit; number++)
    if (isPrime(number)) console.log(number);
}
//find prime numbers 
//method two
function findPrime2(lm) {
  //6 2,3,4,5,6
  for (let number = 2; number <= lm; number++) {
    let isboolean = true;
    for (let fact = 2; fact < number; fact++) {
      if (number % fact === 0) {
        isboolean = false;
      }
    }
    if (isboolean) {
      console.log(number);
    }
  }
}
function findPrime3(array) {
  //6 2,3,4,5,6
  let sum = 0;
  for (let i = 0; i <= array.length - 1; i++) {
    if (array[i] > 0) {
      let isboolean = true;
      for (let fact = 2; fact < array[i]; fact++) {
        if (array[i] % fact === 0) {
          isboolean = false;
        }
      }
      if (isboolean) {
        sum = sum + array[i];
      }
    }
  }

  if (sum === array[0]) return 1;
  return 0;
}
console.log("===============");
let prime = findPrime2(20);
console.log("===============");
let prime2 = findPrime3([8, 5, -5, 3, 5]);
console.log(prime2);

//extracting lower case from a given text
console.log("hiden cass");

function extracthidenLetter(text) {
  let hiden = "";
  for (let i = 0; i < text.length; i++) {
    let hid = text.charAt(i);
    if (hid == hid.toLowerCase()) {
      hiden = hiden + hid;
    }
  }
  return hiden;
}

let text = "WhatisTheUseOFJavaScript";

console.log(extracthidenLetter(text));
//second way
function hidenExteract(textarray) {
  let splited = textarray.split("");
  let fltered = splited
    .filter((letter) => letter == letter.toLowerCase())
    .join("");
  return fltered;
}
const text2 = "WHAT IS The Use OF JavaScript";
console.log(hidenExteract());

console.log("hello".split(''))

let text3 = "helow123get045u";
let count = 0;

for (let i = 0; i < text3.length; i++) {
  let char = text3.charAt(i);
  if (char >= 0 || char <= 9) {
    count = count + 1;
  }
}
console.log(count);

function factorial(n) {
  if (n == 0 || n == 1) return 1;

  return n * factorial(n - 1);
}

console.log(factorial(4));

//find highset  common devisor(gcf);
// method-1 :recursevly
function gcf(a, b) {
  if (a === 0) return b;
  return gcf(b % a, a);
}
console.log(gcf(15, 12));
//subtracting until both numbers are  equal
function gcf2(a, b) {
  if (isNaN(a) || isNaN(b) || a < 0 || b < 0) return "invalid ";
  // a = Math.abs(a);
  // b = Math.abs(b);
  while (a !== b) {
    if (a > b) {
      a -= b;
    } else {
      b -= a;
    }
  }
  return b;
}
console.log(gcf2(20, 10));

// iterating and finding
function gcf3(a, b) {
  if (isNaN(a) || isNaN(b) || a < b || b < 0) return "invalid";
  let hcf = 0;
  for (let i = 1; i <= a && i <= b; i++) {
    if (a % i === 0 && b % i === 0) {
      hcf = i;
    }
  }
  return hcf;
}

console.log(gcf3(18, 15));

//checking dual array
function dualArrayUsingFilter(arr) {
    for (let i = 0; i < arr.length; i++) {
        let filtered = arr.filter((element) => element === arr[i]);
        if (filtered.length != 2) {
            return 0;
        }
    }
    return 1;
}

/**
 * /   You will be given an array of several arrays that each contain integers and your goal is to write a function that will sum up all the numbers in all the arrays. For example, if the input is [[3, 2], [1], [4, 12]] then your program should output 22 because3 + 2 + 1 + 4 + 12 = 22.
 */

function severalArray(array) {
  if (!Array.isArray(array)) return "invalid";
  let sum = 0;
  for (let element of array) {
    if (!Array.isArray(element)) {
      sum = sum + element;
    } else {
      for (let xx of element) {
        sum = sum + xx;
      }
    }
  }
  return sum;
}

console.log(severalArray([[3, 2], [1], [4, 12]]));

function sum_array_method2(arr) {
  // return (sum = arr.flat(Infinity).reduce((a, b) => a + b));
  return arr.flat(Infinity).reduce((a, b) => a + b, 0);
}

console.log(sum_array_method2([[3, [6], 2], [1], [4, 12]]));

/**
 * / Arrow Function:- An arrow function expression is a compact alternative to a traditional function expression, but is limited and can't be used in all situations.

// There are differences between arrow functions and traditional functions, as well as some limitations:

// Arrow functions don't have their own bindings to this, arguments or super, and should not be used as methods.
// Arrow functions don't have access to the new.target keyword.
// Arrow functions aren't suitable for call, apply and bind methods, which generally rely on establishing a scope.
// Arrow functions cannot be used as constructors.
// Arrow functions cannot use yield, within its body.
https://appsmaventech.com/blog/most-important-array-methods-in-javascrip

 */

function nestedArray(array) {
  array = array.flat(Infinity);

  return array.reduce((a, b) => a + b, 0);
}
console.log("++++++++++++++++++");
let array = [1, 2, [5, [5, 7, [9]]], 3, 4];
console.log(nestedArray(array));

//reverse array in-placement

function reversInplace(array) {
  let ln = array.length;
  for (let i = 0; i < ln; i++) {
    array.splice(i, 0, array.pop());
  }
  return array;
}
console.log("lassst....");

const reve = reversInplace([4, 5, 6, 7]);
console.log(reve);

console.log("+++++++++++++++++")
function trimes(text) {
  text = text.trim().toLowerCase();
  return `${text} and ${text.length}`; 
}

let tt = " GeTu Asfu  "
console.log(trimes(tt));


