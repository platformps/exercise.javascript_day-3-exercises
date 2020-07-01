function leap() {
  let isleap;
  let intInput = window.prompt("Enter integer representing year number: ");
  debugger;
  while (isNaN(intInput == true)) {
    intInput = window.prompt(
      "Enter a valid integer representing year number: "
    );
  }

  if (intInput % 4 != 0) {
    isleap = "Common Year";
  } else if (intInput % 100 != 0) {
    isleap = "Leap Year!";
  } else if (intInput % 400 != 0) {
    isleap = "Common year";
  } else {
    isleap = "Leap Year";
  }

  console.log(isleap);
  return isleap;
}

leap();
