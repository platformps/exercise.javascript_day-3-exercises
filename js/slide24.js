function leap () {
    var year; 
    do {
        year = prompt("Enter a year to find out if it is a leap year");
        if (!(year % 4 == 0)) {
            console.log(year + " is a common year");
        } else if (!(year % 100 == 0)) {
            console.log(year + " is a leap year");
        } else if (!(year % 400 == 0)) {
            console.log(year + " is a common year");
        } else {
            console.log(year + " is a leap year");
        }
    
    } while (!(isNaN(year)));
}


leap();