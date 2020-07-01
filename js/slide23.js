function smallerNumber(num1, num2){
    if(num1 > num2){
        return num1 + " is greater than " + num2
    } else {
        return num2 + " is greater than " + num1
    }
};

do{
    userInput1 = prompt("please enter a number");
} while(!(-Infinity < userInput1 && userInput1 < Infinity)) //NaN didn't work for some reason, so i just put it between infinity and -infinity to guarantee a number 
do{
    userInput2 = prompt("please enter a second number");
} while(!(-Infinity < userInput2 && userInput2 < Infinity)) //same as line 11

var userInput1Int = parseInt(userInput1);
var userInput2Int = parseInt(userInput2);

console.log(smallerNumber(userInput1Int, userInput2Int));