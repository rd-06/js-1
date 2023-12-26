/*
splice : mutates array
empty slots are preserved
splice(start)
splice(start, deleteCount)
splice(start, deleteCount, item1)
*/

const arr = ["a", "s", "d", "f"];
const arr2 = arr.splice(1, 3);
console.log(arr2);
console.log(arr);

const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
console.log(months);