let userInput1 = "";
let userInput = "";
let userInput2 = "";
let userInput3 = "";
let number = "";

promptUser();

// function to prompt the user for inputs
function promptUser() {
    userInput = prompt("Enter 2 or 3 numbers").split(" ");
    if (userInput.length == 3) {
        userInput1 = userInput[0];
        userInput2 = userInput[1];
        userInput3 = userInput[2];
        userInputFunction(userInput1, userInput2, userInput3);

    } else if (userInput.length == 2) {
        userInput1 = userInput[0];
        userInput2 = userInput[1];
        userInputFunction1(userInput1, userInput2);
    } else {
        promptUser();
    }
}
//validating the input and converting them into numbers
function userInputFunction1(userInput1, userInput2) {
    userInput1 = Number(userInput1);
    userInput2 = Number(userInput2);

    if (Number.isInteger(userInput1) && Number.isInteger(userInput2)) {
        smaller(userInput1, userInput2);
        print(number);
    } else {
        promptUser();
    }
}

//validating the input and converting them into numbers
function userInputFunction(userInput1, userInput2, userInput3) {
    userInput1 = Number(userInput1);
    userInput2 = Number(userInput2);
    userInput3 = Number(userInput3);

    if (Number.isInteger(userInput1) && Number.isInteger(userInput2) && Number.isInteger(userInput3)) {
        smaller3(userInput1, userInput2, userInput3);
        print(number);
    } else {

        promptUser();
    }
}
// printing the smallest number on console
function print(number) {
    console.log(number + " is smaller");
}
//getting the smallest number between 2
function smaller(userInput1, userInput2) {
    if (userInput1 > userInput2) {
        number = userInput2;

    } else {
        number = userInput1;

    }

}
//getting the smallest number between 3
function smaller3(userInput1, userInput2, userInput3) {
    smaller(userInput1, userInput2);
    if (number > userInput3) {
        number = userInput3;
    }
}