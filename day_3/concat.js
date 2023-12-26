/* 
concat : returns shallow copy
        preserves empty slots if any of the source arrays is sparse.

*/

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = arr1.concat(arr2);
console.log(arr3);

/*
-----------concatenating arrays like objects with Symbol.isConcatSpreadable 
concat does not treat all array-like objects as arrays by default — only if Symbol.isConcatSpreadable is set to a truthy value (e.g. true).
*/

const obj1 = {
  0: 1,
  1: 2,
  2: 3,
  length: 3,
};

const obj2 = {
  0: 1,
  1: 5,
  2: 3,
  length: 3,
  [Symbol.isConcatSpreadable]: true,
};

const obj3 = [].concat(obj1, obj2);
console.log(obj3);

/*
----------using concat() on sparse arrays
*/

const arr4 = [1, , , 3, 4]
const arr5 = [2, 5, , 7]
console.log(arr4.concat(arr5));