/*
The lastIndexOf() method returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards
    skips empty slots in sparse array
*/

const letters = ["q", "a", "a", "q", 1, 5, "d", 5];
console.log(letters.lastIndexOf(5));
