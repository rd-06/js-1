/*
apply : similar to apply, only difference is you have to pass array as an argument
apply(thisArg)
apply(thisArg, arg)
*/

const person = {
    fullName(city, country) {
        console.log(this.firstName + " " + this.lastName + " " + city + " " + country);
    }
}

const person1 = {
    firstName: 'd',
    lastName: 'c'
}

person.fullName.apply(person1, ['oslo', 'norway'])