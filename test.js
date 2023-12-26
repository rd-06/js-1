// const obj1 = { 0: 1, 1: 2, 2: 3, length: 3 };
// const obj2 = { 0: 1, 1: 2, 2: 3, length: 3, [Symbol.isConcatSpreadable]: true };
// console.log([0].concat(obj1, obj2));
// // [ 0, { '0': 1, '1': 2, '2': 3, length: 3 }, 1, 2, 3 ]

console.log(Array.prototype.concat.call({}, 1, 2, 3)); // [{}, 1, 2, 3]

console.log(Array.prototype.concat.call(1, 2, 3)); // [ [Number: 1], 2, 3 ] ????????

const arrayLike = { [Symbol.isConcatSpreadable]: true, length: 2, 0: 1, 1: 2 };
console.log(Array.prototype.concat.call(arrayLike, 3, 4)); // [1, 2, 3, 4]


 