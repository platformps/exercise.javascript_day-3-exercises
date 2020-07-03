function convertToNumber(inputString) {
    return parseInt(inputString);
}

function leap(year) {
    convertToNumber(year);
    if (year % 4 != 0) {
        alert("It is a Common year");
    } else if (year % 100 != 0) {
        alert("It is a leap of year");
    } else if (year % 400 != 0) {
        alert("It is a Common Year");
    }else {
        alert("it is a leap year");
    }
}

function displayDaysOfMonth(month) {
    if(month == 1) {
        alert("31 days");
    }
    if(month == 2) {
        alert("28 days");
    }
    if(month == 3) {
        alert("31 days");
    }
    if(month == 4) {
        alert("30 days");
    }
    if(month == 5) {
        alert("31 days");
    }
    if(month == 6) {
        alert("30 days");

    }
    if(month == 7) {
        alert("31 days");

    }
    if(month == 8) {
        alert("31 days");
    }
    if(month == 9) {
        alert("30 days");
    }
    if(month == 10) {
        alert("31 days");
    }
    if(month == 11) {
        alert("30 days");
    }
    if(month == 12) {
        alert("31 days");
    }
}

function month() {
    let userInput = prompt("Enter the year and month in the format of YYYY M");
    let yearOnly;
    let monthOnly;
    if(userInput.length == 7) {
        yearOnly = userInput.trim().substring(0,4);
        monthOnly = userInput.trim().slice(-2);
    } 
    if (userInput.length == 6) {
        yearOnly = userInput.trim().substring(0,4);
        monthOnly = userInput.trim().slice(-1);
    }
    leap(yearOnly);
    displayDaysOfMonth(monthOnly);
    
}

month();