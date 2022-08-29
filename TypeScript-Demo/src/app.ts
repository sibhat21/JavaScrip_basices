// export {};
let message = "Well back";
console.log(message);

function doSomeThing() {
  for (var i = 0; i < 5; i++) {
    console.log(i);
  }
  console.log("finally " + i);
}
doSomeThing();

//Basic Types
//type inffering
let a: number;
let b: boolean;
let aa: any; //we can put any(boolea,number,string....)
let c: string;
let e: number[] = [1, 2, 3]; //array of only numbers
let f: string[] = ["a", "b"]; //array of only String
let g: any[] = [1, true, "a"]; //array of any(string,number,boolean....)
//Tuple
let person: [number, string, boolean] = [1, "xx", true]; //we should have put based on left-side infferd type

//Tuple Array
let employe: [number, string][];
employe = [
  [1, "Brad"],
  [2, "John"],
  [3, "Jill"],
]; //Union(type optional(one of we menssioned type));
let pid: string | number;
pid = 22;
pid = "22";
// pid=true//error

//Enum
//if not assign the first element numerical value which by default starts from 0;
enum Direction1 {
  Up,
  Down,
  Left,
  Right,
}
console.log("Enum", Direction1.Down);

//we can assign string
enum Direction2 {
  Up = "Up",
  Down = "Down",
  Left = "Left",
  Right = "Right",
}
console.log("Enum", Direction2.Down);
enum Color {
  Red = 0,
  Green = 1,
  Blue = 5,
  purple = 3,
}
let bacgroundColor = Color.Blue;
console.log("col", Color.Blue);

//Objects
type User = {
  id: number;
  name: String;
};
const user: User = {
  id: 12,
  name: "Getu",
};
//type assersion

let text;
text = "abc";
let endsWithC = (<string>text).endsWith("c");
let alternativeWay = (text as string).endsWith("c");

//function

function addNum(x: number, y: number): Number {
  return x + y;
}
console.log(addNum(10, 30));
//void type
function log(message: string | number): void {
  console.log(message);
}

log("Hello");

//interface which define the the shape of object
interface Point {
  x: Number;
  y: Number;
}
let drawPoint = (point: Point) => {};

let drawPoint2 = (point: { x: number; y: number }) => point.x * point.y;
let val = { x: 10, y: 12 };
let value = drawPoint2(val);
console.log(value);

let id: number = 5;
console.log("ID", id);

interface UserInterface {
  id: number;
  name: string;
  age?: number; //optional (we can use it or ommit age )
  readonly status: "single";
}
const user1: UserInterface = {
  id: 12,
  name: "Safu",
  status: "single", //we cann't modefiy b/c of readonly modifer
};

interface MathFunc {
  (x: number, y: number): number;
}

const add: MathFunc = (a, b) => a + b; //or
const sub: MathFunc = (a: number, b: number):number => a + b;

let sum = add(10, 16);
console.log(sum);
//classes

//protected accesss in this class and extended class only
//privet only in this class;

interface PersonInterface {
  id: number;
  name: String;
  getName(): string;
}
class Person implements PersonInterface {
  id;
  name;
  private age: number;
  constructor(id: number, name: string, age: number) {
    this.id = id;
    this.name = name;
    this.age = age;
  }
  getName() {
    return this.name;
  }
}
//subClass
class Employee extends Person {
  position: string;
  constructor(id: number, name: string, age: number, position: string) {
    super(id, name, age);
    this.position = position;
  }
}
const brad = new Person(1, "Brad Traverry", 355);
const mike = new Person(2, "Mike Jordan", 50);
console.log(brad, mike);

const emp = new Employee(2, "Getu", 34, "Developer");
console.log(emp.getName()); //

//Generics
function getArray(items: any[]): any[] {
  return new Array().concat(items);
  //we can pass any type
} 
let numArray = getArray([1, 2, 3, 4, 5]);
numArray.push(12);
numArray.push('hello');
numArray.push(true)

console.log(numArray);



//T=>type assersion 

function getArray2<T>(items: T[]): T[] {
  return new Array().concat(items);
}
//we should spesify here
let stringArray = getArray2<string>(["Brad", "Bob", "Smith"]);


console.log(stringArray);
