function month() {
	var expression = window.prompt("Enter year month:");
	var arr = expression.split(" ");
	yr = arr[0];
	mn = arr[1];

	var days;

	var monthsAndDays = new Map( [ [1,31], [2,28], [3,31], [4,30], [5,31], [6,30], [7,31], [8,31], [9,30], [10,31], [11,30], [12,31], ] );

	while (!isYear(yr))
		yr = window.prompt("Enter a four digit valid year: ");
	while (!isMonth(mn))
		mn = window.prompt("Enter a valid month (between 1 and 12): ");

	if (isLeap(yr) && mn == 2 )
			days = 29;
	else
			days = monthsAndDays.get(parseInt(mn));
		
		return "There are " + days + " days in " +  mn + " month of " + yr + " year."
}

function isYear(yr){

	if (!isNaN(yr) && yr.length == 4)
			return true;
		else
			return false;
}

function isLeap (yr) {
	
	if (isYear(yr)){
		if (parseInt(yr) % 4 !=0 )
			return false;
		else if (parseInt(yr) % 100 != 0)
			return true;
		else if (parseInt(yr) % 400 != 0)
			return false;
		else
			return true;
	}
}

function isMonth(mn){
	if (!isNaN(mn) && (mn >= 1) && (mn <=12))
		return true;
	else
		return false;
}