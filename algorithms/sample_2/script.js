/**
 * Question 1 Given an array of numbers, write a function that prints in the console another array
which contains all the even numbers in the original array, which also have even indexes only.
○ Test 1: getOnlyEvens([1, 2, 3, 6, 4, 8]) prints [ 4]
○ Test 2: getOnlyEvens([0, 1, 2, 3, 4]) prints [0, 2, 4]
 */

function getOnlyEvens(array) {
  if (array.length === 0 || !Array.isArray(array)) return "Invalid";
  for (let elem of array) {
    if (isNaN(elem)) return "Invalid";
  }

  return array.filter((item, index) => item % 2 === 0 && index % 2 === 0);

  // // let evenArray = [];
  // for (let i = 0; i < array.length; i += 2) {
  //   if (array[i] % 2 === 0) {
  //     evenArray.push(array[i]);
  //   }
  // }
  // return evenArray;
}

let array = getOnlyEvens([1, 2, 3, 6, 4, 8]);
let array2 = getOnlyEvens([0, 1, 2, 3, 4]);
let array3 = getOnlyEvens([0, 1, 2, 3, 4, "xx"]);
console.log(array);
console.log(array2);
console.log(array3);

console.log("Group four");

/**
 * Question 2
● Create a function that takes a two-digit number as an parameter and prints "Ok" in
the console if the given string is greater than its reversed digit version. If not, the
function will print "Not ok"
○ Test 1: reverseCompare(72) prints "ok" because 72 > 27
○ reverseCompare(23) prints "Not ok", because 23 is not greater than 32
 */

function reverseCompare(number) {
  if (isNaN(number) || (number >= -9 && number <= 9)) return "invalid";

  let temp = number;
  let reverse = 0;
  while (temp) {
    reverse = reverse * 10 + (temp % 10);
    temp = Math.floor(temp / 10);
  }

  return number > reverse ? "Ok" : "Not ok";
}

console.log(reverseCompare(32));
console.log(reverseCompare(72));
console.log(reverseCompare(23));
console.log(reverseCompare(-8));

/**
 Question 3
● Write a function that takes a positive integer and returns the factorial of the number.
Notes: The factorial of 0 is 1. Ex: factorial seven is : 1 × 2 × 3 × 4 × 5 × 6 × 7. The
factorial of any positive integer x is x * (x - 1) * (x - 2) * . . . . . . * 1 (ex: factorial of 4 is
4 * 3 * 2 * 1 = 24)
○ Test 1: returnFactorial(5) outputs 120
○ Test 2: returnFactorial(6) outputs 720
○ Test 3: returnFactorial(0) outputs 1 
 */
function returnFactorial(num) {
  if (isNaN(num) || num < 0) return "invalid";
  if (num === 0) return 1;
  let product = 1;
  for (let i = num; i > 0; i--) {
    product = product * i;
  }

  return product;
}
console.log("=========");
let fact7 = returnFactorial(7);
let fact6 = returnFactorial(6);
let fact5 = returnFactorial(5);
let fact0 = returnFactorial(0);
console.log(fact7);
console.log(fact6);
console.log(fact5);
console.log(fact0);

/**
 * Question 4 (Meera array)
● A Meera array is defined to be an array containing only numbers as its elements and for
all n values in the array, the value n*2 is not in the array. So [3, 5, -2] is a Meera array
because 3*2, 5*2 or 2*2 are not in the array. But [8, 3, 4] is not a Meera array because
2*4=8 and both 4 and 8 are elements found in the array. Write a function that takes an
array of numbered elements and prints “I am a Meera array” in the console if its array
does NOT contain n and also n*2 as value. Otherwise, the function prints “I am NOT a
Meera array”
○ Test 1: checkMeera([10, 4, 0, 5]) outputs “I am NOT a Meera array” because 5 *
2 is 10
○ Test 2: checkMeera([7, 4, 9]) outputs “I am a Meera array”
○ Test 1: checkMeera([1, -6, 4, -3]) outputs “I am NOT a Meera array” because -3
*2 is -6
 */

function checkMeera(array) {
  if (!Array.isArray(array) || array.length === 0) return "Invalid input";
  for (let elem of array) {
    if (isNaN(elem)) return "Invalid input";
  }

  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] === array[i] * 2 || array[j] === array[i] / 2) {
        return "I am Not a Meera array";
      }
    }
  }

  return "Meera array";
}

let meera = checkMeera([10, 4, 0, 5]);
let meera2 = checkMeera([7, 4, 9]);
let meera3 = checkMeera([1, -6, 4, -3]);
let meera4 = checkMeera([1, -6, 4, "t", -3]);
console.log(meera);
console.log(meera2);
console.log(meera3);
console.log(meera4);

