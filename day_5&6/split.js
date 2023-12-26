/*
split() : takes a pattern and divided a string into substring by searching for a pattern and puts the substing into array and returns array
split(separator)
split(separator, limit)
*/

const str = 'The quick brown fox jumps over the lazy dog.'
const words = str.split('h')
console.log(words);