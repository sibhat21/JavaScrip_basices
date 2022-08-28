/**
 * Question 1
● Write a function that prints the first 10 integers on the console starting from the number 1 using
the JavaScript for loop.


*/
function printer(x) {
  console.log(x);
}

function print() {
  for (let i = 1; i <= 10; i++) printer(i);
}

print();

/*
Question 2
● Write a function that takes a single number as an argument and prints the next 5 numbers in the
console. Note: each output should be displayed on a new line.
○ Test case: If you give 7 to the function, output should look like this:
8
9
10
11
12
 */

function display(num) {
  if (isNaN(num)) printer("Enter only  a number");
  else {
    let len = num + 5;
    for (let i = num + 1; i <= len; i++) {
      printer(i);
    }
  }
}

display(7);

/**
 * Question 3
● Write a function that takes a single number and prints the sum of the next 10 numbers after the
given number.
○ Test case: If you give 7 to the function, output should be: 125 - because (8 + 9 + 10+
11+ 12+ 13+ 14+ 15+ 16+ 17 = 125)
*/

function displaySum(num) {
  if (isNaN(num)) return "Please Enter  a number ";

  let sum = 0;
  let limit = num + 10;
  for (let j = num + 1; j <= limit; j++) {
    sum = sum + j;
  }
  return sum;
}

console.log(displaySum(7));

/*
Question 4
● Write a function that takes an array as an argument and prints every element of the array on the
console.
○ Test case: given the array a = [1, "Hello", 8, 44], output should look like this:
1
Hello
8
44
    */

function displayArray(arr) {
  if (arr.length === 0) printer("Please Enter at lest one element");

  arr.forEach((element) => {
    printer(element);
  });
}

displayArray([1, 2, 3, 4, "text"]);

/*
  Question 5
● Write a function that takes an array as an argument and prints the total number of elements
found in the array. Hint: use a property of the Array object to solve this question.
○ Test case 1: Given the array a = [1, "Hello", 8, 44], output should be: 4
○ Test case 2: Given the array a = ["world", 13], output should be: 2
 
  */

function arrayLength(arr) {
  printer(arr.length);
}

arrayLength([1, "Hello", 8, 44]);
arrayLength(["world", 13]);

/**
 * Question 6
● Write a function that takes an array of numbers as a parameter and logs in the console the sum of
all the numbers in the array.
○ Test case 1: If you give this array, [5, 6, 99, 8, 76, 4, 68, 44], to the function, output
should be: 310 because 5 + 6 + 99 + 8 + 76 + 4 + 68 + 44
○ Test case 2: If you give this array, [3, 0], to the function, output should be: 3 because
3 + 0=>3

 */

function arraySum(array) {
  if (array.length === 0) return "Ensert at lest a number";
  // return array.reduce((acc, curr) => acc + curr, 0);

  let sum = 0;
  for (let elem of array) {
    if (isNaN(elem)) return "Invalid input";
    else sum = sum + elem;
  }

  // for (let j = 0; j < array.length; j++) {
  //   if (isNaN(array[j])) return "Invalid input";
  //   else sum = sum + array[j];
  // }
  return sum;
}
console.log("Q6");

printer(arraySum([5, 6, 99, 8, 76, 4, 68, 44]));
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

function oddEvenDif(array) {
  if (array.length === 0 || !Array.isArray(array))
    return "Enter at lest an element";
  let evenSum = 0;
  let oddSum = 0;
  for (let element of array) {
    if (typeof element == "number") return "Invalid input";
    if (element % 2 === 0) {
      evenSum = evenSum + element;
    } else {
      oddSum = oddSum + element;
    }
  }

  return evenSum - oddSum;
}

console.log(oddEvenDif([5, 6, 99, 8, 76, 4, 68, 44]));

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
car

 */

function evenEndexedValue(arr) {
  if (arr.length === 0) printer("Enter at lest one value");

  for (let i = 0; i < arr.length; i += 2) {
    printer(arr[i]);
  }
}

evenEndexedValue([5, 6, 99, 8, 76, 4, 68, 44]);
evenEndexedValue([11, "Sam", 3, 7, "car"]);

/**
 * Questions 9 and 10 are dependent on the sampleArray provided below:
let sampleArray = [5, 6, 99, 8, 76, 4, 68, 44];
Question 9
Write a function that takes the sampleArray as a parameter, removes the last element from the array,
adds a new value of "32" to the array and prints the new array on the console. Hint: use an array method
 */
