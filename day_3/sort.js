/*
sort : mutates the original array, returns reference to the same array
*/

const arr = [40, 2, 100, 43, 8];
console.log(arr.sort());

const sorted = arr.sort((a, b) => {
  return a - b;
});
console.log(sorted);

const arr2 = ["blue", "red", "yellow", "black"];
console.log(arr2.sort());

const items = [
  { name: "Edward", value: 21 },
  { name: "Sharpe", value: 37 },
  { name: "And", value: 45 },
  { name: "The", value: -12 },
  { name: "Magnetic", value: 13 },
  { name: "Zeros", value: 37 },
];

// sort by value
items.sort((a, b) => a.value - b.value);

// sort by name
items.sort((a, b) => {
  const nameA = a.name.toUpperCase(); // ignore upper and lowercase
  const nameB = b.name.toUpperCase(); // ignore upper and lowercase
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }

  // names must be equal
  return 0;
});
console.log(items);
