/*
The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
*/

const arr = [4, 2, 6, 2, 8, 1, 10];

const arr2 = arr.map((el, index) => {
  return el * 2;
});

console.log(arr2);

// A sparse array remains sparse after map(). The indices of empty slots are still empty in the returned array, and the callback function won't be called on them.