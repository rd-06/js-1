/*
endsWith : checks whether a str ends with the character of specified string.
returns : true/false
endsWith(searchString)
endsWith(searchString, endPosition)
*/

const str =
  "The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy";

console.log(str.endsWith("dog"));
console.log(str.endsWith(""));
console.log(str.endsWith("lazy"));
console.log(str.endsWith(" "));

const str2 = "hello there !";
console.log(str2.endsWith("there", 11));
