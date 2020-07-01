function leap(){
  var year = prompt("Please input a year");
  leap(year);
}

function lphelper(year){
  var num = Number(year);
  if(num % 4 != 0)
  { console.log("It is a common year");
    return false;
  }
  else if (num % 100 != 0)
  {
    console.log("It is a leap year");
    return true;
  }
  else if (num % 400 != 0)
  {
    console.log("It is a common year");
    return false;
  }
  else 
  {console.log("It is a leap year");
  return true;
  }
}