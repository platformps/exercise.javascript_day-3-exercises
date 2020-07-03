function numberOfdays(){
    var intY = 0;
    var intM = 0;
    var yearToCheck = 0;
    var monthToCheck = 0;
    
    var daysOfMonths = {1:31, 2:28, 3:31, 4:30, 5:31, 6:30, 7:31, 8:31, 9:30, 10:31, 11:30, 12:31};
    do{
        intY = prompt("Enter a year");
    }while(!(isNumuber(intY)));
    yearToCheck = parseInt(intY);

    do{
    intM = prompt("Enter a month");
    }while(!(isNumuber(intM)));
    monthToCheck = parseInt(intM);


    if(isLeap(yearToCheck)){
        daysOfMonths[2] = 29;
    }

    console.log(daysOfMonths[monthToCheck] + " days")


}
numberOfdays();