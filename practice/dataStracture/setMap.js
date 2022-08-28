//Set it is a data Starcture and which not allow duplication
//it also contan mixed data taype
//it is array forms
//daynamic size
//it ignore when the value alleardy exist
// Set is not indexed value but iterate for of iteration

const orderset = new Set([100, 30, 30, 40]);
// to  iterate the  value
for (let x of orderset) console.log(x);
//to check we showld use size
console.log(orderset.size);
//we can first initalied  then add value
const ordered = new Set();
ordered.add("getu");
ordered.add("bbb");

//to delete all one we use 'Clear'function
let xx = ordered.clear();
console.log("xxxxxxx", ordered);

//to check  contain element
let checkd = orderset.has(30); //return boolean

//to add new Element we use add key words
orderset.add("Getu");
console.log(orderset);

// to remove we use delete key words
orderset.delete(100);
console.log(orderset);

//we can put spread operator
const arrayx = [2, 3, "Getu", "Safu", 1, 2, 3, "Getu"];
const setData = [...new Set(arrayx)]; //which is set array form
const setData2 = new Set(arrayx); //object form
console.log(setData.length);
console.log(setData2.size);
for (let key of setData2) {
  console.log(key);
}

//we can put setring and wichs count only unique letter
console.log(new Set("hellowwwww").size); //5

//Map which is key value pair and the key  unique and any type
//  value can repetative but can't key
//to add value we use "set" key words
//when the key is repeted then which is over ridded

let rest1 = new Map();
rest1.set("key1", "getu");
rest1.set("key2", "Safu");
rest1.set(1, "Student");
rest1.set(true, "Student2");
console.log(rest1); //to access ol value

//to get single  value  we can accessing by using  'get' method
let firstvalue = rest1.get("key1");
let trueKey = rest1.get(true);

console.log(firstvalue);
console.log(trueKey);

//to check the value exist or not we use 'has' methods
// we can pass either key with value or key only but cant value only
//

let checkvalue = rest1.has("key1");
console.log(checkvalue);

//to remove we use delete and pass key
//to remove all once we use clear key wordS
//to check size,we use 'size'

const question = new Map([
  ["quest", "whats is the best pragraming laguage"],
  [1, "JavaScript"],
  [2, "Java"],
  [true, "Correct 🥑"],
]);
question.set("keyx", "Mapping");
console.log(question);

//to Iterate

for (let [key, value] of question) {
  console.log(key, value); //key and value
}

console.log("++++++++++++++");
for (let key of question) {
  console.log(" what ?", key); //key with onject
}
console.log("=================");
console.log(...question);

//convert map to array
console.log([...question]);
let covermapkeytoArray = [...question.key()];
let coverMapvalueToSet = [...new Set(question.values)];//

console.log("hhhhhhhhhhhhhhhhhh");
console.log(question.entries()); //both key with value
console.log("==============");
console.log(question.keys()); //to get all keys
console.log("----------------");
console.log(question.values()); //to get all value only

//to change
