
function smaller3(){
    while(!isNumber(i))
    var i = prompt("Enter amount of varibles to check");
    var numbers = [];
    var b = true
    k = 0;
    while (k < i ){
        userInput = parseFloat(prompt("Please enter number: " + k));
        if(isNumber(userInput)) {
            k++;
            numbers.push(userInput);
        }
        else 
            userInput = parseFloat(prompt("Please enter number: " + k))   
    }
    var min;
    for (var j = 0; j < i; j++){
        min = compare(min,numbers[j]);
    }
    console.log(numbers);
    console.log(min);
}

function compare(num1,num2){
    if (num1 == null)
        return num2;
    if(num1 > num2)
        return num2;
    else 
        return num1;
}