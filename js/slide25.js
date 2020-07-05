function leap() {

  let months = {
    1: 31,
    2: 28,
    3: 31,
    4: 30,
    5: 31,
    6: 30,
    7: 31,
    8: 31,
    9: 30,
    10: 31,
    11: 30,
    12: 31,
  };
  
  let yearMonthStr = prompt("Enter a year and month number: ");
  let arr = yearMonthStr.split(" ");
  let yearStr = arr[0];
  let monthStr = arr[1];
  let daysInMonth = arr[1];

  if (parseInt(monthStr) == 2) {
    if (isLeapYear(parseInt(yearStr))) {
      daysInMonth = 29;
    }
  }
  else {
    daysInMonth = months[monthStr];
  }

  console.log(`There are ${daysInMonth} days in month ${monthStr} of year ${yearStr}`);
  done = true;
}

leap();


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

