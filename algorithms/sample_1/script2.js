/**
 * Question 5
● Write a function that takes an array as an argument and prints the total number of elements
found in the array. Hint: use a property of the Array object to solve this question.
○ Test case 1: Given the array a = [1, "Hello", 8, 44], output should be: 4
○ Test case 2: Given the array a = ["world", 13], output should be: 2
 
  */

// let array = [2, 3, 4, 5, 20, 25];
// // array.push(12, 3, 4, 5);
// //push//pop  at the end
// //shift /unshif

  let array2=array.concat([34, 45]);
array.shift();
console.log(array2);

  array.pop()
  array.pop()
  array.pop()
  array.pop()
 array.forEach( (a)=>console.log(a));

function dispalyArray(array) {
  if (array.length) return "please enter atlest an element";

  return array.length;
}

console.log(dispalyArray());
console.log(dispalyArray(["world", 13]));

/**
 * Question 6
● Write a function that takes an array of numbers as a parameter and logs in the console the sum of
all the numbers in the array.
○ Test case 1: If you give this array, [5, 6, 99, 8, 76, 4, 68, 44], to the function, output
should be: 310 because 5 + 6 + 99 + 8 + 76 + 4 + 68 + 44
○ Test case 2: If you give this array, [3, 0], to the function, output should be: 3 because
3 + 0

 */
function arraySum(arr) {
  if (arr.length === 0) return "Ensert At lest A number";
  let sum = 0;
  for (let elem of arr) {
    if (isNaN(elem)) return "Invalid input";
    else {
      sum = sum + elem;
    }
  }

  return sum;
}

console.log(arraySum([5, 6, 99, 8, 76, 4, 68, 44]));
console.log(arraySum([3, 0]));
/**
 * Question 7
● Write a function that takes an array of all numbers as a parameter, subtracts the total sum of all
odd numbers of the array from the total sum of all even numbers and logs the result in the
console.
○ Test case: If you give these array, [5, 6, 99, 8, 76, 4, 68, 44], to the function, output
should be: 102
■ Sum of odd numbers: 5 + 99 = 104
■ Sum of even numbers: 6 + 8 + 76 + 4 + 68 + 44 = 206
■ Difference between total even and total odd numbers: 206 - 104 = 102
 */

