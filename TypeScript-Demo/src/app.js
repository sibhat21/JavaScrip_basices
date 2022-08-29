var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// export {};
var message = "Well back";
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
var a;
var b;
var aa; //we can put any(boolea,number,string....)
var c;
var e = [1, 2, 3]; //array of only numbers
var f = ["a", "b"]; //array of only String
var g = [1, true, "a"]; //array of any(string,number,boolean....)
//Tuple
var person = [1, "xx", true]; //we should have put based on left-side infferd type
//Tuple Array
var employe;
employe = [
    [1, "Brad"],
    [2, "John"],
    [3, "Jill"],
]; //Union(type optional(one of we menssioned type));
var pid;
pid = 22;
pid = "22";
// pid=true//error
//Enum
//if not assign the first element numerical value which start from 0 by defualt
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Right"] = 3] = "Right";
})(Direction1 || (Direction1 = {}));
console.log("Enum", Direction1.Down);
//we can assign string
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
console.log("Enum", Direction2.Down);
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 5] = "Blue";
    Color[Color["purple"] = 3] = "purple";
})(Color || (Color = {}));
var bacgroundColor = Color.Blue;
console.log("col", Color.Blue);
var user = {
    id: 12,
    name: "Getu"
};
//type assersion
var text;
text = "abc";
var endsWithC = text.endsWith("c");
var alternativeWay = text.endsWith("c");
//function
function addNum(x, y) {
    return x + y;
}
console.log(addNum(10, 30));
//void type
function log(message) {
    console.log(message);
}
log("Hello");
var drawPoint = function (point) { };
var drawPoint2 = function (point) { return point.x * point.y; };
var val = { x: 10, y: 12 };
var value = drawPoint2(val);
console.log(value);
var id = 5;
console.log("ID", id);
var user1 = {
    id: 12,
    name: "Safu",
    status: "single"
};
var add = function (a, b) { return a + b; }; //or
var sub = function (a, b) { return a + b; };
var sum = add(10, 16);
console.log(sum);
var Person = /** @class */ (function () {
    function Person(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
    Person.prototype.getName = function () {
        return this.name;
    };
    return Person;
}());
//subClass
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(id, name, age, position) {
        var _this = _super.call(this, id, name, age) || this;
        _this.position = position;
        return _this;
    }
    return Employee;
}(Person));
var brad = new Person(1, "Brad Traverry", 355);
var mike = new Person(2, "Mike Jordan", 50);
console.log(brad, mike);
var emp = new Employee(2, "Getu", 34, "Developer");
console.log(emp.getName()); //
//Generics
function getArray(items) {
    return new Array().concat(items);
    //we can pass any type
}
var numArray = getArray([1, 2, 3, 4, 5]);
numArray.push(12);
numArray.push('hello');
numArray.push(true);
console.log(numArray);
//T=>type
function getArray2(items) {
    return new Array().concat(items);
}
//we should spesify here
var stringArray = getArray2(["Brad", "Bob", "Smith"]);
console.log(stringArray);
