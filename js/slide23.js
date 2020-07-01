var input = window.prompt("Input: ");
console.log("Input: " + input);
var inputNumberArray = input.split(" ");
while (inputNumberArray.length != 2 || !checkAllNumbers(inputNumberArray)) {
    input = window.prompt("Re-enter input: ");
    console.log("Re-enter input: " + input);
    inputNumberArray = input.split(" ");
}

var numberArray = new Array(inputNumberArray.length);
for (var index = 0; inputNumberArray.length > index; index++) {
    numberArray[index] = parseFloat(inputNumberArray[index]);
}
console.log("Output: " + min(numberArray));

smaller3();


function checkAllNumbers(inputNumberArray) {
    for (var index = 0; inputNumberArray.length > index; index++) {
        if (!isNumber(inputNumberArray[index])) {
            return false;
        }
    }
    return true;
}

function isNumber(input) {
    return !isNaN(input) && isFinite(input);
}

function min(numberArray) {
    if (numberArray.length == 0) {
        throw new Error("numberArray needs to have some value inside it");
    }

    var min = Number.MAX_VALUE;
    for (var index = 0; inputNumberArray.length > index; index++) {
        var number = numberArray[index];
        if (min > numberArray[index]) {
            min = number;
        }
    }
    return min;
}

function smaller3() {
    var input = window.prompt("Input 3 numbers: ");
    console.log("Input 3 numbers: " + input);
    var inputNumberArray = input.split(" ");
    while (inputNumberArray.length != 3 || !checkAllNumbers(inputNumberArray)) {
        input = window.prompt("Re-enter input: ");
        console.log("Re-enter input: " + input);
        inputNumberArray = input.split(" ");
    }
    console.log("Output: " + min(inputNumberArray));
}