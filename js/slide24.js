 
        //remainder();
        leapYear();
        
        

        function isNumber(userInput){
            return !isNaN(userInput);

        }

        function remainder(){
            let userInput1 = prompt("userInput1");
            while(isNumber(userInput1)!=true){
                userInput1 = prompt("userInput1");
            }
            let userInput2 = prompt("userInput2");
            while(isNumber(userInput2)!=true){
                userInput2 = prompt("userInput2");
            }
            console.log(userInput1 % userInput2);
        }

        function leapYear(){
            let EnterYear = prompt("EnterYear");
            while(isNumber(EnterYear)!=true){
                EnterYear = prompt("EnterYear");
            }
if (EnterYear%4!=0){
    console.log("common year");
}
else if (EnterYear%100!=0){
    console.log("leap year"); 
}
else if (EnterYear%400!=0){
    console.log("common year"); 
}
else {
    console.log("leap year"); 
}
        }