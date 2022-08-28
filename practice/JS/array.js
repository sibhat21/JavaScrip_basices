//Array Operations
const veges = ["Apple", "Orange", "Banana"];

//To add and remove at the  front unshift and shift method

//adding and removing from end push and pop respectivly

const pushed = "cabagge";
veges.push(pushed);
console.log(veges);

const poped = veges.pop();
console.log(poped);

let unShifed = veges.unshift("Peach");
console.log(veges);
let shifted = veges.shift();
console.log(veges);

const array = [1, 2, 3, 4, [10, 20, 30]];
array[0] = 10;
console.log(array);
console.log(array[0]);
console.log(array[1]);
console.log(array[2]);
console.log(array[3]);
console.log(array[4][1]);

// const index = prompt("Please enter correct index");
// alert(array[index]);
//loops
let dice = Math.trunc(Math.random() * 6) + 1;
while (dice !== 6) {
          console.log(`Random dice:${dice}`);
          dice = Math.trunc(Math.random() * 6) + 1;
}


for (let i = 0; i < 5; i++){
          console.log(i);
}
console.log(i)
