function leap(checkYear) {

    let leapCommon = 0;
    do {

        checkYear = prompt("Enter a year to check if it is a leap year: ");
        if (!isNaN(checkYear)) {
            break;
        }

    } while (isNaN(checkYear));


    leapCommon = parseInt(checkYear);
    if (leapCommon % 4 != 0) {
        console.log(leapCommon + " is a common year");
    } else if (leapCommon % 100 != 0) {
        console.log(leapCommon + " is a leap year");

    } else if (leapCommon % 400 != 0) {
        console.log(leapCommon + " is a common year");
    } else {
        console.log(leapCommon + " is a leap year");
    }
}

leap();