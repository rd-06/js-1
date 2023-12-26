/*
filter : creates shallow copy
*/

const students = [
  { name: "a", score: 71 },
  { name: "s", score: 11 },
  { name: "d", score: 21 },
  { name: "f", score: 91 },
];

const isPassed = (arr) => {
  return arr.filter((el, index, arr) => {
    return el.score >= 60 ? console.log(el.name) : "";
  });
};
console.log("students who passed the exam : ");
isPassed(students);
// console.log("passed : " + isPassed(students));
