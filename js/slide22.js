function isNumber(expression) {
    // check if given string is a number
    //console.log("inside isNumber");
    return !isNaN(expression);
}

function convertToNumber(expression){
	return (expression.match(/\d+/g));
}