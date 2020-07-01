function isNumber (allNumbersOrNot) {
    var result = isNaN(allNumbersOrNot);
    return !(result);
}

function convertToNumber (StringToConvert) {
    var converted = parseInt(StringToConvert);
    return converted;
}





console.log("1. " + isNumber("23"));
console.log("2. " + isNumber("a23"));
console.log("3. " + isNumber("2j3"));
console.log("4. " + convertToNumber("23"));
