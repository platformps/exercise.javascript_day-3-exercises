 function leapyear()
 {
    var year= prompt("enter the year");
    if(isNaN(year))
       prompt("enter the correct year");
    else
    {
    if((year%4)!=0)
       console.log("+year is common year1");
       else
    if((year%100)!=0)
       console.log("+year is leap year1  "+year);
    else if((year%400)!=0)
       console.log("+year is a common year2");
    else
       console.log("+year is a leap year2")
  }
  }

