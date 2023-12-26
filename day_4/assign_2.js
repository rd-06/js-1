/*
Task 1 → Given an array of all your wishlist items, figure out how much it would cost to just buy everything at once
Task 2 → Given an array of all your wishlist items, figure out how much it would cost to just buy everything at once,
 assuming that the we have to pay a base service price of 300 along with the item prices
*/

// task 1
function shoppingSpree(arr) {
  // your code here

  const total = arr.reduce((a, b) => {
    return a + b.price;
  }, 0);

  return total;
}

var wishlist = [
  { title: "Tesla Model S", price: 90000 },

  { title: "4 carat diamond ring", price: 45000 },

  { title: "Fancy hacky Sack", price: 5 },

  { title: "Gold fidgit spinner", price: 2000 },

  { title: "A second Tesla Model S", price: 90000 },
];

console.log(shoppingSpree(wishlist));

// task 2
function shoppingSpree2(arr) {
  // your code here

  const total = arr.reduce((a, b) => {
    return a + b.price + 300;
  }, 0);

  return total;
}

console.log(shoppingSpree2(wishlist));
