/*
includes : checks whether a string is found in another string.
case sensitive
returns : true/false

includes(searchString)
includes(searchString, position)
*/

const str =
  "The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?";

console.log(str.includes("fox dog")); // false
console.log(str.includes('fox'));     // true
console.log(str.includes('fox jumps')); // true