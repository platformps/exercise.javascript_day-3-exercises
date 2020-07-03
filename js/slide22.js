function isNumber(inputString) {
    if (inputString.match(/[a-z]/i)) {
        return false;
    }
    return true;
}

function convertToNumber(inputString) {
    return parseInt(inputString);
}