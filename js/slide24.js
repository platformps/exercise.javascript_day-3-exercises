function isLeapYear(year) {

    if (year % 4 === 0) return true;
    else if (year % 100 === 0) return false;
    else if ( year % 400 === 0) return true;
    else true;
}

function isNumber(userInput) {
    return !isNaN(userInput) 
}

do {
    userInput = prompt("Enter Year:");

} while(!(isNumber(userInput)))

if (isLeapYear(userInput)) {
        console.log (userInput + " is a leap year");
}
else {
        console.log (userInput + " is a common year");
}