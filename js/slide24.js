function leap(){
    var year;
    while (!isNumber(year)){
        year = prompt("Plese enter a valid year.")
    }
    isLeap(year);
}

function isLeap(year){
    if(year % 100 != 0){
        if (year % 4 == 0 ){
                console.log("This year is a leap year");
                return true;                
        }
        else {
            console.log("This year is not a leap year");
            return  false;
        }
    }
        else{
            if(year % 400 == 0){
                console.log("This year is a leap year")
                return true;
            }
            else{
            console.log("This year is not a leap year")
            return false;
            }
        }
}