/*
async : fnc. always return a promise
await : makes JS wait until a promise settles and  returns its result
works only inside async
*/

async function f() {
  const res = await fetch("https://api.github.com/users/florinpop17");
  const resData = await res.json();
  console.log(resData);
}
f();
