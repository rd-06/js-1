/*
slice : extracts a section of string and returns a new string. without modifying the orginal string
indexsEnd : excluded
slice(indexStart)
slice(indexStart, indexEnd)
*/

const str =
  "The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?";

console.log(str.slice(21, 22));
console.log(str.slice());
console.log(str.slice(-1));
