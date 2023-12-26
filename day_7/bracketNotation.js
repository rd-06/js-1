/*
bracket Notation : allows you to access properties with speacial characters in the name, while you cannot do this with dot notation.
*/

const ob = {
  name: "q",
  age: 11,
  "foo.bar": 2,
};

// console.log(ob.foo.bar); gives error
console.log(ob["foo.bar"]);

console.log(ob);
