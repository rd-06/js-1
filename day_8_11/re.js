// 5. calling all the functions parallelly
function f1(num) {
  return new Promise((resolve, reject) => {
    if (num) {
      resolve("function 1 resolved");
    }
    reject("function 1 rejected");
  });
}

function f2(num) {
  return new Promise((resolve, reject) => {
    if (num) {
      resolve("function 2 resolved");
    }
    reject("function 2 rejected");
  });
}

function f3(num) {
  return new Promise((resolve, reject) => {
    if (num) {
      resolve("function 3 resolved");
    }
    reject("function 3 rejected");
  });
}

// 5.1
Promise.all([f1(true), f2(true), f3(true)])
  .then((res) => console.log(res))
  .catch((res) => console.log(res));

// 5.2
Promise.all([f1(true), f2(false), f3(true)])
  .then((res) => console.log(res))
  .catch((res) => console.log(res));

// 6.1 calling functions in sequence by promise chaining
const prochain_1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
})
  .then((res) => {
    console.log(res);
    return f1(true);
  })
  .then((res) => {
    console.log(res);
    return f2(true);
  })
  .then((res) => {
    console.log(res);
    return f3(true);
  })
  .then((res) => {
    console.log(res);
  })
  .catch((res) => {
    console.log(res);
  });

// 6.2
const prochain_2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
})
  .then((res) => {
    console.log(res);
    return f1(true);
  })
  .then((res) => {
    console.log(res);
    return f2(false);
  })
  .then((res) => {
    console.log(res);
    return f3(true);
  })
  .then((res) => {
    console.log(res);
  })
  .catch((res) => {
    console.log(res);
  });

// 7. async await
// 7.1
async function f7_1() {
  try {
    const p1 = await f1(true);
    console.log(p1);
    const p2 = await f2(true);
    console.log(p2);
    const p3 = await f3(true);
    console.log(p3);
  } catch (err) {
    console.log(err);
  }
}
f7_1();

// 7.2
async function f7_2() {
  try {
    const p1 = await f1(true);
    console.log(p1);
    const p2 = await f2(false);
    console.log(p2);
    const p3 = await f3(true);
    console.log(p3);
  } catch (err) {
    console.log(err);
  }
}
f7_2();
