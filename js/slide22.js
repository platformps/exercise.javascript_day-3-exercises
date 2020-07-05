

function isNumber(){
    let num1 = "";
    num1 = prompt("enter a number: ");
    num1 = isFinite(num1);
    return num1;
}
console.log(isNumber())

console.log("function isNumber complete")


function convertToNumber(){
    let num1 = "";
    num1 = prompt("enter a number: ");
    num1 = parseFloat(num1);
    num1 = parseInt(num1);
    num1 = Number(num1);
    return num1;
}
console.log(convertToNumber())

console.log("function convertToNumber is complete")