smallerof3();

function isNumber(userInput){
    return !isNaN(userInput);
}

function smallerof2 () {
    let userInput1 = prompt("userInput1");
while(isNumber(userInput1)!=true){
    userInput1 = prompt("userInput1");
}

let userInput2 = prompt("userInput2");
while(isNumber(userInput2)!=true){
    userInput2 = prompt("userInput2");
}

if (userInput1<userInput2){
    console.log(userInput1 + " is smaller number");
}
else{
    console.log(userInput2 + " is smaller number");
}
}


function smallerof3 () {
    let userInput1 = prompt("userInput1");
while(isNumber(userInput1)!=true){
    userInput1 = prompt("userInput1");
}

let userInput2 = prompt("userInput2");
while(isNumber(userInput2)!=true){
    userInput2 = prompt("userInput2");
}

let userInput3 = prompt("userInput3");
while(isNumber(userInput3)!=true){
    userInput3 = prompt("userInput3");
}

if (userInput1<userInput2){
    if(userInput1 < userInput3)
    console.log("smallestnumber is: " +userInput1);
    else
    console.log("smallestnumber is: " +userInput3 );
}
else{
    if(userInput2 < userInput3)
    console.log("smallestnumber is: " +userInput2);
    else
    console.log("smallestnumber is: " +userInput3);
}

} 




       