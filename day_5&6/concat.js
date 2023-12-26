/*
concat : concatenates the argument string to the calling string.and returns a new string.
changing the original or returned str dont affect others
concat(str1)
concat(str1, str2)
concat(str1, str2, /* …,  strN
*/

const str1 = 'hello'
const str2 = 'there !'
const str3 = str1.concat(' ', str2)
console.log(str3);