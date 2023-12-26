/*
Given an array of people objects, return a new array that has filtered out all those who don't belong to the club.
*/

const arr = [
  { name: "Angelina Jolie", member: true },
  { name: "Eric Jones", member: false },
  { name: "Paris Hilton", member: true },
  { name: "Kayne West", member: false },
  { name: "Bob Ziroll", member: true },
];

const arrNew = [];
function peopleWhoBelongToTheIlluminati(arr) {
  arr.filter(function (el) {
    el.member ? arrNew.push(el) : "";
  });
}
peopleWhoBelongToTheIlluminati(arr);
console.log(arrNew);
