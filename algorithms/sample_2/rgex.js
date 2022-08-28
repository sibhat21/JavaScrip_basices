let str1 = "hello getu safu";
let strSearch = str1.search("getu");
let strIndex = str1.indexOf("getu");
console.log(strSearch, strIndex);

let str = "Abebe beso bela!";
let n = str.search(/Beso/i);
let replaced = str.replace("bela", "teta");
console.log(replaced);
console.log(n);

//+++++++++++++++
const paragraph =
  "The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?";

// any character that is not a word character or whitespace
const regex = /[^\w\s]/g;

console.log(paragraph.search(regex));
// expected output: 43

console.log(paragraph[paragraph.search(regex)]);

// expected output: "."
let letter = "Abebe beso bela! 1234";
let matched = letter.match(/1234/i);
let m = str.match(/be/gi); //all be  and caseinsetive

console.log(m);
console.log(matched);

//for test(return Boolean)

let pattern = "Abebe beso bela";
let patt = /ab/i;
let result = patt.test(pattern); //
console.log(result);

function testPatter(res, str) {
  let testString;
  if (res.test(str)) {
    testString = "contain";
  } else {
    testString = "Does not contain";
  }

  return testString;
}
let strr = "Abebe beso bela";
let checked = testPatter(/abe/i, strr);
console.log(checked);
//to check phone patterns

function patternTest(pattern, tst) {
  return pattern.test(tst)
}
let phonePattern =
  /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/;
let testPhone = "+1-234-567-8950";

let checkPhone = patternTest(phonePattern, testPhone);
console.log(checkPhone)
