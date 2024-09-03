
/* Tuesday math methods (ceil, floor, min, max) */
// Generate an array of 10 random integers between 1 and 100. 
// Then, round down half of the numbers to the nearest integer 
// using Math.floor and round up the other half using Math.ceil.  
// Finally, find the minimum and maximum values among the rounded numbers.
function randomArr(max) {
  const arr = [];
  do {
    arr.push(Math.random() * max);
  } while (arr.length < 10);
  return arr;
}
const myNums = randomArr(100);
console.log(myNums);


function roundDown(arr, max) {
  return arr.map(Math.floor); 
}

const roundedDown = roundDown(myNums, 100);
  console.log(roundedDown);



function roundUp(arr, max) {
  return arr.map(Math.ceil);
}
const roundedUp = roundUp(myNums, 100);
  console.log(roundedUp);

/* Wednesday */



/* Thursday */
//Create a function named filterObjects that takes two arguments: an array of objects (data) 
//and a string representing a property name (propertyName). 
//The function should return a new array containing only the objects from the original array 
//whose value for the specified property matches the provided value. 
//If no objects match the criteria, the function should return an empty array.


