
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
  console.log(randomArr(100));



function roundDown(arr, max) {
  const randomNum = arr(max)
  return randomNum.map(Math.floor); 
}
  const roundedDown = roundDown(randomArr, 100);
  console.log(roundedDown);



function roundUp(arr, max) {
  const randomNum = arr(max);
  return randomNum.map(Math.ceil);
}
  const roundedUp = roundUp(randomArr, 100);
  console.log(roundedUp);

/* Wednesday */



/* Thursday */


