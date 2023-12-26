/*
throw, try, catch, finally
*/
const prompt = require("prompt-sync")()
// user login system
const user = {
    id: 'q111',
    password: 'qqqq'
}

function login(inputId, inputPassword) {
    if(user.id === inputId && user.password === inputPassword) {
        console.log('successfully logged in');
    }else{
        throw 'invalid id or password'
    }
}
const inputId = prompt("enter id : ")
const inputPassword = prompt("enter password : ")

try{
    login(inputId, inputPassword)
}catch(e){
    console.log(e);
}


function getArea(width, heigth) {
  if (isNaN(width) || isNaN(heigth)) {
    throw new Error("error");
  }
}

try {
  getArea(3, "h");
} catch (e) {
  console.error(e);
}finally{
    console.log('finally will always execute');
}
