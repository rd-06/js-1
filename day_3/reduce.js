/*
reduce 
*/

const items = [200, 322, 76, 3253, 5745];

const total = items.reduce((accumulator, currentValue, currentIndex) => {
  return accumulator + currentValue;
},0);

console.log(total);

// flatten arrays of arrays using reduce
const flatten = [
  [0, 1],
  [2, 3],
  [4, 5],
].reduce((accumulator, currentValue) => {
  return accumulator.concat(currentValue, []);
});
console.log(flatten);