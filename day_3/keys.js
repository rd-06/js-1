/*
keys : returns new array iterator object that contains keys for each index in the array 
// sparse keys ????
*/

const arr = ["a", "s", "d", "f"];
const iterator = arr.keys();
for (const key of iterator) {
    console.log(key);
}