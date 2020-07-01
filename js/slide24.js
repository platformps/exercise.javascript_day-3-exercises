function leap(){
    var year;
    do{year=prompt("Enter a year")}
    while(isNaN(year) || 4 != year.length);
    if(0 != (year % 4)) {document.write("This year is a common year");}
    else if(0 != (year % 100)){document.write("This year is a leap year");}
    else if(0 != (year % 400)){document.write("This year is a common year");}
    else {document.write("This year is a leap year");}
    
}
leap();