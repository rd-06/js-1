/*
indexOf : returns the first index at which a given element can be found in the array, or -1 if it is not present.
The indexOf() method skips empty slots in sparse arrays.
*/

const arr = ["a", "s", "d", "f"];

console.log(arr.indexOf("s"));
const arr2 = [1, , 2, 3, 4, 5]
console.log(arr2.indexOf(3));


// finding all occurence of element
const indices = [];
const array = ["a", "b", "a", "c", "a", "d"];
const element = "a";
let idx = array.indexOf(element);
while (idx !== -1) {
  indices.push(idx);
  idx = array.indexOf(element, idx + 1);
}
console.log(indices);
// [0, 2, 4]
