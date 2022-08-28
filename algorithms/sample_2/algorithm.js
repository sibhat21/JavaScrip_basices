//program to check leap year
function checkLeapYear(year) {
  //three conditions to find out the leap year
  if ((year % 4 == 0 && year % 100 !== 0) || year % 400 == 0) {
    console.log(year + " is a leap year");
  } else {
    console.log(year + " is not a leap year");
  }
}

// take input

//Or

// program to check leap year
function checkLeapYear(year) {
  const leap = new Date(year, 1, 29).getDate() === 29;
  if (leap) {
    console.log(year + " is a leap year");
  } else {
    console.log(year + " is not a leap year");
  }
}

// take input
const year1 = 100;

checkLeapYear(year1);

let text = "Getu";
if (typeof text == "string") {
  console.log(text);
}

function add(a, b) {
  if (isNaN(a) || isNaN(b)) return "Please Enter  numbres only";

  let sum = parseFloat(a) + parseFloat(b);
  return sum;
}

let sum = add( 10.5, 20.7);
  console.log(sum)
