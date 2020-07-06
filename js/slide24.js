var year;
year = window.prompt("Input the First integer", "0");
function leapYear(year) {


if((parseInt(year, 10) == ((year % 100 === 0) && (year % 400 === 0) && (year % 4 === 0)))); 
return "true";

}
