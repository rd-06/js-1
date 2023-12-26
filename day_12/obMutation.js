/*
these methods prevents ob mutation : Object.assign, spread{...}, Object.freeze
object.assign() : only the first argument is mutated
*/

const ob1 = {
  name: "q",
  model: 2016,
};

const ob2 = {
  name: "w",
  model: 2018,
  type: "p",
};

// const ob3 = Object.assign(ob1, ob2); // here it mutates the ob1 i.e first argument
const ob3 = Object.assign({}, ob1, ob2);
console.log(ob3);
console.log(ob1);

/*
spread : {...}
*/

const ob4 = {
  name: "q",
  model: 2016,
};
const ob5 = { ...ob4, type: "p" };
console.log(ob5);

/*
preventing mutation of single object
Object.freeze() : 
*/
const ob6 = {
  name: "q",
  model: 2016,
};

Object.freeze(ob6);
ob6.type = "p"; // changes doesnot refect in ob6
console.log(ob6);
