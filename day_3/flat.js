/*
flat : creates a new array with all the sub arrays concatenated into it recursively into specified depth
flat(depth)
*/

const arr = [1, 2, 3, [[5, 2, 1], [3, 2], [[[[[[[1, 2]]]]]]]]];
console.log(arr.flat(2));
console.log(arr.flat(Infinity));

// flat on non-array objects
const arrayLike = {
  length: 3,
  0: [1, 2],
  // Array-like objects aren't flattened
  1: { length: 2, 0: 3, 1: 4 },
  2: 5,
};
console.log(Array.prototype.flat.call(arrayLike));
// [ 1, 2, { '0': 3, '1': 4, length: 2 }, 5 ]
console.log(arrayLike);

console.log(
  "-----------------------flat on sparse arrays-----------------------------"
);
const arr5 = [1, 2, , 4, 5];
console.log(arr5.flat()); // [1, 2, 4, 5]

const array = [1, , 3, ["a", , "c"]];
console.log(array.flat()); // [ 1, 3, "a", "c" ]

const array2 = [1, , 3, ["a", , ["d", , "e"]]];
console.log(array2.flat()); // [ 1, 3, "a", ["d", empty, "e"] ]
console.log(array2.flat(2)); // [ 1, 3, "a", "d", "e"]
