/*  ?????????????????????????????
replace : returns a new string with one, some or all matches of pattern replaced by the replacement.
case sensitive
if the patterns is string only the first occuerence is replaced. 
patterns can be str or regEx, and replacement can a str or a function
replace(pattern, replacement)
*/

const str =
  "The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?";

console.log(str.replace(/Dog/i, "cat"));    // ignores upperCase/lowerCase

// if the pattern is empty str, the replacement is started with the starting of the str.
console.log("xxx".replace("", "-"));

console.log(str);