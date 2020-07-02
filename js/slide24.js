function leap(){
    var year = window.prompt("Please input a year");
    //console.log(year); //just for displaying during testing
    leapcheck(year);
  }
  //leap();
  function leapCheck(year){
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