function smaller (numbersToCompare) {
    var integers;
    var regex = "\\s";
    do {
        integers = prompt("Enter two integers separated by a space");
      //  integers.split(" ");
      integers.split(regex);
        if (integers[0] > integers[1]) {
            console.log("The smaller number is " + integers[1]);
        } else if (integers[1] > integers[0]) {
            console.log("The smaller number is " + integers[0]);
        }

    } while (!(isNaN(integers[0])) && !(isNaN(integers[1])));
    }

function smaller3 (numbersToCompare) {
    var integers;
    var regex = "\\s";
    var firstRound;
    var secondRound;
    do {
        integers = prompt("Enter three integers each separated by a space");
        integers.split(" ");
        var lowest = Math.min(integers[0], integers[1], integers[2]);
     /*
        if (integers[0] > integers[1]) {
            firstRound = integers[1];
        } else {
            firstRound = integers[0];
        }
        if (firstRound > integers[2]) {
            secondRound = firstround;
        } else {
            secondRound = integers[2];
        }
        */
        console.log("The smaller number is " + lowest);
    } while (!(isNaN(integers[0])) && !(isNaN(integers[1])));
}

smaller();

smaller3();