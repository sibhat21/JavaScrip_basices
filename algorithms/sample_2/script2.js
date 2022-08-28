// "use strict";

// alert("your JS file is connected!!");

/*
//Expected value
A. 24 > 3//T
B. 2 < "12"//t
C. 0 == 2//f
D. 2.0 === 2/t
E. 2.0 == "2"/t
F. 2 < "John"/f
G. 2 > "John"/f
H. "2" < "2"/t
I. "2" > "12" /t
J. 1 == 1 || 3 == 2 || 3 == 7/ t
K. 1 == 1 && 2 == 2 && 3 == 7/ f
L. 1 == 1 || 2 == 2 && 3 == 7/ t
M. 1 == true && 0 > true || "31" > "9" || 10 > 5 || !("2" == "two" || 1 == "1")
*/

console.log(24 > 3); //t
console.log(2 < "12"); //t
console.log(0 == 2); //f
console.log(2.0 == "2"); //t
console.log(2 < "Jhon"); //f
console.log(2 > "Jhon"); //f
console.log("2" < "2"); //f
console.log("2" > "12"); //t
console.log(1 == 1 || 3 == 2 || 3 == 7); //t
console.log(1 == 1 && 2 == 2 && 3 == 7); //f
console.log(1 == 1 || (2 == 2 && 3 == 7)); //t
 console.log(
  (1 == true && 0 > true) || "31" > "9" || 10 > 5 || !("2" == "two" || 1 == "1")
);

// dtata type js
//primite and object/
//backtick
// String, num,null, undefied, symbol boolean ,Array,fun obj
let number = 20;
let text = `Write a simple script
  that adds 1 and 2 and
  displays the result on the console `;

console.log(text);
const x1 = 10;
const x2 = 20;
const arr1 = [10, 20, 30, "getu", [2, 3, 6]];

const array1 = new Array(10, 20, 30);
let n = 10;
let x = 3;
let y = n % x;

console.log(arr1[2]);
console.log(arr1[4]);
console.log(arr1.length);
// /*
// Question 3:
// ● Write a simple script that adds 1 and 2 and displays the result on the console
// ● Use variables a, b & c
// ● Use "let" to declare the variables
// ● Use the formula c = a + b
// ● Display the value of c on console */

// let a = 1;
// let b = 2;

// let c = a + b;
// console.log(c);
/**
 * Question 4:
● Create a variable to hold your first name
● Create another variable to hold your last name
● Create a third variable to hold your full name
● Assign the value of your first name and last name to the first two variable
● Use "+" to concatenate your first name and last name to assign the result to your last name's
variable
● Don't forget to include space between your first and last name
● Display the value of your full name on the console
 */

const firstName = "Getu";
const ln = firstName.length;
const lastName = "Safu";

// console.log();

//Number(prompt("Enter fname"));
// const lastName = +prompt("Enter lName");
// window.alert(ln);
// const fullName = fristName + " " + lastName;
// console.log(`The fullName is ${fristName} ${lastName}`);
// const number1 = 13.45;
//  const nub= number1.toFixed(1)
// console.log(nub);

// const num3 = prompt("enter a number");
// alert(num3);

// console.log("2" + 2);
//  console.log(2 + true);

// let x = 3;
// let y = x++;
// console.log(y);

// let arry = [1, 2, 3, 4, 5];
// let array2 = new Array(1, 2, 3, 4)
// console.log(array2)
// console.log(Math.floor(7/3))
//Question2
//1. Which expression returns true?
/**
 A/ ‘1’ === 1
B/ 1 == 1
C/ 1 === 1
D/ B and C from above//Answer


2. What is the value of x in this statement?
let x = (1 == true);
A/ 1
B/ true//Answer
C/ false
D/ undefined

3. What is the value of y from the following statements?
let x = 10;
let y = (x > 5) && (x < 15)
A/ 10
B/ 5
C/ 15
D/ true//Answer

4. What is the value of x from the following statements?
let x = 5;
x += 3;
A/ 3
B/ 8//Answer
C/ 15
D/ 5
5. What is the value of y from the following statements?
let x = 10;
let y = x++;
A/ 10//Answer
B/ 11
C/ 12
D/ 13
6. What is the value of y in the following statements?
let x = 1;
let y = (x !== 2);
A/ 1
B/ 2
C/ false
D/ true//Answer

7. What is the output of (+"2"+2)?// $ b/c +"2" is number
8. What is the output of (7 % 3)?//1
9. What is the output of (2+true)?//3
 */
//Question 3

// let a, b, c;
// a = 1;
// b = 2;
// c = a + b;
// console.log(c);

//Question 4:
// let firstName = "Getu ";
// let lastName = "Safu";
// let fullName = firstName + lastName;
// console.log(fullName);

/**
 * 1. Create an array with any 5 numbers as its elements. Add the first and the last values of the array and print the sum in the console.
 */
const array = [5, 10, 15, 20, 30]; //0,1,2,3,4
const sum = array[0] + array[array.length - 1]; //array.length-1

console.log(sum);
/* 
2. Create an array with any 10 numbers as its elements. Multiply the third element with the last element of the array and print the result in the console.
*/
const array2 = [5, 10, 12, 13, 16, 20, 25, 30, 35, 40];
const product = array2[2] * array2[9];
console.log(product);
/*
3. Create an array with any 15 numbers as its elements. Divide the first element by the last element of the array and print the result in the console.

 */

const array3 = [34, 20, 40, 50, 6, 7, 8, 10, 9, 15, 20, 12, 14, 16, 17];
const divison = array3[0] / array3[array3.length - 1];

console.log(array3.length - 1);

console.log(array3);
//  console.log(divison);
let count = 0;
let arr = [0, "", false, 1, 2, undefined, null, true]; //falsy value
for (let element of arr) {
  if (element) {
    count = count + 1;
  }
}

console.log(count);

function greet(name) {
  console.log(name);
}

const namegreet = greet("Getu");
const randomArray = [];
for (let i = 1; i <= 3; i++) {
  randomArray.push(Math.ceil(Math.random() * 6));
}
console.log(randomArray);

const num = [1, 2, 3, 4];
const num1 = num.splice(2);
console.log(num);


let day = new Date();
let today=day.setDate();
  console.log(today)