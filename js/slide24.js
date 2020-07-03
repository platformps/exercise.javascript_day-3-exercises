function leap(){
    let year =0;
    let int1 = 0;
    do{
         int1 = prompt("Enter a year");
    }while(!(isNumuber(int1)));
    year = parseInt(int1); 
    if (isLeap(year)){
        console.log("leap year");
    }else{
        console.log("Common year");
    }
    

}
//leap();

function isLeap(yearToCheck){
    leap = false;
    if (yearToCheck % 4 != 0){
        leap = false;
    }
    else if(yearToCheck % 100 != 0){
        leap = true;
    }
    else if(yearToCheck % 400 != 0){
        leap = false;
    }else{
        leap = true;
    }

    return leap;
}