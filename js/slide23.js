function smaller(){
  var str = prompt("Please enter two numbers in the format of 23 34");
  num = str.split(" ");
  while(!(Number(num[0]) && Number(num[1]))){
    str = prompt("Please enter two numbers in the format of 23 34");
    num = str.split(" ");
  }
  console.log(Math.min(Number(num[0]), Number(num[1])));
}

function smaller3(){
  var str = prompt("Please enter two numbers in the format of 23 34 45");
  num = str.split(" ");
  while(!(Number(num[0]) && Number(num[1]) && Number(num[2]))){
    str = prompt("Please enter two numbers in the format of 23 34 45");
    num = str.split(" ");
  }
  console.log(Math.min(Number(num[0]), Number(num[1]),Number(num[2])));
}