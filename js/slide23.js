

function smaller(){
    let int1 ="";
    let int2 = "";
    do{
         int1 = prompt("Enter an integer")
    }while(!(isNumuber(int1)));
    do{
         int2 = prompt("Enter an integer")
    }while(!(isNumuber(int2)));

    num1 = parseInt(int1);
    num2 = parseInt(int2);
    if(int1 < int2){
        console.log(int1);
    }
    else{
        console.log(int2);
    }
}
smaller();

