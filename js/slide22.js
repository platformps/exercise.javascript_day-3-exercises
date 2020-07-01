let number = "";

let argArray = [23, "a23", "2j3", "23"];
let argIntegerArray = ["24", "45", "67", "82"];

isNumber(argArray);
convertToNumber(argIntegerArray);

function isNumber(argument) {
    for (let i = 0; i < argument.length; i++) {
        if (Number.isInteger(argument[i])) {
            console.log(argument[i] + " is a valid number");
        } else {
            console.log(argument[i] + " is a not valid number");
        }
    }
}

function convertToNumber(argument) {
    for (let i in argument) {
        console.log("input:" + argument[i] + " output:" + Number(argument[i]));
    }
}