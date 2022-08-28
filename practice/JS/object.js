//objects

const Person = {
  firstName: "Getu",
  lastName: "Safu",
  birthYear: 1988,
  job: "Student",
  friends: ["Mechael", "Peter", "Steven"],
  hasDriverLicense: true,
  calcAge() {
    return 2022 - this.birthYear;
  },
};
//adding proporties to object

Person.location = "UsA";
Person["facbook"] = "sibhat@";
console.log(Person);

//traversing properties
const person1 = Person.firstName;
console.log(person1);
console.log(Person["firstName"]); //or
const person2 = Person.birthYear;
console.log(person2);
const person3 = Person.friends[0];
console.log(person3);
console.log(`The Age  would be ${Person.calcAge()}`);
//let
console.log("🏆");
// const interestedIn = prompt("What do you want to know about me");
// alert(Person[interestedIn]);

//spread opperator

const firstNumber = [1, 2, 3];
const secondNumber = [4, 5, 6];
const combin = [...firstNumber, ...secondNumber];

const obj1 = { name: "Getu" };
const obj2 = { job: "Student" };

const obj3 = { ...obj1 };
const mixen = { ...obj1, ...obj2, location: "USA" };
console.log(combin);
console.log(mixen);
console.log(obj1 == obj3);
