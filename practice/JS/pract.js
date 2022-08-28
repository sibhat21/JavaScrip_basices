function calcHumanAge(array) {
  return array.map((age) => (age <= 2 ? age * 2 : age * 4));
}


let dogAge = [2, 1, 3, 1, 5, 6, 7];

console.log(calcHumanAge(dogAge))