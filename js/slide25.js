function knuckleMonths () {
    var month = prompt("Enter year and month (e.g: 2019 2)");
    var leapYear = false;
    
    if (month.substring(0, 4) % 4 == 0) {
        leapYear = true;
    }
    switch (month.substring(5)) {
        case "1":
            console.log("31 days");
            break;
        case "2" :
            if (leapYear == true) {
                console.log("29 days");
            }
            if (leapYear == false) {
                console.log("28 days");
            }
            break;
        case "3" :
            console.log("31 days");
            break;
        case "4":
            console.log("31 days");
            break;
        case "5":
            console.log("31 days");
            break;  
        case "6":
            console.log("31 days");
            break;
        case "7" :
            console.log("31 days");
            break;
        case "8" :
            console.log("31 days");
            break;
        case "9" :
            console.log("31 days");
            break;
        case "10":
            console.log("31 days");
            break;
        case "11":
            console.log("31 days");
            break;
        case "12":
            console.log("31 days");
            break;
        default: 
            console.log("I don't understand");
    }
}


knuckleMonths();