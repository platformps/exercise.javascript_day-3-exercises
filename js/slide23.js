var input = window.prompt("Input: ");
console.log("Input: " + input);
var inputNumberArray = input.split(" ");
while(inputNumberArray.length != 2 || !checkAllNumbers(inputNumberArray)){
    input = window.prompt("Re-enter input: ");
    console.log("Re-enter input: " + input);
    inputNumberArray = input.split(" ");
}

var numberArray = new Array(inputNumberArray.length);
var min = Number.MAX_VALUE;
for(var index = 0; inputNumberArray.length > index; index++){
    var number = parseFloat(inputNumberArray[index]);
    numberArray[index] = number;
    if(min > number){
        min = number;
    }
}
console.log("Output: " + min);


function checkAllNumbers(inputNumberArray){
    for(var index = 0; inputNumberArray.length > index; index++){
        if(!isNumber(inputNumberArray[index])){
            return false;
        }
    }
    return true;
}

function isNumber(input){
    return !isNaN(input) && isFinite(input);
}