function difAddEven(arr) {
    // return arr.reduce((a, b) => a * b, 1);
  if (arr.length === 0) return "Enter at lest an element";

  for (let xx of arr) {
    if (isNaN(xx)) return "Invalid input";
    if (xx % 2 === 0) {
      evnSum = evnSum + xx;
    } else {
      oddSum = oddSum + xx;
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (isNaN(arr[i])) return "Invalid input";

    if (arr[i] % 2 === 0) {
      evnSum = evnSum + arr[i];
    } else {
      oddSum = oddSum + arr[i];
    }
  }
  return evnSum - oddSum;
}

console.log(difAddEven([20, 30]));
console.log(difAddEven([5, 6, 99, 8, 76, 4, 68, 4]));

/**
 * Question 8
● Write a function that takes an array as a parameter and logs in the console the elements that have
even indexes only. Notice: this question is not asking you to log elements with even value, but
elements that are located on even indexes)
○ Test case 1: If you give this array to the function [5, 6, 99, 8, 76, 4, 68, 44], toutput
should be:
5
99
76
68
○ Test case 2: If you give this array to the function [11, “Sam”, 3, 7, “car”], output should
be:
11
3
car */

function evenIndexed(arr) {
  if (arr.length === 0) console.log("please Enter at lest an element");

  for (let i = 0; i < arr.length; i += 2) {
    //i 0,2,4

    console.log(arr[i]);
  }
}
evenIndexed([5, 6, 99, 8, 76, 4, 68, 44]);
evenIndexed([11, "Sam", 3, 7, "car"]);

/**
 * Questions 9 and 10 are dependent on the sampleArray provided below:
;
Question 9
Write a function that takes the sampleArray as a parameter, removes the last element from the array,
adds a new value of "32" to the array and prints the new array on the console. Hint: use an array method
 */

function sampleArray1(array) {
  if (array.length === 0) console.log("invalid input");
  let poped = array.pop();
  let pushed = array.push(32);

  console.log(array);
}
let sampleArray = [5, 6, 99, 8, 76, 4, 68, 44];
sampleArray1(sampleArray);

/**
 {Question 10
● Write a function that takes the sampleArray as an argument, sorts the array in ascending order
and prints the sorted array on the console
// Use the sort method. Make sure you understand just using the sort() method alphabetically.
You should use this sorting syntax - sort(function(a, b){return a-b});} arr */

function soratArray(array) {
  if (array.length == 0) console.log("invalid input");
  let sorted = array.sort((a, b) => a - b); //Asc//number
  let sorted2 = array.sort((a, b) => b - a); //Dsc

  let sod = array.sort((a, b) => (a > b ? -1 : 0)); //for String Dsc
  let sod2 = array.sort(); //for String  Asc
}
let alpha = ["A", "b", "C", "A"];
soratArray(sampleArray);
soratArray(alpha);

/**
 * The questions below ( questions 11 to 14) are based on the "evangadiClass" object provided below.

 */
// let x = 10;

// const Person = {};
// Person.name = "xx"

// Person.getName = function () { }

let evangadiClass = {
  lengthOfCourse: "1 Month",
  website: "https://www.evangadi.com/",
  isChallenging: false,
  topicsCovered: ["HTML", "CSS", "Media Query", "JavaScript"],

  students: [
    {
      name: "Abebe",
      age: 34,
      sex: "M",
    },
    {
      name: "Kebede",
      age: 44,
      sex: "M",
    },
    {
      name: "Almaz",
      age: 27,
      sex: "F",
    },
    {
      name: "Challa",
      age: 22,
      sex: "M",
    },
    {
      name: "Chaltu",
      age: 19,
      sex: "F",
    },
  ],
  setName: function (name) {
    this.topicsCovered.push(name);
  },
  getArray() {
    return this.students;
  },
  getArray2: () => {
    console.log("this from Arro", this);
  },
};
let keys = Object.keys(evangadiClass);
let value = Object.values(evangadiClass);
let entire = Object.entries(evangadiClass);
console.log("+++++++++++++++++++++++");
console.log(keys);
console.log(value);
console.log(entire);
/**
 * Question 11
● Change the lengthOfCourse property of the object to "5 Month" and print the new object on the
console
○ // Use the dot notation "." to call the property you want to change
*/

evangadiClass.lengthOfCourse = "5 month";

console.log(evangadiClass.lengthOfCourse);

/*
Question 12
● Add "Bootstrap" at the end of the topicsCovered property and print the new object on the
console
○ // Use an array method
*/
evangadiClass.topicsCovered.push("Bootstrap");
console.log(evangadiClass.topicsCovered); //Bot

/*Question 13
● Write a function that takes the "evangadiClass" object as an argument and calculates the average
age of the class. Print the result on the console
*/

function calacAverage(obj) {
  let sum = 0;
  let len = obj.students.length;
  let count = 0;

  for (let i = 0; i < len; i++) {
    sum = sum + obj.students[i].age;
  }

  for (let element of obj.students) {
    sum = sum + element.age;
    count = count + 1;
  }
  let result = sum / len;
  console.log(sum, result);
}
/*
Question 14
● Write a function that takes the "evangadiClass" object as an argument and calculates the
percentage of male students in the class. Print the result on the console
 */

function calcSex(obj) {
  let count = 0;
  let sum = 0;
  for (let element of obj.students) {
    if (element.sex === "M") {
      sum = sum + 1;
    }
    count = count + 1;
  }

  let result = (sum / count) * 100;
  console.log(result);
}

calcSex(evangadiClass);

// console.log("Hello")
// console.log("Hello")
// console.log("Hello")
// console.log("Hello")//for/for of  while   do...while

// for (let i = 0; i <= 10; i++) {
//   if (i === 5) {
//     continue;
//   }
//   if (i === 8) {
//     break;
//   }
//   console.log(i);
// }

// console.log("++++++++++++++");

// let j = 0;
// if (j < 4) {
//   console.log("Hello");
// }
// j = 0 + 1;
// if (j < 4) {
//   console.log("Hello");
// }
// j = 0 + 1 + 1;
// if (j < 4) {
//   console.log("Hello");
// }
// j = 0 + 1 + 1 + 1;
// if (j < 4) {
//   console.log("Hello");
// }
// j = 0 + 1 + 1 + 1 + 1;
// if (j < 4) {
//   console.log("Hello");
// }

// let x = 0;
// while (x<4) {
//   console.log(x);

//   x++;
// }
// let y = 2;

// do {
//   y++;
//   console.log("this is y ", y);
// } while (y < 4);

/**
 * Question 15: Test the divisors of three   3,7
● Write a function that takes 2 parameters: a low and high number. Your goal is to print all
numbers (on the console) between low and high, and for each of these numbers print
whether or not the number is divisible by 3. If the number is divisible by 3, print the word
"div3" directly after the number.
*/

function lowHigh(low, high) {
  if (isNaN(low) || isNaN(high) || low > high) console.log("Invalid");
  for (let i = low; i <= high; i++) {
    // if (i % 3 === 0) {
    //   console.log(i, "div3");
    // } else console.log(i);
    console.log(i % 3 === 0 ? `${i} div3` : i);
  }
}

lowHigh(5, 10);

/*
Question 16: The famous coding interview question (FizzBuzz)
● Write a function that prints in the console the numbers from 1 to 100. But for multiples of
three print “Fizz” instead of the number and for the multiples of five print “Buzz” and for
numbers which are multiples of both three and five print "FizzBuzz".
*/
//1....100
function fizzBuzz() {
  // let Buzz = 5;
  // let FizzBuzz = 3 && 5;
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log(i, "FizzBuzz");
    } else if (i % 3 === 0) {
      console.log(i, "Fizz");
    } else if (i % 5 === 0) {
      console.log(i, "Buzz");
    } else console.log(i);
  }
}
fizzBuzz();

/*
Question 19: Evens number
● An Evens number is an integer whose digits are all even. For example 2426 is an Evens
number but 3224 is not. Write a function named isEvens that prints on the console 1 if its
integer argument is an Evens number. The function prints 0 otherwise.
 */


function isEven(number) {
  if (isNaN(number)) return 0;
  
  let num = number.toString().split("");
  for (let j = 0; j < num.length; j++) {
    if (num[i] % 2 !==0) { 
      return 0;
    }
  }
  //OR

  let newNumber = String(number); //OR
  for (let i = 0; i < newNumber.length; i++) {
    if (newNumber.charAt(i) % 2 !== 0) {
      return 0;
    }
  }
  return 1;
}

function isEven2(num) {
  if (isNaN(num)) return 0;
  let temp = num;
  while (temp) {
    let tempdigt = temp % 10;
    if (tempdigt % 2 !== 0) return 0;
    
    temp = Math.floor(temp / 10);
  }
  return 1;
}

let even = isEven(3224);
console.log(even);

let even2 = isEven2(4224);
console.log(even2);

console.log([1, 2, 3, 4].toString());