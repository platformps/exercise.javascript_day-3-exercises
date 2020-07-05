//redid without using parseInt
function isNumber (str) {
  for ( let i = 0; i < str.length; i++ ) {
    if (!(str[i] > "0" && str[i] < "9")) {
      return false;
    }
  }
  return true;
}

let testCases = {
  test1: {input:"23", output: true},
  test2: {input:"a23", output: false},
  test3: {input:"aj3", output: false },
}

function runTests(testCases, func) {
  let i = 0;
  for ( var o in testCases ) {
    i++;
    console.log(`Running test case ${i} :\n`);
    let input = testCases[o].input;
    let expectedOutput = testCases[o].output;
    let actualOutput = func(input);
    console.log(`\tFor input ${input} : \n`);
    console.log(`\t\tExpected output is: ${expectedOutput}\n`);
    console.log(`\t\tActual output is: ${actualOutput}\n`);
  }
}

runTests(testCases, isNumber);
/*
function isNumber (str) {
  let strToInt = parseInt(str);
  return strToInt == str;
}
*/

