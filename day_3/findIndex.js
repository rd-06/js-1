/*
findIndex() : returns index of first element that satisfies the condition.
returns -1 if condition not satisfied
  empty slots are preserved and treated as like undefined
*/

const arr = [5, 12, 8, 130, 44];
console.log(
  arr.findIndex((el) => {
    return el > 12;
  })
);
