function isNumber(input){
    return !isNaN(input)
}

var userInput = prompt("Is this a number?");
console.log(isNumber(userInput));
