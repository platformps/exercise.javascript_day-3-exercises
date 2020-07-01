var input = window.prompt("Input: ");
console.log("Input: " + input);
var inputNumberArray = input.split(" ");
while(inputNumberArray.length != 2 || !checkAllNumbers(inputNumberArray)){
    input = window.prompt("Re-enter input: ");
    console.log("Re-enter input: " + input);
    inputNumberArray = input.split(" ");
}

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