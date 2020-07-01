function input(){
    var userIn;
    do{
    userIn = [prompt("Please enter the year"),prompt("Please enter the month")];}
    while(isNAN(userIn[0]) || isNAN(userIn[0]) || userIn[0].length != 4 || userIn[1] <=12 || userIn[1] == 0);


}
input();