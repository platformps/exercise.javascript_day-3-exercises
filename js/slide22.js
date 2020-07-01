var input = window.prompt("Input (isNumber): ");
console.log("Input (isNumber): " + input);
console.log("Output: " + isNumber(input));

var input = window.prompt("Input (convertToNumber): ");
console.log("Input (convertToNumber): " + input);
console.log("Output: " + convertToNumber(input));



function isNumber(input){
    return !isNaN(input) && isFinite(input);
}

function convertToNumber(input){
    return parseFloat(input);
}