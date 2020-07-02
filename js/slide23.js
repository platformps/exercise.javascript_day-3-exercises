 function smaller()
 {
    var x=prompt("enter the value of x");
    var y=prompt("enter the value of y");
    if(isNaN(x)&& isNaN(y))
       prompt("Reenter the correct numbers");
    else if(x>y)
       console.log("y is smaller" +y);
    else
       console.log("x is smaller" +x);
 }

 function smaller3()
 {
  var x=prompt("enter the value of x");
  var y=prompt("enter the value of y");
  var z=prompt("enter the value of z");
    if(isNaN(x)&& isNaN(y)&& isNaN(z))
    prompt("Reenter the correct number");
    else
     if((x<y)&&(x<z))

      console.log("x is smaller" +x);

     else if(y<z)
      console.log("y is smaller"+y);
      else
      console.log("z is smaller"+z);
   }


