function smaller(){
    let array = [];
    do{
        var userInput = window.prompt("Please Input 2 numbers:")
         array = userInput.split(" ");
        for(var i=0; i< array.length;i++){ array[i] = +array[i];}
    } while(isNumberArray(array) == false);

//split numbers and save in array before comparing and returning the smaller number

 for(let i=0;i< array.length; i++){
   if (array[i] < array[i+1]) {
     let smallnum = parseInt(array[i]);
     return smallnum;
 }
 return parseInt(array[i+1]);
}
}
//---------check to see if all elements in array are numbers
console.log(smaller());
function isNumberArray(someArray){
    var res = someArray.every(function(element) 
           { return typeof element == 'number';});
    return res; //returns false if any element is not a number
    }
    //-------smaller3 function
    function smaller3(){
        var userInput = prompt("Please enter 3 numbers separated by a space: ");
        num = str.split(" ");
        while(!(Number(num[0]) && Number(num[1]) && Number(num[2]))){
          str = prompt("Please enter 3 numbers separated by a space: ");
          num = str.split(" ");
        }
        console.log(Math.min(Number(num[0]), Number(num[1]),Number(num[2])));
      }