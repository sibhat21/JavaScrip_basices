//  Max of Two inputs

function max(a, b) {
  return a > b ? a : b;
}
console.log(max(30, 20));

//landscape or portrait
function isLandscape(width, height) {
  return width > height;
}
console.log(isLandscape(5, 10));

//FizzBuzz=> passing a input but return String or  ainput
//a input divisible by 3=>Fizz
// a input Divisible by 5>Buzz
// a input divisible by both 3 && 5 is FizzBuzz
// else return a input
//if NaN return not ainput

function fizzbuzz(input) {
  if (typeof input !== "number") return "Not a Number";

  if (input % 3 === 0 && input % 5 === 0) return "FizzBuzz";

  if (input % 3 === 0) return "Fizz";

  if (input % 5 === 0) return "Buzz";

  return input;
}

console.log(fizzbuzz("xx"));
//Demerit  Poit
// Speed limit=70;
// every 5  points apove speed limit=>got 1 point

function checkSpeed(speed) {
  let speedLimt = 70;
  let kmPerPoint = 5;
  let speedPoint = (speed - speedLimt) / kmPerPoint;
  let result = Math.floor(speedPoint);
  if (result <= 0) return "Ok!";
  if (result >= 10) return "suspended";

  return result;
}

console.log(checkSpeed(79));

//Even odd
//shows in a given limit odd  and  even

function showNumbers(limit) {
  for (let i = 0; i <= limit; i++) {
    let message = i % 2 == 0 ? "EVEN" : "ODD";
    console.log(i, message);
  }
}
showNumbers(7);

//count Truthy value

function countTruthy(array) {
  let count = 0;

  for (let element of array) if (element) count++;

  return count;
}

const array = [NaN, undefined, 1, 2, 3, 0, false, null];
console.log(countTruthy(array)); //3

//show  String properties

function showProperties(obj) {
  for (let key in obj) {
    if (typeof obj[key] == "string") console.log(key, obj[key]);
  }
}

const movie = {
  title: "a",
  releaseYear: 2018,
  rating: 5,
  director: "b",
};

showProperties(movie);

//sum of Multiples of 3 and 5

function sum(limit) {
  let sum = 0;

  for (let i = 0; i <= limit; i++) if (i % 3 === 0 || i % 5 === 0) sum += i;

  return sum;
}

console.log(sum(10));

//calculate grade mark
// 1-59:F
//60-69:D
//70-79:C
//80-89:B
//90-100:A

function calculateAverage(array) {
  let sum = 0;

  for (let grade of array) sum += grade;

  return sum / array.length;
}

function calculateGrade(mark) {
  let grade = calculateAverage(mark);

  if (grade >= 90) return "A";
  if (grade >= 80) return "B";
  if (grade >= 70) return "C";
  if (grade >= 60) return "D";

  return "F";
}

let mark = [90, 95, 80];
console.log(calculateGrade(mark));

//Show Stars in A given limit

function showStars(rows) {
  for (let i = 1; i <= rows; i++) {
    let pattern = "";
    for (let j = 0; j < i; j++) {
      pattern += "*";
    }
    console.log(pattern);
  }
}

showStars(5);

//prime numbers
//show all prime number at limite
// 2,3  7 11

function isPrime(number) {
  for (let factor = 2; factor < number; factor++)
    if (number % factor === 0) return false;

  return true;
}

function findPrime(limit) {
  for (let number = 2; number <= limit; number++)
    if (isPrime(number)) console.log(number);
}

findPrime(10);

//check a number is palandirom or not

function palandirom(number) {
  let temp = number;
  let reverse = 0;
  while (temp != 0) {
    reverse = reverse * 10 + (temp % 10);
    temp =parseInt(temp / 10);
  }

  return reverse === number;
}

function palandiromString(text) {
  let len = text.length;
  for (let i = 0; i < len / 2; i++) {
    if (text[i] !== text[len - 1 - i]) {
      return ` ${text} is not a Palandirom`;
    }
  }

  return `${text}  is a Palandrom `;
}

console.log(palandirom(121));

console.log(palandiromString("mom"));
