/*Question 1
● Define a simple function named myFirst that prints the word "Hello" on the console
○ First define the function
○ Then call the function
   */

function myFirst() {
  console.log("Hello");
}
myFirst();

/* Question 2
● Define a function called mySecond that takes a parameter and prints the parameter on
console
○ Feel free to give any value as a parameter in your function
   */

function mySecond(text) {
  console.log(text);
}
mySecond("JavaScript");
/*
 * Question 3
● Define a function called myThird that takes a parameter and prints the parameter on the
console. But, it uses mySecond function to print the  print the parameter on the console
 */

function myThird(input) {
  mySecond(input);
}

myThird("Evangadi NetWork");
/*
 * Question 4
● Write a function named myFourth that takes an array as a parameter and prints only the first
value of the array on the console. Remember, this question is here to explain the concept of
function delegation in JavaScript.
 */

function myFourth(array) {
  if (array.length === 0) console.log("Please Enter at lest one element");
  // console.log(array[0]); Or
  mySecond(array[0]);
}

const array = [2, 3, 3, "JavaScript"];
myFourth(array);

/**
 * Question 5
● Write a function named myFifth that takes an array with two numbers in it as a parameter
and prints the sum of the two numbers on console
 */
let sum = (a, b) => a + b;
function myFifth(array) {
  if (array.length !== 2 || isNaN(array[0]) || isNaN(array[1]))
    return "Input value should have to be two numbers";

  let sumTwo = sum(array[0], array[1]);
  return sumTwo;
}

let arrayFifth = [20, 3];
console.log(myFifth(arrayFifth));

/**
 * Question 6
● Write a function that takes an integer minutes and converts it to seconds.
 */

function convertMinute(minute) {
  if (isNaN(minute) || minute < 0) return "Please, Enter posetive number";

  return minute * 60;
}

const covertMin = convertMinute(-3);
console.log(covertMin);

/**
 * Question 7
● Create a function that takes a number as a parameter, increments the number by +1 and
returns the result.*/

function incrementByOne(num) {
  if (isNaN(num)) return "please Enter a number";

  return ++num;
}

const increment = incrementByOne(20);
console.log(increment);
/**
 * Question 8
● Write a function that takes the base and height of a triangle and returns its area.
 */

function areaOfTriangle(base, height) {
  if (isNaN(base) || isNaN(height) || base <= 0 || height <= 0)
    return "please,Enter posetive number ";

  let areaOfTriangle = (base * height) / 2;
  return areaOfTriangle;
}

const area = areaOfTriangle(10, 2);
console.log(area);

/**
 * Question 9
● Create a function that returns the total number of legs of all the animals. In this challenge, a
farmer is asking you to tell him how many legs can be counted among all his animals. The
farmer breeds three species (chickens = 2 legs, cows =, 4 legs, pigs = 4 legs,oxes=10 ). Remember:
the farmer wants to know the total number of legs and not the total number of animals.
 */
let multiple = (a, b, c) => a * 2 + (b + c) * 4;

function calcAnimalsLeg(chicken, cow, pig) {
  if (
    isNaN(chicken) ||
    isNaN(cow) ||
    isNaN(pig) ||
    chicken < 0 ||
    cow < 0 ||
    pig < 0
  )
    return "please,Enter posetive numbers";

  chicken = Math.floor(chicken);
  cow = Math.floor(cow);
  pig = parseInt(pig);

  return multiple(chicken, cow, pig);
}

const totallegs = calcAnimalsLeg(3, 4, 4);
console.log(totallegs);

/**
 * Question 10 (not from edabit.com)
● Create a function that takes an array containing only TWO numbers as a parameter and
returns a value that is 3 times the first element of the array
 */
let calcArray = (arr) => {
  if (arr.length !== 2 || isNaN(arr[0]) || isNaN(arr[1]))
    return "Please Enter two numbers";
  return arr[0] * 3;
};
const tripleValue = calcArray([2, 2]);
console.log(tripleValue);

/**
 * Question 11
● Create a function that returns true when num1 is equal to num2; otherwise return false.
 */
let comparsion = (num1, num2) => num1 === num2;
console.log(comparsion("Getu", "Getu"));

/**
 * Question 12
● Create a function that takes an integer and returns true if it's divisible by 100, otherwise
return false
 */
const divisbleBy100 = (num) => {
  if (isNaN(num)) return "please Enter a number";
  return num % 100 === 0;
};
console.log(divisbleBy100(200));

/*Question 13
● Create a function that takes a number as an argument and returns "even" for even numbers
and "odd" for odd numbers*/

const oddEven = (num) => {
  if (isNaN(num)) return "provide only a number";

  return num % 2 === 0 ? "Even" : "Odd";
};
let checkEvenOdd = oddEven(3);
console.log(checkEvenOdd);

/**Q14
 * ● Create a function that returns
○ “Invalid score” if score is above 100 or score is a negative number
○ “Grade A” when score is between 90 and 100 (both 90 and 100 included)
○ “Grade B” when score is between 80 and 89 (both 80 and 89 included)
○ “Grade C” for any score below 79
 */

function gradding(score) {
  if (isNaN(score) || score > 100 || score < 0)
    return `${score} is Invalid input`;

  if (score >= 90) return "Grade A";
  if (score >= 80) return "Grade B";

  return "Grade C";
}

const grade = gradding(99);
console.log(grade);

/**
 * 15. Find the largest of two number
Function `` finds the largest between two number by using "<" , “>” and “=” operator in JavaScript.

Print num1 is the largest if num1>num2.
Print num2 is the largest if num1<num2.
Else print num1 and num2 are equal when num1==num2.

 */

function findLargest(num1, num2) {
  if (isNaN(num1) || isNaN(num2)) return "Enter ony numbers ";

  if (num1 > num2) return `${num1} is the largest `;
  if (num2 > num1) return `${num2} is the largest`;
  return `${num1} and ${num2} are equal`;
}

console.log(findLargest(30, 30));