/**
 * Question 5 (Dual array)
● Define a Dual array to be an array where every value occurs exactly twice. For example,
{1, 2, 1, 3, 3, 2} is a dual array.The following arrays are not Dual arrays {2, 5, 2, 5, 5} (5
occurs three times instead of two times) {3, 1, 1, 2, 2} (3 occurs once instead of two
times) Write a function 
 */
function dualArray(array) {
  if (array.length < 2 || !Array.isArray(array))
    return "please,Enter Array length more than 1 ";

  for (let i = 0; i < array.length; i++) {
    let count = 0;
    for (let j = 0; j < array.length; j++) {
      if (array[j] === array[i]) {
        count = count + 1;
      }
    }
    if (count !== 2) return 0;
  }

  return 1;
}
console.log("q5");
let dual = dualArray([3, 1, 1, 2, 2, 3]);
let dual2 = dualArray([2, 5, 2, 5, 5]);
let dual3 = dualArray([1, 2, 1, 3, 3, 2]);
let dual4 = dualArray([1]);
console.log(dual);
console.log(dual2);
console.log(dual3);
console.log(dual4);
console.log("q5");

/**
 * Question 6
● Write a function that takes the number of seconds and returns the digital format clock
time as a string. Time should be counted from 00:00:00.
○ Examples: digitalClock(5025) as "01:23:45" 5025 seconds is 1 hour, 23 mins, 45
secs.
■ digitalClock(61201) as "17:00:01" No AM/PM. 24h format.
■ digitalClock(87000) as "00:10:00" It's 00:10 next day.
 */

function digitalClock(num) {
  if (isNaN(num) || num < 0) return "invalid input";

  let hour = parseInt(num / 3600);
  let minute = parseInt((num - hour * 3600) / 60);
  let second = num - (hour * 3600 + minute * 60);

  let hh = hour >= 10 ? hour : `0${hour}`;
  let mm = minute >= 10 ? minute : `0${minute}`;
  let ss = second >= 10 ? second : `0${second}`;
  if (hour >= 23) return `next day 00:${mm}:${ss}`;

  return `${hh}:${mm}:${ss}`;
}

// console.log(hours);
let hh = digitalClock(7000);
let hh2 = digitalClock(5025);
let hh3 = digitalClock(87000);
console.log(hh);
console.log(hh2);
console.log(hh3);

//OR
console.log("second method");
function digitalClock2(second) {
  if (isNaN(second) || second < 0) return "Invalid";
  let convert = new Date(second * 1000);

  let hh = convert.getUTCHours();
  let mm = convert.getUTCMinutes();
  let ss = convert.getUTCSeconds();
  return `${hh}:${mm}:${ss}`;
}

console.log(digitalClock2(7000));
console.log(digitalClock2(5025));
console.log(digitalClock2(87000));
// let num = 1234;
//  console.log(new Intl.NumberFormat("ar-SY").format(num));

[7, 7, 7];
/**
 * Lucky sevens/ Write a function called lucky_sevens which takes an array of integers and returns true if any three consecutive elements sum to 7.

 */

function luckSeven(array) {
  if (!Array.isArray(array) || array.length < 2) return "invalid";
  for (let i = 1; i < array.length - 1; i++) {
    let sum = array[i] + array[i - 1] + array[i + 1];
    if (sum === 7) {
      return true;
    }
  }

  return false;
}

let arr = [1, 2, 4, 5, 4];
let arr2 = [1, 2, 5, 4, 3, 4, 0, 8];
console.log(luckSeven(arr));
console.log(luckSeven(arr2));

/**
 * /   You will be given an array of several arrays that each contain integers and your goal is to write a function that will sum up all the numbers in all the arrays. For example, if the input is [[3, 2], [1], [4, 12]] then your program should output 22 because3 + 2 + 1 + 4 + 12 = 22.
 */

function sveralArray(array) {
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

console.log(sveralArray([[3, 2], [1], [4, 12]]));

function sum_array_method2(arr) {
  // return (sum = arr.flat(Infinity).reduce((a, b) => a + b));
  return arr.flat(Infinity).reduce((a, b) => a + b, 0);
}

console.log(sum_array_method2([[3, [6], 2], [1], [4, 12]]));

// let firstName = Number(prompt("please Enter first name"));

// alert(typeof firstName);

for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= 5; j++) console.log(`${i} X ${j}=${i * j}`);
}

let text = "hello";
text = text.replace(text, "getu");

console.log(text);

let sum = 0;
// for (let i = 1; i < 6; i++) {
//   if (i ===4) {
//     break;
//   }
//   sum +=i;
// }
let propVal;

while (true) {
  propVal = +prompt("Enter number");
  if (propVal <= 0) {
    break;
  }

  sum += propVal;
}
alert(sum);
