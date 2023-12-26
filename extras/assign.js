const { dataSet } = require("./MOCK_DATA");

// 1.
const emailArr = [];
const email = (arr) => {
  arr.map((ob) => {
    emailArr.push(ob.email);
  });
  return emailArr;
};
console.log(email(dataSet));

// returning emails in specific order
// 2.
const emailArr2 = [];
const emailFormat = (arr) => {
  arr.map((ob) => {
    const { email } = ob;
    const upper = email.charAt(0).toUpperCase();
    const upto = email.indexOf("@");
    emailArr2.push(upper.concat(email.slice(1, upto)));
  });
  return emailArr2;
};
console.log(emailFormat(dataSet));

// 3.
const arrIntro = [];
console.log("---------------------3rd ");
const intro = (arr) => {
  arr.map((ob) => {
    arrIntro.push(
      `Hi I am ${ob.firstName} ${ob.lastName}. You can reach out to me on ${ob.email}`
    );
  });
};
intro(dataSet);
console.log(arrIntro);

// intro.call(dataSet);

console.log(
  " 4th-------------------------sorting-----------------------------"
);
// 4.

const sortArr = (arr) => {
  arr.sort((a, b) => {
    return a.email > b.email ? 1 : -1;
  });
};
sortArr(dataSet);
console.log(dataSet);

// Add a new key value pair named age with random values between 10 to 35 to the existing array using the preferred.
// 5.
const addAge = (arr) => {
  arr.map((ob) => {
    ob.age = Math.floor(Math.random() * (35 - 19) + 10);
  });
};
addAge(dataSet);
console.log(dataSet);
