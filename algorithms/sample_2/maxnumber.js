//Q1 about let,cost and var
//Q2 the out put of
function display() {
  x = 20;
  console.log(x);

  var x; //let x,const x
}
//display();
//Q3
const obj = {
  name: "nam1",
  display: function () {
    console.log(this.name);
  },
};
const obj1 = {
  name: "abccccccccc",
  display: () => {
    console.log(this);
  },
};
obj.display.call(obj1); //out put
//Q4 sequential output

console.log("a");

setTimeout(() => {
  console.log("setTimeout");
}, 0);

new Promise((resolve, reject) => {
  resolve();
}).then((result) => console.log("Promise"));
console.log("b");
//Q5

//combine them

// const arrya1 = [1, 2, 3];
// const array2 = [5, 6, 7];
// console.log("===========");
// const obj3 = {
//   name: "name",
//   display: () => {
//     console.log(this.name);
//   },
// };
// obj3.display();
// defin,about react
//dif b/n react and Angular
//about hook
//state
//A parent b and c are chiled in react then how they relate
//usability of Key in react

let number = 100;
console.log(number.toString().length);

const Person = {
  name: "helloooooo",
  age: 34,

  getAge: () => {
    console.log(this.age);
  },
};
console.log("====================");
Person.getAge();

const sum = () => {
  console.log(this);
};
sum();
const a = [];
for (var i of ["a", "b", "c"]) {
  a.push(() => i);
}

for (const i of [1, 2, 3]) {
  a.push(() => i);
}

let ab = a.map((x) => x());
console.log(ab);
//undsorted array,then sort and display the maximum difference in consicative input

function calMax(array) {
  if (array.length === 0) return 0;
  array.sort((a, b) => a - b);

  let maxnum = 0;
  for (let i = 1; i < array.length; i++) {
    let dif = array[i] - array[i - 1];
    let maxdif = Math.max(dif, maxnum);
    maxnum = maxdif;
  }
  return ` sorted array :${array} maxdife ${maxnum}`;
}

console.log(calMax([10, 5, 7, 12, 11, 8, 0]));
