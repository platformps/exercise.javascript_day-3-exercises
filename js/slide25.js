

function Month() {
    let year;
    let month;
    let  days;
    while(year = prompt("Enter a year in 4 digits: ")&&(month = prompt("Enter the month of the year between 1 and 12:  "))){
            if (isNaN(year) || isNaN(month)){
                alert("Please enter numbers only!")
            }
            else
            {
                days = new Date(year, month,0).getDate();
                console.log("Number of days in that month:  " + days);
            }
    }
    return;
}
console.log(Month())
