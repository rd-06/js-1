/*
entries : returns an array iterator object with key/value pairs
does not mutates original array
entries() visit empty slots as they are undefined  
*/

const arr = ["a", "s", "d", "f"];
const arr2 = arr.entries();

// console.log(iterator.next().value);

for (i of arr2) {
  console.log(i);
}
