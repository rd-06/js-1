/*
flatMap : returns new array formed by a callback fnc and flattens the result by depth 1.
*/

// removes negative and replace the odd with even
const arr = [2, -1, 3, -6, 4];
const flattened = arr.flatMap((el) => {
  if (el < 0) return [];
  return el % 2 == 0 ? [el] : [el - 1];
});
console.log(flattened);

/*
------------------------flatMap on sparse arrays 
callbacks wont be called for the empty slots in the array coz of map(), and flat ignores the empty slots
*/

const arr2 = [2, , 3, 6, [9]];
const arr3 = arr2.flatMap((el) => {
  return el * 2;
});
console.log(arr3);