

function smaller(){
    let myData=[0]
    while(myData[0] = prompt("Enter 1st Number: ")&&(myData[1] = prompt("Enter 2nd Number: "))){
        if (isNaN(myData[0, 1])) {
            alert("Enter Numbers only!");
            break;
        }
        else{ 
            myData.sort(function(a, b){return a-b});
            }
            return myData[0];
    }
}
console.log(smaller());

console.log("function smaller complete");

function smaller3(){
    let myData=[0]
    while(myData[0] = prompt("Enter 1st Number: ")&&(myData[1] = prompt("Enter 2nd Number: ")&&(myData[2] = prompt("Enter 3rd Number: ")))){
        if (isNaN(myData[0, 1, 2])) {
            alert("Enter Numbers only!");
            break;
        }
        else{ 
            myData.sort(function(a, b){return a-b});
            }
            return myData[0];
    }
}
console.log(smaller3());

console.log("function smaller3 complete");