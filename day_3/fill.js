/*
fill : changes all the elements in the array with static value from start(default 0) to end index (exclusive).
    returns modified array

fill(value)
fill(value, start)
fill(value, start, end)
*/

const arr = [43, 1, 5, 7, 1, 7, 10];
console.log(arr.fill(9, 2, 5));

console.log(arr);

const arr2 = ['a', 's', 'd', 'f']
console.log(arr2.fill(1));