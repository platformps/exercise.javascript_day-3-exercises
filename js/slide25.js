function month() {
  let isleap;
  let days;
  let intInput = window.prompt("Enter an integer representing a year number: ");
  debugger;

  //checking for valid input for year #
  while (isNaN(intInput == true)) {
    intInput = window.prompt(
      "Enter a valid integer representing YEAR number: "
    );
  }

  let monthInt = window.prompt("Enter an iteger repenting a month number: ");
  while (isNaN(monthInt == true) || monthInt < 0 || monthInt > 12) {
    monthInt = window.prompt(
      "Enter a valid integer representing MONTH number: "
    );
  }
  debugger;
  //checking to see if it is a common year or a leap year.
  if (intInput % 4 != 0) {
    isleap = "Common Year";
  } else if (intInput % 100 != 0) {
    isleap = "Leap Year!";
  } else if (intInput % 400 != 0) {
    isleap = "Common Year";
  } else {
    isleap = "Leap Year!";
  }

  if (isleap == "Common Year") {
    days = monthDaysCommon(monthInt, days);
  } else if (isleap == "Leap Year!" && monthInt == 2) {
    days = 29;
  }
  console.log(intInput, monthInt);
  console.log(days);

  //return days;
}

function monthDaysCommon(monthInt, days) {
  if (monthInt == 1) {
    days = 31;
  } else if (monthInt == 2) {
    days = 28;
  } else if (monthInt == 3) {
    days = 31;
  } else if (monthInt == 4) {
    days = 30;
  } else if (monthInt == 5) {
    days = 31;
  } else if (monthInt == 6) {
    days = 30;
  } else if ((monthInt = 7)) {
    days = 31;
  } else if ((monthInt = 8)) {
    days = 31;
  } else if ((monthInt = 9)) {
    days = 30;
  } else if ((monthInt = 10)) {
    days = 31;
  } else if ((monthInt = 11)) {
    days = 30;
  } else {
    days = 31;
  }

  return days;
  //edits by Laura Godinez Testing Push
}

month();
