const beforeD = (i) => {
  const currD = new Date();
  const d = new Date(currD.setDate(currD.getDate() - i));
  return d.toDateString();
};

const afterD = (i) => {
  const currD = new Date();
  const d = new Date(currD.setDate(currD.getDate() + i));
  return d.toDateString();
};

console.log(beforeD(5));
console.log(afterD(5));
