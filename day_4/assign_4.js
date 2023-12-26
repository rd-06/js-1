/*
let array = [12, 13, 14, 12, 13, 14, 12, 13, 14, 15, 99, 128];

Task 1 → Write a program to check if the above array contains 14. Returned value must be a boolean.

Task 2 → Write a program to check if every element in the array is above 80 or not. Returned value must be a boolean.
*/

// task 1
const arr = [12, 13, 14, 12, 13, 14, 12, 13, 14, 15, 99, 128];

const contains = arr.includes(14);
console.log(contains);

// task 2
const every = arr.every((el) => {
  return el > 80;
});

console.log(every);
