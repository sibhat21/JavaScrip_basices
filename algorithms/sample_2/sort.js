// Bubble sort Implementation using Javascript

// Creating the bblSort function

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function bblSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length - i; j++) {
      if (arr[j - 1] > arr[j]) {
        //         let temp = arr[j];
        //         arr[j] = arr[j - 1];
        //         arr[j - 1] = temp;
        swap(arr, j - 1, j);
      }
    }
  }
  return arr;
}

var arr = [234, 43, 55, 63, 5, 6, 235, 547];

// Now pass this array to the bubble Sort() function
console.log(bblSort(arr));

//insertion sorting
function insertionSort(input) {
  for (let i = 1; i < input.length; i++) {
    let current = input[i];
    let j = i - 1;
    while (j >= 0 && current < input[j]) {
      input[j + 1] = input[j];
      j--;
    }
    input[j + 1] = current;
  }
  return input;
}

let arr3 = [20, 3, 10, 4, 15, 0];
let insertionsort = insertionSort(arr3);
console.log(insertionsort);

// selection sorting
function selectionSort(inputArr) {
  let n = inputArr.length;

  for (let i = 0; i < n; i++) {
    // Finding the smallest number in the subarray
    let min = i;
    for (let j = i + 1; j < n; j++) {
      if (inputArr[j] < inputArr[min]) {
        min = j;
      }
    }
    if (min != i) {
      // Swapping the elements
      //       let tmp = inputArr[i];
      //       inputArr[i] = inputArr[min];
      //               inputArr[min] = tmp;
      swap(inputArr, i, min);
    }
  }
  return inputArr;
}

console.log(selectionSort([10, 25, 2, 4, 1, 0]));
