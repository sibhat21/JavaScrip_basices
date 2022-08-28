// const now = new Date();
// console.log(now)
// console.log(new Date('Aug 02 2020 18:05:41'));
let date = new Date(3 * 24 * 60 * 60 * 1000);
console.log(" Day", date);

function digitalday(second) {
  if (isNaN(second) || second < 0) return "Invalid";
  let coversion = new Date(second * 1000);
  let hh = coversion.getUTCHours();
  let mm = coversion.getUTCMinutes();
  let ss = coversion.getUTCSeconds();
  return `${hh}:${mm}:${ss}`;
}

console.log(digitalday(7000));
console.log(digitalday(5025));
console.log(digitalday(87000));
console.log(new Date(20 * 1000).getHours());

const ingrendients = ["olives", "spinach"];

const timerId = setTimeout(
  (ing1, ing2) => console.log(`Here is your pizza with ${ing1} and ${ing2}`),
  3000,
  ...ingrendients
);
console.log("wating...");

// if (ingrendients.includes("spinach")) {
//   clearTimeout(timerId);
// }

//counter
// let time = 100;
// let timeId = setInterval(function () {
//   let t = time--;
//   console.log(t);
// }, 1000);

// if (time ===0) {
//   clearInterval(timeId);
// }
