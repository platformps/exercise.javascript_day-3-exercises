const LEAP_YEAR = true;
const COMMON_YEAR = false;

var input = window.prompt("Enter year: ");
console.log("Enter year: " + input);
while (!isDigits(input)) {
    input = window.prompt("Re-enter year: ");
    console.log("Re-enter year: " + input);
}
var year = parseInt(input);
console.log("Output: " + (isLeapYear(year) ? "LEAP YEAR" : "COMMON YEAR"));


function isDigits(input) {
    return /^\d+$/.test(input);
}

function isLeapYear(year) {
    if (year % 4 != 0) {
        return COMMON_YEAR;
    } else if (year % 100 != 0) {
        return LEAP_YEAR;
    } else if (year % 400 != 0) {
        return COMMON_YEAR;
    }
    return LEAP_YEAR;
}