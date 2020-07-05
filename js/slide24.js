function leap() {

  let done = false;
  let isLeap = false;

  while (!done) {
    let yearStr = prompt("Enter a year: ");
    if (isNumber(yearStr)) {
      let year = parseInt(yearStr);
      
      isLeap = isLeapYear(year);

      let yearType = isLeap ? "leap year" : "common year";
      console.log(`${yearStr} is a ${yearType}`);
      done = true;
    }
    else {
      console.log("Invalid. Re-enter a year.")
    }
  }

}

function isLeapYear (year) {
  
  let isLeapYear;
  
  if (!(year % 4 == 0)) {
    isLeapYear = false;
  }
  else if (!(year % 100 == 0)) {
    isLeapYear = true;
  }
  else if (!(year % 400 == 0)) {
    isLeapYear = false;
  }
  else {
    isLeapYear = true;
  }

  return isLeapYear;

}


function isNumber (str) {
  for ( let i = 0; i < str.length; i++ ) {
    if (!(str[i] > "0" && str[i] < "9")) {
      return false;
    }
  }
  return true;
}

leap();