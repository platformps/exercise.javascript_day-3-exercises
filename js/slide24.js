function leapYearCalculator(year){
    if(year % 4 !== 0){
        return year + " is a common year"
    } else if(year % 100 !== 0){
        return year + " is a leap year"
    } else if(year % 400 !== 0){
        return year + " is a common year"
    } else{
        return year + " is a leap year"
    }
}

do{
    userInput = prompt("please enter a year");
} while(!(-Infinity < userInput && userInput < Infinity));

var userInputInt = parseInt(userInput);

console.log(leapYearCalculator(userInputInt));