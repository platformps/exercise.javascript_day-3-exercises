const LEAP_YEAR = true;
const COMMON_YEAR = false;
const YEAR = 0;
const MONTH = 1;

var input = window.prompt("Enter year and month: ");
console.log("Enter year and month: " + input);
var inputNumberArray = input.split(" ");
while (inputNumberArray.length != 2 || !checkAllNumbers(inputNumberArray) || inputNumberArray[MONTH] < 1 || inputNumberArray[MONTH] > 12) {
    input = window.prompt("Re-enter input: ");
    console.log("Re-enter input: " + input);
    inputNumberArray = input.split(" ");
}

function checkAllNumbers(inputNumberArray) {
    for (var index = 0; inputNumberArray.length > index; index++) {
        if (!isDigits(inputNumberArray[index])) {
            return false;
        }
    }
    return true;
}
var year = parseInt(inputNumberArray[YEAR]);
var month = parseInt(inputNumberArray[MONTH]);
var day;
switch (month) {
    case 1:
        day = 31;
        break;
    case 2:
        day = isLeapYear(year) ? 29 : 28;
        break;
    case 3:
        day = 31;
        break;
    case 4:
        day = 30;
        break;
    case 5:
        day = 31;
        break;
    case 6:
        day = 30;
        break;
    case 7:
        day = 31;
        break;
    case 8:
        day = 31;
        break;
    case 9:
        day = 30;
        break;
    case 10:
        day = 31;
        break;
    case 11:
        day = 30;
        break;
    case 12:
        day = 31;
        break;
    default:
        break;
}
console.log("Output: " + day);


//https://stackoverflow.com/questions/1779013/check-if-string-contains-only-digits
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