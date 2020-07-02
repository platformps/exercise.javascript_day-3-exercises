function daysOfMonth() {
      var year=prompt("enter the year in 4 digits");
      var month=prompt("enter the month between 1 and 12");

      var  v = new Date(year, month,0).getDate();
      console.log("Days in Month"+ v);
}
