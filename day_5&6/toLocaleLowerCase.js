/*
toLowerCase() 
    does not change original str
*/

const str = "ASDF";
const strLower = str.toLocaleLowerCase("tr");
console.log(strLower);

// checks for turkish lang.
"\u0130".toLocaleLowerCase("tr") === "i"; // true

console.log("Gesäß".toLocaleUpperCase("en-US"));
