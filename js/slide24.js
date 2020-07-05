

function Leap(){
    let year;

    while(year = prompt("Enter a year: ")){
        if (isNaN(year)){
            alert("Please enter numbers only!")
        }
        else if( (0 == year % 4) && (0 != year % 100) || (0 == year % 400) )
        {
            console.log(year + " is a leap year");  
        }
        else
        {
            console.log(year + " is not a leap year");  
        }

    }
    return;
}
console.log(Leap())
