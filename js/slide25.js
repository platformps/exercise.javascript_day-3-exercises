function month(){
    var userInput= prompt("Please enter year and month in 2019 2 format:");
    console.log(userInput);
    var num = userInput.split(" ");
    var days31 = [1,3,5,7,8,10,12];
    var days30 = [4,6,9,11];
    if(days31.includes(Number(num[1])))
      console.log("31 days");
    else if(days30.includes(Number(num[1])))
      console.log("30 days");
    else if(leapcheck(Number(num[0])))
    {
      console.log("29 days");
    }
    else
    {
      console.log("28 days");
    }
  }  
  alert(month());