let userInput = "";
promptUser();

// function to prompt the user for inputs
function promptUser() {
    userInput = prompt("Enter the year");
    userInputFunction(userInput);

}
function userInputFunction(userInput) {
    userInput = Number(userInput);

    if (Number.isInteger(userInput)) {
        leap(userInput);

    } else {
        promptUser();
    }
}

function leap(userInput) {
    if (userInput % 4 == 0 && userInput % 100 !== 0) {
        console.log(userInput + " is a Leap year");
    }
    else if (userInput % 100 == 0 && userInput % 400 == 0) {
        console.log(userInput + " is a Leap year");
    } else {
        console.log(userInput + " is a common year");
    }

}
