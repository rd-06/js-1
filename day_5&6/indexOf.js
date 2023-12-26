/*
indexOf : 
one argument : searches for the substring and returns the first occurence of the substring 
second argument : returns the first occurence of substring at index greater than or equal to the specific number 
Case sensitive
*/

const str =
  "The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?";
console.log(str.indexOf("fox"));

const searchItem = "jumps";
const indexOfFirst = str.indexOf(searchItem);

console.log(`${searchItem} is at ${indexOfFirst}`);

/*
Return value when using an empty search string
Searching for an empty search string produces strange results. With no second argument, or with a second argument whose value is less than the calling string's length, the return value is the same as the value of the second argument:
*/
