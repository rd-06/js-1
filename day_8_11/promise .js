/*
promise : 

all further calls of reject or resolve are ignored and will ignore additional arguments
*/

// reject resolve function expects only one argument (or none)
const promise = new Promise(function (resolve, reject) {
  setTimeout(() => resolve("fulfilled"), 1000);
});

const promise2 = new Promise(function (resolve, reject) {
  setTimeout(() => reject(new Error("oops")), 1000);
}).catch((res) => console.log(res));

promise.then(console.log());

/*
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

delay(3000).then(() => alert("runs after 3 seconds"));
*/

const test = new Promise(function (resolve, reject) {
  if (isNaN(1)) {
    resolve("true");
  } else {
    reject("false");
  }
});

test.then((res) => console.log(res)).catch((res) => console.log(res));
