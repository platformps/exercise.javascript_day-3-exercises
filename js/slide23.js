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