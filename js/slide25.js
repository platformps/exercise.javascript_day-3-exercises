let userInput = "";
let userInputArray = "";
let userInput1 = "";
let userInput2 = "";
let isLeapYear = "";

promptUser();

// prompt the user for inputs
function promptUser() {
    userInput = prompt("Enter the year and month");
    userInputFunction(userInput);
}

//check if the user input is a number
function userInputFunction(userInput) {
    userInputArray = userInput.split(" ");
    userInput1 = userInputArray[0];
    userInput2 = userInputArray[1];
    userInput1 = Number(userInput1);
    userInput2 = Number(userInput2);

    if (Number.isInteger(userInput1) && Number.isInteger(userInput2)) {
        days(userInput1, userInput2);

    } else {
        promptUser();
    }
}
// checking for leap year
function leap(userInput) {
    if (userInput % 4 == 0 && userInput % 100 !== 0) {
        isLeapYear = true;
    }
    else if (userInput % 100 == 0 && userInput % 400 == 0) {
        isLeapYear = true;
    } else {
        isLeapYear = false;
    }

}
// calculating days in a given month
function days(userInput1, userInput2) {
    if (userInput2 % 2 == 0) {
        if (userInput2 == 2) {
            if (leap(userInput1) == true) {
                console.log("output:29 days");
            } else {
                console.log("output:28 days");
            }
        } else {
            console.log("output:30 days");
        }
    } else {
        console.log("output:31 days");
    }


}