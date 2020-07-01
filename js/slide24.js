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