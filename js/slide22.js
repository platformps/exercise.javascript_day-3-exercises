let userInput; 
let strArg;


//determines whether the argument is a number if so out come will be true//
function isNumber(userInput) {
    return !isNaN(userInput) 
}


//converting the string into a type number//
function covertNumber(strArg) {
    return parseInt(strArg)
}


do {
    userInput = prompt("Enter a number:");
} while(!isNumber(userInput))

strArg = covertNumber(userInput);
console.log (strArg);