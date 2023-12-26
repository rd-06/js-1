/* 
if else, nested ifelse, switch, ternary operator, equality operator
assignment operator, arithmetic operator, logical operator, comparison operator
*/

const prompt = require("prompt-sync")();

function calculator(num1, num2, op) {
  let ans = 0;
  let isValid = true;

  // assignment, arithmetic, comparison, ternary
  if (op == "+") {
    ans = num1 + num2;
  } else if (op == "-") {
    ans = num1 - num2;
  } else if (op == "*") {
    ans = num1 * num2;
  } else if (op == "%") {
    ans = num1 % num2;
  } else if (op == "/") {
    ans = num1 / num2;
  } else {
    isValid = false;
  }
  isValid ? console.log(ans) : console.log("invalid operator");
}
let num1 = prompt("enter num 1 : ");
let num2 = prompt("enter num 2 : ");
let operator = prompt("enter operator : ");
calculator(num1, num2, `${operator}`);

/* switch */

function access(entity) {
  switch (entity) {
    case "student":
      console.log(
        "student have access to the syallabus and can mark attendence"
      );
      break;
    case "teacher":
      console.log(
        "teacher can alter the syallabus and mantain record of the scores"
      );
      break;
    case "accountant":
      console.log(
        "accountant manages the salaries and keep the record of leaves and all"
      );
      break;
  }
}

const entity = prompt("enter entity : ");
access(`${entity}`);

const person = {
  name: "q",
  savings: 60,
  weekends: true,
};

// logical, comparison
if (person.savings > 50 && person.weekends) {
  console.log(`${person.name} can go for a vacation`);
} else if (person.savings > 30 || person.weekends) {
  console.log(`${person.name} can go for shopping`);
} else {
  console.log(".");
}

const ob = {
  name: "q",
  age: "11",
  canDrive: false,
};

if (ob.age >= 18) {
  ob.canDrive = true;
  console.log(`${ob.name} is allowed to drive`);
} else {
  ob.canDrive = false;
  console.log(`${ob.name} is not allowed to drive`);
}
