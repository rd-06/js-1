/*
Create an object called person with name = John, age = 50.
Then, access the object to alert("John is 50").
*/

const person = {
  name: "John",
  age: 50,
};

alert(`${person.name} is ${person.age}`);

// approach 2
/*
const person = {
  name: "John",
  age: 50,
  about() {
    return `${this.name} is ${this.age}`;
  },
};

alert(person.about());
*/