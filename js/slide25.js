function input(){
    var userIn;
    do{
    userIn = [prompt("Please enter the year"),prompt("Please enter the month")];}
    while(isNaN(userIn[0]) || isNaN(userIn[0]) || userIn[0].length != 4 || userIn[1] >12 || userIn[1] == 0);
let numOfDays = 32 - new Date(userIn[0],userIn[1],32).getDate();
document.write("The number of days are "+numOfDays);
}
input();