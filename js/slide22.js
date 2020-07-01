// isNumber function

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

//smaller function
function smaller(){
    var num1, num2;
    do{
        num1 = prompt("Enter first integer: ");
        num2 = prompt("Enter second integer: ");
    } while(isNumber(num1) === false || isNumber(num2) === false);
    if(num1 < num2){
        return num1;
    } else return num2;
}

console.log(smaller());

//smaller3 function
function smaller3(){
    var num1, num2, num3;
    do{
        num1 = prompt("Enter first integer: ");
        num2 = prompt("Enter second integer: ");
        num3 = prompt("Enter third integer: ");
    } while(isNumber(num1) === false || isNumber(num2) === false || isNumber(num3) === false);
    if(num1 < num2 && num1 < num3){
        return num1;
    } else if (num2 < num3){
        return num2;
    } else return num3;
}

console.log(smaller3());

// leap function
function leap(){
    var year;
    
    do{
        year = parseInt(prompt("Please Enter year: "));
    }while(isNumber(year) === false);
    
    if ((year % 4) !== 0){
        return "It is a common year";
    } else if((year % 100) !== 0){
        return "It's a leap year!";
    } else if((year % 400) !== 0){
        return "It's a common year";
    } else return "It's a leap year!";
}

console.log(leap());
