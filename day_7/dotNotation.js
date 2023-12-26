/*
dotNotation :
*/

const ob = {
    name: 'q',
    age: 11,
    greeting() {
        console.log(`${ob.name} is ${ob.age} years old.`);
    }
}

ob.greeting()
ob.location = 'quark city'
ob.greeting = function() {
    console.log(`${ob.name} live in ${ob.location}`);
}
ob.greeting()