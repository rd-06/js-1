/*
values : returns new array iterable object that iterates the value of each index in arr
*/

const arr = ["a", "s", "d", "f"];
const iterable = arr.values();

for (const value of iterable) {
  console.log(value);
}
