//remainder();
//leapYear();
numberOfDays();
        
        

function isNumber(userInput){
    return !isNaN(userInput);

}

function leapYear( EnterYear){
   
if (EnterYear%4!=0){
console.log("common year");
return false;
}
else if (EnterYear%100!=0){
console.log("leap year"); 
return true;
}
else if (EnterYear%400!=0){
console.log("common year"); 
return false;
}
else {
console.log("leap year"); 
return true;
}
}


function numberOfDays(){
    let EnterYear = prompt("EnterYear");
    while(isNumber(EnterYear)!=true){
        EnterYear = prompt("EnterYear");
    }
    let EnterMonth = prompt("EnterMonth");
    while(isNumber(EnterMonth)!=true){
        EnterMonth = prompt("EnterMonth");
    }
if(EnterMonth==1||EnterMonth==3||EnterMonth==5||EnterMonth==7||EnterMonth==8||EnterMonth==10||EnterMonth==12){
    console.log("output is: 31 days")
    }
    else if(EnterMonth==4||EnterMonth==6||EnterMonth==9||EnterMonth==11){
        console.log("output is: 30 days")
        }
        else{
            if (leapYear (EnterYear) == true)
            console.log("output is: 29 days");
            else
            console.log("output is: 28 days");
        }

}