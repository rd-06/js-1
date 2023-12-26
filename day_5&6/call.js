/*
call() : 
call(thisArg)
call(thisArg, arg1)
call(thisArg, arg1, arg2, .....argN)
*/

const person = {
  fullName() {
    return this.firstName + this.lastName;
  },
};

const person1 = {
  firstName: "q",
  lastName: "c",
};

const person2 = {
  firstName: "d",
  lastName: "c",
};

console.log(person.fullName.call(person2));
console.log(person.fullName.call(person1));


