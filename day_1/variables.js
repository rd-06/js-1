/*
var : accessed globally
let : not globally accessable
const : value can't be changed
*/

/* 
template literals
*/

const about = {
  name: "q",
  age: 1,
  location: "quark",
};

console.log(`
    I am ${about.name}, i am ${about.age} year old, my workplace is in ${about.location}.
`);

/*
NaN : not a number
*/

function area(height) {
  if (isNaN(height)) {
    console.log("please input a numeric");
  }
}
area("h");

/*
IIFE : immediately invoked function expressions

iife's can only be called once and variables (var, let, const) declared or initialized inside of the function are not globally accessible. 
*/

(function once() {
    console.log('this function will only execute once');
})()


