function monthDayCalculator(year, month){
    if(year % 4 !== 0){
        if(month == 2){
            return month + ", " + year + " has 28 days"
        }else if(month % 2 !== 0 && month <= 7){
            return month + ", " + year + " has 31 days"
        } else if(month % 2 !== 0 && month > 7){
            return month + ", " + year + " has 30 days"
        } else if(month % 2 == 0 && month <= 7){
            return month + ", " + year + " has 30 days"
        } else{
            return month + ", " + year + " has 31 days"
        }
    } else if(year % 100 !== 0){
        if(month == 2){
            return month + ", " + year + " has 29 days"
        }else if(month % 2 !== 0 && month <= 7){
            return month + ", " + year + " has 31 days"
        } else if(month % 2 !== 0 && month > 7){
            return month + ", " + year + " has 30 days"
        } else if(month % 2 == 0 && month <= 7){
            return month + ", " + year + " has 30 days"
        } else{
            return month + ", " + year + " has 31 days"
        }
    } else if(year % 400 !== 0){
        if(month == 2){
            return month + ", " + year + " has 28 days"
        }else if(month % 2 !== 0 && month <= 7){
            return month + ", " + year + " has 31 days"
        } else if(month % 2 !== 0 && month > 7){
            return month + ", " + year + " has 30 days"
        } else if(month % 2 == 0 && month <= 7){
            return month + ", " + year + " has 30 days"
        } else{
            return month + ", " + year + " has 31 days"
        }
    } else{
        if(month == 2){
            return month + ", " + year + " has 29 days"
        }else if(month % 2 !== 0 && month <= 7){
            return month + ", " + year + " has 31 days"
        } else if(month % 2 !== 0 && month > 7){
            return month + ", " + year + " has 30 days"
        } else if(month % 2 == 0 && month <= 7){
            return month + ", " + year + " has 30 days"
        } else{
            return month + ", " + year + " has 31 days"
        }
    }
}

do{
    yearInput = prompt("please enter a year");
} while(!(-Infinity < yearInput && yearInput < Infinity));
do{
    monthInput = prompt("please enter a month as a number");
} while(!(1 < monthInput && monthInput < 12));

var yearInputInt = parseInt(yearInput);
var monthInputInt = parseInt(monthInput);

console.log(monthDayCalculator(yearInputInt, monthInputInt));