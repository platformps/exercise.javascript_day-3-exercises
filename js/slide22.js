//Function to check is an input is a number. Returns true or False
function isNumber(someNumber){
    var output = !isNaN(someNumber);
         return output;
 }
 console.log(isNumber("123"));  //True
 console.log(isNumber("a23"));   //False
 console.log(isNumber("2j3"));  //False
 
 //----------------------------------------
 //Using Regex
 // function isNumber(value) {
 //     return /^-{0,1}\d+$/.test(value);
 // }
 //--------------------------------------------
 
 //A function to check is the array has all Numeric elements
 // Returns true or False
 
 var array=["12","a23","4j5","55"];
 var array1=["12","23","45","55","9"]; // numbers in quotes
 var someArray1=[12,23,55,71,9];
 
 function isNumberArray(someArray){
 var res = someArray.every(function(element) 
        { return typeof element == 'number';});
 return res; //returns false if any element is not a number
 }
 
 console.log(isNumberArray(array));  //Returns False
 console.log(isNumberArray(array1));  //Returns False
 console.log(isNumberArray(someArray1)); // Returns true
 //-----------------------------------------------
 ////A function to convert string to Integer
 // Returns Integer number
 function convertToNumber(value){
 return parseInt(value);
 }
 console.log(convertToNumber("23"));
 
 
 