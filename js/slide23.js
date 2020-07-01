function smaller() {
  let smallNum;
  let inputNumber1 = window.prompt("Enter a number a: ");
  let inputNumber2 = window.prompt("Ener another number b: ");

  //debugger;

  while (isNaN(inputNumber1) == true) {
    inputNumber1 = window.prompt("Enter a valid number a: ");
  }

  while (isNaN(inputNumber2) == true) {
    inputNumber2 = window.prompt("Enter a valid number b: ");
  }

  if (parseFloat(inputNumber1) > parseFloat(inputNumber2)) {
    smallNum = inputNumber2;
  } else if (parseFloat(inputNumber1) < parseFloat(inputNumber2)) {
    smallNum = inputNumber1;
  } else if (inputNumber1 == inputNumber2) {
    smallNum = "The numbers are of equal value.";
  }
  return smallNum;
}

function smaller3() {
  let smallerNum;
  let inputNumber1 = window.prompt("Enter a number a: ");
  let inputNumber2 = window.prompt("Enter another number b: ");
  let inputNumber3 = window.prompt("Enter a third number c: ");

  while (isNaN(inputNumber3) == true) {
    inputNumber1 = window.prompt("Enter a valid number a: ");
  }

  while (isNaN(inputNumber2) == true) {
    inputNumber2 = window.prompt("Enter a valid number b: ");
  }

  while (isNaN(inputNumber3) == true) {
    inputNumber3 = window.prompt("Enter a valid number c: ");
  }

  if (
    parseFloat(inputNumber1) < parseFloat(inputNumber2) &&
    parseFloat(inputNumber1) < parseFloat(inputNumber3)
  ) {
    smallerNum = inputNumber1;
  } else if (
    parseFloat(inputNumber1) > parseFloat(inputNumber2) &&
    parseFloat(inputNumber3) > parseFloat(inputNumber2)
  ) {
    smallerNum = inputNumber2;
  } else if (
    parseFloat(inputNumber3) < parseFloat(inputNumber1) &&
    parseFloat(inputNumber3) < parseFloat(inputNumber2)
  ) {
    smallerNum = inputNumber3;
  } else if (inputNumber1 == inputNumber2) {
    smallerNum = "The first and second numbers are of equal value.";
  } else if (inputNumber1 == inputNumber3) {
    smallerNum = "The first and third numbers are of equal value.";
  } else if (inputNumber2 == inputNumber3) {
    smallerNum = "the second and third numbers are of equal value.";
  }
  return smallerNum;
}
/*
1==2
1==3
2==3
*/

console.log(smaller());
console.log(smaller3());
