/*Q3 Write a JavaScript function "checkExam" that returns the score of an exam.The
function takes an array as it argument, which contains objects with 2 properties. One
property is ‘answer’ holding the student answer and the other is ‘key’ holding the
correct answer. For example
[{answer: "a", key: "a"}, {answer: "c",key: "a"}, {answer: "b", key: "b" }];→4
[{answer: "a", key: "a"}, {answer: "c",key: "a"}, {answer: "", key: "b" }];→-1
*/ 
//Note each answer 4 point and if impty deduct 1

function checkExam(exam){
    let score=0;
    for(let item of exam){
        if(item.answer===item.key)
               score=score+4;
        
        else if(item.answer==='')
            score=score-1;


        else 
                score=score-4;
             
            }

            return score;
}

let exam=[{answer: "a", key: "a"}, {answer: "c",key: "a"}, {answer: "", key: "b" }]
let check=checkExam(exam)
console.log(check);

/*Q4 5. [4] a. Write a function, absValue, that map can use to return a new array with the
absolute value of each element. Below is an example usage*
let array =[-10, 10, 20, -20, -10, 30]
let returnVal= array.map(absValue);
console.log(returnVal); //logs [10, 10, 20, 20, 10, 30]
*/

function absValue(value){
    return value.map(item=>Math.abs(item))

}

console.log(absValue([-10, 10, 20, -20, -10, 30]))



/**
 * b. [4] Write a second function, power, that map can use to return a new array with
each element raised to the value of the exponent. Hint: This involves a closure to
account for the exponent since map will only provide the number argument. Your
‘power’ must return a function for use by map.
let array = [-1, 1, 2, -2, -1, 3]
let returnVal = array.map(power(3));
console.log(returnVal); //logs [-1, 1, 8, -8, -1, 27]

 */

let array = [-1, 1, 2, -2, -1, 3]
let returnVal = array.map(power(3));
console.log(returnVal); //logs [-1, 1, 8, -8, -1, 27]

function power(exponent) {
  return function(value) {
    return Math.pow(value,exponent)
  }
}