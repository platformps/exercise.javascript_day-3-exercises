function month(){
  var string = prompt("Please enter year and month (format 2019 2)");
  var num = string.split(" ");
  const big = [1,3,5,7,8,10,12];
  const small = [4,6,9,11];
  if(big.includes(Number(num[1])))
    console.log("31 days");
  else if(small.includes(Number(num[1])))
    console.log("30 days");
  else if(lphelper(Number(num[0])))
  {
    console.log("29 days");
  }
  else
  {
    console.log("28 days");
  }
}