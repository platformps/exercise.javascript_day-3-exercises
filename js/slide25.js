//month function
function month(){
    var userInput , year, month;
    var yearAndMonth = [];
    userInput = prompt("Enter year and month (1 - 12): ");
    yearAndMonth = userInput.split(" ");
    year = parseInt(yearAndMonth[0]);
    month = parseInt(yearAndMonth[1]);

    if(isleap(year) && month === 2){
        return 29;
    } else if((month === 2) || (month === 4) || (month === 6) || (month === 9) || (month === 11)){
        return 30;
    } else return 31;

}

function isleap(year){
    if((year % 4) !== 0){
        return false;
    } else if((year % 100) !== 0){
        return true;
    } else if((year % 400) !== 0){
        return false;
    } else return true;
}

console.log("Number of days: " + month());
