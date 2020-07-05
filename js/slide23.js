function isNumber (str) {
  for ( let i = 0; i < str.length; i++ ) {
    if (!(str[i] > "0" && str[i] < "9")) {
      return false;
    }
  }
  return true;
}

function smaller () {

  let done = false;

  while(!done) {
    let inputStr = prompt("Enter as many integers as you like: ");
    let inputArr = inputStr.split(" ");
    let newArr = inputArr.map((arrValue) => new Object({str:arrValue, strInt:parseInt(arrValue), valid:isNumber(arrValue) }));
    let badInputArr = newArr.filter( obj => !obj.valid);
    console.log("number of bad inputs is " + badInputArr.length)
    if(badInputArr.length == 0) {
      
      newArr.sort((a, b) => a.strInt - b.strInt);
      console.log("The smallest value you entered is: " + newArr[0].strInt);
      done = true;
    }
    else {
      console.log("Re-enter your integers.");
    }
  }
}

smaller();