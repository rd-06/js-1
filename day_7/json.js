/* 
json : 
*/

// JSON. stringigy
const ob = {
  name: "q",
  age: 11,
  location: "q c",
};

console.log(JSON.stringify(ob));

// JSON. parse 
// indentation should be same as below
const obj2 = '{"name": "q", "age": 11}';

console.log(JSON.parse(obj2));
