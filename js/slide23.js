function smaller (numbersToCompare) {
    var integersArray;
    do {
        var integers = prompt("Enter two integers separated by a space \nHit OK when the form is blank to try with 3 integers");
        integersArray = integers.split(" ");

        console.log(integersArray[0]); //
        console.log(integersArray[1]); //

        var lowest = Math.min(integersArray[0], integersArray[1]);

        /*
        if (integersArray[0] > integersArray[1]) {
            console.log("The smaller number is " + integersArray[1]);
        } else if (integersArray[1] > integersArray[0]) {
            console.log("The smaller number is " + integersArray[0]);
        }

        */
        console.log("The smaller number is " + lowest);
    } while (!(isNaN(integersArray[0])) && !(isNaN(integersArray[1])));
    }

function smaller3 (numbersToCompare) {
    var integersArray;
    do {
        var integers = prompt("Enter three integers each separated by a space");
        integersArray = integers.split(" ");

        console.log(integersArray[0]); //
        console.log(integersArray[1]); //
        console.log(integersArray[2]); //

        var lowest = Math.min(integersArray[0], integersArray[1], integersArray[2]);

        console.log("The smaller number is " + lowest);
    } while (!(isNaN(integersArray[0])) && !(isNaN(integersArray[1])));
}

smaller();

smaller3();