/*
every() checks whether all elements in the arrays pass the condition implemented by the provided function.
    it returns boolean value.
*/

// checks that all the students passed the exam
const isPassed = (arr) => {
  return arr.every((el, index, arr) => {
    return el >= 60;
  });
};
const scores = [60, 91, 72, 88, 64];

console.log(isPassed(scores));

