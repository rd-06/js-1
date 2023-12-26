/*
findLast() : iterates the array in reverse and returns the value of first element which satisfies the condition. 
    returns undefined, if cond. not satisfied
*/

// ???????????????????????
const arr = [5, 12, 8, 130, 44];
const ans = arr.findLast((el) => {
  return el > 12;
});
console.log(ans);
