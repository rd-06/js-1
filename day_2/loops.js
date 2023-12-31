/*
tracks ATM transactions
*/

let account = {
  name: "q",
  branch: `quark city`,
  IFSC: "QAK111",
  transactions: {
    date: ["1jan ", "2jan ", "3jan ", "4jan ", "5jan "],
    amount: ["100 ", "43 ", "5432 ", "20000 ", "120 "],
  },
};

function accDetails(acc) {
  for (let i in acc) {
    console.log(`${i} : ${acc[i]}`);
  }
}

accDetails(account);

function accTransactions(acc) {
  for (let i of acc.transactions.date) {
    process.stdout.write(i);
  }
  console.log();
  for (let j of acc.transactions.amount) {
    process.stdout.write("$" + j);
  }
  console.log();
}

accTransactions(account);

// for loop
for (let i = 1; i <= 5; i++) {
  console.log(2 * i);
}

// do while
let i = 1;
do {
  if (i % 2 == 0) {
    console.log(i + " is divisible by 2");
  }
  i++;
} while (i <= 10);

let k = -1;
do {
  console.log("this will execute, even if it violates the condition");
  k++;
} while (k > 0);

console.log("----------------for..in-------------------");
/*
    for..in : it loops over property names not values
*/

let ob = {
  name: "q",
  age: 1,
  location: "quark",
};

for (i in ob) {
  console.log(i);
}

console.log("-----------------for..in-----------------");
let arr = [3, 2, 1];
arr.foo = "hello";

for (let i in arr) {
  console.log(i);
}

/*
    for..of:  it loops over values generated by that
*/
console.log("-------------for..of---------------");

for (let i of arr) {
  console.log(i);
}

/* 
for await..of
*/
console.log("---------------for await..of-------------------");
async function* q() {
  yield 1;
  yield 2;
}

(async function () {
  for await (const num of q()) {
    console.log(num);
    break;
  }
})();
