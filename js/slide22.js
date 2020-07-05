
    
        let userInput = prompt("userInput");
        console.log("userInput is: " +userInput);
        console.log("Output is number: " +isNumber(userInput));

        let newUserInput = prompt("newUserInput");
        console.log("newUSerInput is: " +newUserInput);
        console.log("Convert to number: " +convertToNumber(newUserInput));


        function isNumber(userInput){
            return !isNaN(userInput);
        }

        function convertToNumber(newUserInput){
            return Number(newUserInput);
        }


        
            
           
           
              

              
              
             

              
            
        
    