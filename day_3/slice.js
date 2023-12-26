/*
slice : returns shallow copy of portion of an array into new array object from start to last
last Index is exclusive
preserves empty slots.

slice()
slice(start)
slice(start, end)
*/

const letters = ["a", "s", "q", "m", "z"];

console.log(letters.slice(1, 4));
