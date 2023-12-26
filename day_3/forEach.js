/*
forEach() expects a synchronous function — it does not wait for promises. 
*/

const items = ["item1", "item2", "item3", "item4"];
const copiedItems = [];

items.forEach((el, index) => {
    copiedItems.push(el);
});

console.log(copiedItems);