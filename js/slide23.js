function isNumber(inputString) {
    if (inputString.match(/[a-z]/i)) {
        return false;
    }
    return true;
}

function smaller() {
    firstInput = prompt("Enter the first number");
    secondInput = prompt("Enter the second number");
    
    if ((isNumber(firstInput) == false) || (isNumber(secondInput) == false)) {
        alert("Invalid Inputs, re-enter Inputs");
        smaller();
    }

    if (firstInput < secondInput) {
        alert(firstInput);
    }

    if (secondInput < firstInput) {
        alert(secondInput);
    }
}

function smaller3() {
    firstInput = prompt("Enter the first number");
    secondInput = prompt("Enter the second number");
    thirdInput = prompt("Enter the third number");
    let firstLessNumber;

    if ((isNumber(firstInput) == false) || (isNumber(secondInput) == false) || (isNumber(thirdInput) == false)) {
        alert("Invalid Inputs, re-enter Inputs");
        smaller3();
    }

    if (firstInput < secondInput) {
        firstLessNumber = firstInput;
    }

    if (secondInput < firstInput) {
        firstLessNumber = secondInput;
    }

    if(firstLessNumber < thirdInput) {
        alert(firstLessNumber);
    }

    if(thirdInput < firstLessNumber) {
        alert(thirdInput);
    }

}