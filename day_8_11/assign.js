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
Promise.all([f1(true), f2(true), f3(true)]).then((res) => console.log(res));

// 5.2
Promise.all([f1(true), f2(false), f3(true)])
  .then((res) => console.log(res))
  .catch((res) => console.log(res));

// 6.1 calling functions in sequence by promise chaining
function f6_1(num) {
  return new Promise((resolve, reject) => {
    if (num === 1) {
      resolve("function 1st resolved");
    } else {
      reject("function 1st rejected");
    }
  })
    .then((result) => {
      console.log(result);
      num = num + 1;
      return new Promise((resolve, reject) => {
        if (num === 2) {
          resolve("function 2nd resolved");
        } else {
          reject("function 2nd rejected");
        }
      });
    })
    .then((result) => {
      console.log(result);
      num = num + 1;
      return new Promise((resolve, reject) => {
        if (num === 3) {
          resolve("function 3rd resolved");
        } else {
          reject("function 3rd rejected");
        }
      }).then((result) => console.log(result));
    })
    .catch((err) => console.log(err));
}
f6_1(1);

// 6.2
function f6_2(num) {
  return new Promise((resolve, reject) => {
    if (num === 1) {
      resolve("function 1st resolved");
    } else {
      reject("function 1st rejected");
    }
  })
    .then((result) => {
      console.log(result);
      num = num;
      return new Promise((resolve, reject) => {
        if (num === 2) {
          resolve("function 2nd resolved");
        } else {
          reject("function 2nd rejected");
        }
      });
    })
    .then((result) => {
      console.log(result);
      num = num + 1;
      return new Promise((resolve, reject) => {
        if (num === 3) {
          resolve("function 3rd resolved");
        } else {
          reject("function 3rd rejected");
        }
      }).then((result) => console.log(result));
    })
    .catch((err) => console.log(err));
}
f6_2(1);

// 7. async await
// can also be done by iife
async function f1(num) {
  return await new Promise((resolve, reject) => {
    if (num) {
      resolve("function 1 resolved");
    }
    reject("function 1 rejected");
  });
}

async function f2(num) {
  return await new Promise((resolve, reject) => {
    if (num) {
      resolve("function 2 resolved");
    }
    reject("function 2 rejected");
  });
}

async function f3(num) {
  return await new Promise((resolve, reject) => {
    if (num) {
      resolve("function 3 resolved");
    }
    reject("function 3 rejected");
  });
}

// can also be done by iife
// 7.1
f1(true).then((res) => console.log(res));
f2(true).then((res) => console.log(res));
f3(true).then((res) => console.log(res));

// 7.2
f1(true).then((res) => console.log(res));
f2(false)
  .then((res) => console.log(res))
  .catch((res) => console.log(res));
f3(true).then((res) => console.log(res));
