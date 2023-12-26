/*
Instructions: 
Approach - 1: The following task should be achieved using splice/slice methods.
Approach - 2: Create a function that should remove any passed input (eg: "kiwi") given by the user from the array.

const fruits = ["Banana", "Orange", "Apple", "Kiwi"];
// Use array methods to remove "Orange" and "Apple" from fruits.
*/

const prompt = require("prompt-sync")();
// task 1
const fruits = ["Banana", "Orange", "Apple", "Kiwi"];
const remove = function (arr) {
  return arr.splice(1, 1);
};
remove(fruits);
console.log(fruits);

// task 2
const input = prompt("enter : ");
const index = fruits.indexOf(input);
const remove2 = function (arr, index) {
  arr.splice(index, 1);
};
remove2(fruits, index)
console.log(fruits);