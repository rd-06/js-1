/*
find : returns first element in the array that satisfies the condition. if condition not satisfied returns null 
*/

const arr = [5, 12, 34, 31, 65, 76];
console.log(
  arr.find((el) => {
    return el > 10;
  })
);
