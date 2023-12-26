/*
Write a JavaScript function that accepts a string as a parameter and:

1. Converts the first letter of string in upper case

2. Remove any whitespaces from the string start or the end

Example
For "this is Test "; Print "This is Test"
For "   hello a"; Print "Hello a"
Input: str
Output: Converts the first letter of string in upper case and remove spaces
Must only use string methods for the activity which may include:

charAt
slice
concat
*/

// using charAt, slice, concat, toUpperCase
const prompt = require("prompt-sync")();
const task = (str) => {
  let indexStart = 0;
  let indexEnd = str.length + 1;
  while (str.charAt(indexStart) == " ") {
    indexStart++;
  }
  while (str.charAt(indexEnd) == " ") {
    indexEnd--;
  }
  const strTrim = str.slice(indexStart, indexEnd);
  const first = strTrim.charAt(0).toUpperCase();
  const strFinal = first.concat(strTrim.slice(1));
  console.log(strFinal);
};
task(prompt("enter : "));

// using charAt, slice, concat, trim, toUpperCase
const taskO = (str) => {
  const strTrim = str.trim();
  const first = strTrim.charAt(0).toUpperCase();
  const strFinal = first.concat(strTrim.slice(1));
  console.log(strFinal);
};

taskO(prompt("enter : "));
