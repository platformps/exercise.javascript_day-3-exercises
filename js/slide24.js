function leap(){
	var yr;
	var commonyr = "common year";
	var leapyr = "leap year";

	while (true) {
		 yr = window.prompt("Enter year: ");
		if (isNaN(yr))
			continue;
		else if (yr.length != 4)
			continue;
		else
			break;
	}

	if (parseInt(yr) % 4 !=0 )
		return commonyr;
	else if (parseInt(yr) % 100 != 0)
		return leapyr;
	else if (parseInt(yr) % 400 != 0)
		return commonyr;
	else
		return leapyr;
}
