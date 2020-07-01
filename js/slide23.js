function smaller() {
	//return the smaller of two numbers.
	return (helper(2));
}

function smaller3() {
	//retrun the smallest of three numbers
	return (helper(3));
}

function helper(totalNum) {
	var expression = window.prompt("input " + totalNum + " numbers: ");
	var arr = expression.split(" ");
	var small;

	for (var n = 0; n < arr.length; n++) {
		while (isNaN(arr[n])) {
			expression = window.prompt("input " + totalNum + " numbers: ");
			arr = expression.split(" ");
		}
		if (small == undefined)
			small = arr[n];
		else if (small > arr[n])
			small = arr[n];
	}

	return small;
}