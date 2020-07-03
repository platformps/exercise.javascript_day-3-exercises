
function convertToNumber(inputString) {
    return parseInt(inputString);
}

function leap() {
    userInput = prompt("Enter year");
    convertToNumber(userInput);
    if (userInput % 4 != 0) {
        alert("It is a Common year");
    } else if (userInput % 100 != 0) {
        alert("It is a leap of year");
    } else if (userInput % 400 != 0) {
        alert("It is a Common Year");
    }else {
        alert("it is a leap year");
    }
}
leap();