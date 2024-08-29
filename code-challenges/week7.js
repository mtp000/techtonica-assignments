/* TUESDAY 

//Write a JavaScript function that takes two numbers as input and returns the larger number. 
//Use the ternary operator (condition? valueIfTrue : valueIfFalse) for this task.

function findLargerNumber(a, b) {
  // condition1 ? (condition2 ? Expression1 : Expression2) : Expression3;
  return a !== b ? (a > b ? a : b) : "Numbers are equal";
}

console.log(findLargerNumber(1, 3));
console.log(findLargerNumber(9, 0));
console.log(findLargerNumber(0, 0));
*/


/* WEDNESDAY 
//Write a JavaScript function that takes two arrays as input 
//and returns a new array that contains all elements from both input arrays. 
//Use the spread operator (...) to achieve this.

function combineArrays(arr1, arr2) {
  const arr3 = []; // initialize arr3
  // add all arr1 elements to arr3
  arr3.push(...arr1);
  // add all arr2 elements to arr3\
  arr3.push(...arr2);
  return arr3;
}

numArr = [1, 2, 3];
strArr = [];
console.log(combineArrays(strArr, numArr));
*/


/* THURSDAY */
//Write a JavaScript function that takes an array of numbers as input
//& returns a new array with all duplicates removed
//Use the Set object to achieve this.

//input = arr of nums
//output = new arr, no duplicates
function removeDuplicates(arr) {
  //creat new empty set
  const mySet = new Set;
  //iterator through array, add each element to empty set
  arr.forEach((element) => mySet.add(element));
  return mySet;
}

exArr = [1, 1, 2, 2, 3,];
exArr2 = ['a', 'b', 'b', 'c'];
console.log(removeDuplicates(exArr));
