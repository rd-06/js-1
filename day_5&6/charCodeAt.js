/*
charCodeAt : returns interger at integer between 0 and 655535 representing the UTF-16 code unit at given index.
returns NaN, if index < 0 or if index >= length
*/

const str = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?'

const index = 4
console.log(`the character code ${str.charCodeAt(index)} is equal to ${str.charAt(index)}`);