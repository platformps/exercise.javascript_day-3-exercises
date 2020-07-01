

 function smaller(){
    var number;
    do{number= [prompt("Enter first number"),prompt("Enter the second number")];}
    while(isNaN(number[0]) || isNaN(number[1]));

    if(number[0]<number[1])document.write("The smaller number is "+number[0]+". \n");
    else
    document.write("The smaller number is "+number[1]+". \n");
 }
    function smaller3(){
        var number;
        do{number=[prompt("Enter first number"),prompt("Enter the second number"), prompt("Enter the third number")];}
        while(isNaN(number[0]) || isNaN(number[1]) || isNaN(number[2]));

     var temp;
        if(number[0]<=number[1])temp=number[0];
        else if(number[1]<=number[0])temp=number[1];
        if(temp <= number[3]) temp= number[3];
        document.write("\n The smaller number is "+temp);
}
smaller();
smaller3();