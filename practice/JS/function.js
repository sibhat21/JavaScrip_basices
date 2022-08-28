const juice = processer(3, 2);
console.log(juice);
function processer(apple, orange) {
  let juice = `This juice made by ${apple} apples  and ${orange} oranges`;
  return juice;
}

const calcAge = (birthyear) => 2037 - birthyear;
console.log(calcAge(1992));

const triple = (a) => a * 3;

function calcArray(arr) {
  let tripleArray = [];
  for (let elem of arr) {
    tripleArray.push(triple(elem));
  }

  return tripleArray;
}

let array = [2, 3, 4, 5];
const arrayTriple = calcArray(array);
console.log(arrayTriple);
// calculate total Bills

const calcBill = (bill) =>
  bill >= 20 && bill <= 300 ? bill * 0.15 : bill * 0.2;

function calculateBill(arr) {
  const tipBill = [];
  for (let amount of arr) {
    let totalBill = calcBill(amount) + amount;
    tipBill.push(totalBill);
  }

  return tipBill;
}

const bills = [30, 40, 200, 400, 500];
const tipCollection = calculateBill(bills);
console.log(tipCollection);
