function isNumuber(toCheck) {
    let result = true;
    let zeroToNine = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let toCheckArray = toCheck.split("");
    for (let x of toCheckArray) {
        if (!(x in zeroToNine)) {
            result = false;
            break;
        }
    }

    return result;
}
// console.log(isNumuber("23"));
// console.log(isNumuber("2a3"));
// console.log(isNumuber("2j3"));

function convertToNumber(toConvert) {
    if (isNumuber(toConvert) == true) {
        return (parseInt(toConvert));
    }
    else {
        return "error";
    }

}
// console.log(convertToNumber("23"));
// console.log(convertToNumber("2a3"));
// console.log(convertToNumber("2j3"));