const booked = [];
const createBooking = function (flightNum, numPassenger, price) {
  const booking = {
    flightNum,
    numPassenger,
    price,
  };
  booked.push(booking);
};

createBooking("LH123", 23, 50);
createBooking("LH124", 40, 60);
createBooking("LH103", 35, 55);
console.log(booked);

//   console.log(i)
// }
//function returning/taking a function is  called hiegher order function
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const arrow = (greet) => (item) => console.log(greet, item);

let greetHey = greet("hey");
greetHey("Getu");
greetHey("Safu");

//OR
greet("Hello")("JavaScript");

arrow("Higher")("order");

function power(num) {
  return function (pow) {
    return num ** pow;
  };
}
const powersult = power(4)(4);
console.log(powersult);

//Or
let result = power(2);
let result1 = result(3);
console.log(result1);

//IIFE=>Imeidatly  Invoke  function Expression
(function () {
  console.log("This will never run again");
})();
// arow function
(() => console.log("This will Also never run again"))();

let text = "what IS the best of GOOD food";
let hidenletter = "";
for (let i = 0; i < text.length; i++) {
  let hiden = text.charAt(i);
  if (hiden == hiden.toLowerCase()) {
    hidenletter = hidenletter + hiden;
  }
}
console.log(hidenletter);

let array = [2, 3, 50, 1, 60, 11];
let mxm = Math.max(...array);
let mim = Math.min(...array);
let reducmax = array.reduce((a, b) => (a > b ? a : b));
let reducmin = array.reduce((a, b) => (a < b ? a : b));
let sorted=array.sort((a,b)=>a-b)
console.log(mxm, mim, reducmax, reducmin);
console.log(array)
console.log(sorted[0])