function sample9(arr) {
  if (arr.length === 0) console.log("Please Eneter at lest one element");
  let poped = arr.pop();
  let pushed = arr.push(32);
  printer(arr);
}

let sampleArray = [5, 6, 99, 8, 76, 4, 68, 44];

sample9(sampleArray);

/**
 {Question 10
● Write a function that takes the sampleArray as an argument, sorts the array in ascending order
and prints the sorted array on the console
// Use the sort method. Make sure you understand just using the sort() method alphabetically.
You should use this sorting syntax - sort(function(a, b){return a-b});} arr 
 */ let sampleArray10 = [5, 6, 99, 8, 76, 4, 68, 44];

function sample10(arr) {
  if (arr.length < 2) console.lo("Invalid input");
  let sorted = arr.sort((a, b) => a - b);
  printer(sorted);
}
sample10(sampleArray10);
/**
 * The questions below ( questions 11 to 14) are based on the "evangadiClass" object provided below.

 */
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
};
/**
 * Question 11
● Change the lengthOfCourse property of the object to "5 Month" and print the new object on the
console
○ // Use the dot notation "." to call the property you want to change
*/

evangadiClass.lengthOfCourse = "5 Month";
let allavlue = Object.values(evangadiClass);
printer(allavlue);

/*
Question 12
● Add "Bootstrap" at the end of the topicsCovered property and print the new object on the
console
○ // Use an array method
*/

evangadiClass.topicsCovered.push("Boostrap");
let element = evangadiClass.topicsCovered;
printer(element);

/*t


Question 13
● Write a function that takes the "evangadiClass" object as an argument and calculates the average
age of the class. Print the result on the console
*/

function evanClass(obj) {
  let sum = 0;
  let len = obj.students.length;
  for (let element of obj.students) {
    sum = sum + element.age;
  }

  let result = sum / len;

  printer(result);
}

evanClass(evangadiClass);
/*
Question 14
● Write a function that takes the "evangadiClass" object as an argument and calculates the
percentage of male students in the class. Print the result on the console
 */

function clacPercentage(obj) {
  let count = 0;
  let len = obj.students.length;
  for (let element of obj.students) {
    if (element.sex === "M") {
      count = count + 1;
    }
  }
  let persent = (count / len) * 100;
  printer(persent);
}

clacPercentage(evangadiClass);
/**
 * Question 15: Test the divisors of three
● Write a function that takes 2 parameters: a low and high number. Your goal is to print all
numbers (on the console) between low and high, and for each of these numbers print
whether or not the number is divisible by 3. If the number is divisible by 3, print the word
"div3" directly after the number.
*/
function lowhigh(low, high) {
  if (isNaN(low) || isNaN(high) || low >= high) console.log("Invalid input");
  for (let index = low; index <= high; index++) {
    if (index % 3 == 0) {
      console.log(`${index} is divsible by 3`);
    }
  }
}
lowhigh(2, 10);
/*
Question 16: The famous coding interview question (FizzBuzz)
● Write a function that prints in the console the numbers from 1 to 100. But for multiples of
three print “Fizz” instead of the number and for the multiples of five print “Buzz” and for
numbers which are multiples of both three and five print "FizzBuzz".
*/

function fizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) printer("FizzBuzz");
    if (i % 3 === 0) printer("Fizz");

    if (i % 5 === 0) printer("Buzz");
  }
}
//fizzBuzz();
/*
Question 19: Evens number
● An Evens number is an integer whose digits are all even. For example 2426 is an Evens
number but 3224 is not. Write a function named isEvens that prints on the console 1 if its
integer argument is an Evens number. The function prints 0 otherwise.
 */

function isEven(num) {
  if (isNaN(num)) return 0;
  let tempdigit = num;
  while (tempdigit) {
    let temp = tempdigit % 10;
    if (temp % 2 !== 0) return 0;
    tempdigit = Math.floor(tempdigit / 10);
  }
  return 1;
}

console.log(isEven(0));

// const arrtext = ["A", "C", "F", "A", "D"];
// // const sorted = arrtext.sort((a,b)=>a>b ?-1:0);//Dsc asc
// const sorted2 = arrtext.sort(); //Dsc asc

// // console.log(sorted);
// console.log(sorted2);

// const array1 = [3, 2, -4, 5, 1, 1];
// let sortAray = array1.sort((a, b) => (a > b ? -1 : 0)); //Dsc
// console.log(array1);
