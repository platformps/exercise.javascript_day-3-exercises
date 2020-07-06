function smaller(firstInput, secondInput) {

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
    if (numOne > numTwo) {
        console.log(numTwo + " is the smaller number");
    } else {
        console.log(numOne + " is the smaller number");
    }
}

smaller();