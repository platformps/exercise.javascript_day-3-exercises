function isLeapYear(year) {

    if (year % 4 === 0) return true;
    else if (year % 100 === 0) return false;
    else if ( year % 400 === 0) return true;
    else true;
}
function daysInMonth (userMonth,userYear) {
    return new Date(userYear,userMonth,0).getDate();
}


function isNumber(userInput) {
    return !isNaN(userInput) 
}

do {
    userInput = prompt("Enter a year and month:");
    strArg = userInput.split(" ",2);
    userYear = strArg[0];
    userMonth = strArg[1];
} while(!(isNumber(userYear) && isNumber(userMonth)))


    console.log ("Total Days : " +  daysInMonth(userMonth,userYear ));

