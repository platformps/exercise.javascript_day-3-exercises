function isNumber(userInput) {
    let isNumeric = !isNaN(userInput)
    return isNumeric;
}


// calls the method and check if it is numeric
console.log(isNumber("123a"));


// gets a number and converts it to a string. 
//if the string does not contain a number complain.
function convertNumber(userString) {
    let number = 0;
    if (!isNaN(userString)) {

        number = parseInt(userString);
        console.log(number + " is a number");

    } else {
        console.log("Not a number");
    }

}


console.log(convertNumber("1234"));