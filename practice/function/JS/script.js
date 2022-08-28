const higherOrder = function () {
  console.log("Hello 🍔");
};

// document.body.addEventListener("click", higherOrder);

console.log("Hello world");
function display(x) {
  console.log(x);
}
function display(array) {
  return array.forEach((a) => console.log(a));
}

display([1, 2, 3, 4, 5, 6, 8, 10]);

const Person = {
  name: "getu",
  role: "Student",
  getFullName() {
    
       console.log(this.name + " " + this.role);
  },
};

console.log(Object.keys(Person));
console.log(Object.values(Person));
console.log(Object.entries(Person));

console.log(typeof Person.getFullName);
console.log("==============")
for (let key in Person) {
  if (typeof key !=="function") {
    console.log(key);
  }
}
 Person.getFullName();

// console.log(window);
