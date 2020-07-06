function month(firstInput, secondInput) {

    let numOne = 0;
    let numTwo = 0;

    do {

        firstInput = prompt("Enter an integer number: ");
        secondInput = prompt("Enter a second integer number: ");
        if (!(isNaN(firstInput)) && (isNaN(secondInput))) {

            break;
        }

    } while ((isNaN(firstInput)) && (isNaN(secondInput)));

    numOne = parseInt(firstInput);
    numTwo = parseInt(secondInput);
    // leapCommon = parseInt(checkYear);
    // if (leapCommon % 4 != 0) {
    //     console.log(leapCommon + " is a common year");
    // } else if (leapCommon % 100 != 0) {
    //     console.log(leapCommon + " is a leap year");

    // } else if (leapCommon % 400 != 0) {
    //     console.log(leapCommon + " is a common year");
    // } else {
    //     console.log(leapCommon + " is a leap year");
    // }

    if (numOne == 9 || numOne == 4 || numOne == 6 || numOne == 10) {
        console.log("The month of this year has 30 days.");
    } else if (numOne == 2) {
        console.log("The month of this year has 28 days.");
    } else {
        console.log("The month of this year has 31 days")
    }
}

month();