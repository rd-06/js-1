/*
some : 
will not run its predicate on empty slots
*/

const arr = [1, 2, 4, 5, 6, 8, 9];

const even = arr.some((el) => {
  return el % 2;
});

console.log(even);

const arrLike = {
  a: 1,
  b: 2,
  c: 3,
};
