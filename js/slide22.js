//isNumber function

function isNumber (someString){
    if (parseInt(someString)){
        return true;
    } else return false;
}

console.log(isNumber("abc"));

// converToNumber function
function converToNumber(someString){
    return parseInt(someString);
}

console.log(converToNumber("555"));





