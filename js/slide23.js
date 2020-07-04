let userInput; 
let strArg;
var a;
var b;

function smaLler(a, b){
    if (a < b) {
        return true;
    } 
    else {
        return false;
    }
}
// if its not a number it's not going to accept it //
function isNumber(userInput) {
    return !isNaN(userInput) 
}

do {
    userInput = prompt("Enter two numbers:");
    strArg = userInput.split(" ",2);
    a = strArg[0];
    b = strArg[1];
} while(!(isNumber(a) && isNumber(b)))

if (smaLler(a, b)) {
        console.log (a + " is a smaller number");
}
else {
        console.log (b + " is a smaller number");
}

