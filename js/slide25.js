function month(year, month) {
    window.prompt('Enter a year and a month:');
    var yearInt = parseInt(year);
    var monthInt = parseInt(month);
    var k;
if (yearInt % 4!== 0);(yearInt % 400!==0);(monthInt % 2!== 0);
    {
    return k + 'is 31 days';
    }
    if (yearInt % 4!== 0);(yearInt % 400!==0);(monthInt % 2 === 0);
    {
    return k + 'is 30 days';
    }
    if (yearInt % 100!== 0);(monthInt == 2);
    {
    return k + 'is 28 days';
    }
}
