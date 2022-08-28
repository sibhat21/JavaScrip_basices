//what is  temp amplitude?
//Ans :the differnce  b/n max && min
// how we compute max and min temprature?

const temprature = [3, -2, -6, -1, 9, 13, 17, 15, 14, 9, 5];
//Q1 how can we ignore error/
//Q2  find Max and min
//Q3 find the differnce b/n max and min(amplitude)

// function maxValue(arr) {
//   return arr.reduce((acc, curr) => (acc > curr ? acc : curr));
// }
// function minValue(arr) {
//   return Math.min(...arr);
// }

function amplitude(arr) {
  let maxValue = Math.abs(Math.max(...arr));
  let minValue = Math.abs(Math.min(...arr));
  const differnce = maxValue - minValue;
  return `minValue ${minValue} 
          maxvalue ${maxValue}  and 
          Amplitude: ${differnce}`;
}

// let max = maxValue(temprature);
// console.log(max);
// let min = minValue(temprature);
// console.log(min);

const temp = amplitude(temprature);
console.log(temp);
