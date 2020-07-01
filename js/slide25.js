function month(){
    var month;
    var year;
    while(!isNumber(month) || !isNumber(year))
    {
        year = parseInt(prompt("please enter year"));
        month = parseInt(prompt("Please enter month"));
    }

    if( isLeap(year) && month == 2)
        console.log("This month has 28 days");
    else if (month % 2 == 0)
        console.log("This month has 30 days");
    else if (month % 2!= 0)
        console.log("This month has 31 days");
}