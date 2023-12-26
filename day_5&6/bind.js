/*
bind() : 
*/

const ob1 = {
  getName: function () {
    const fullName = `name : ${this.firstName} ${this.lastName}`;
    return fullName;
  }
};
const ob2 = {
  firstName: "q",
  lastName: "c",
};
const displayName = ob1.getName.bind(ob2);
console.log(displayName());
