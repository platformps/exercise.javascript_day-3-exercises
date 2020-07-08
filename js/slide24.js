function leap(year) {
    var i = parseInt(year);
    if(i % 4 !== 0 ) {
        return i + ' is a common year';
    }
    else if(i % 100 !== 0) {
        return i + ' is a leap year';
    }
    else if(i % 400 !== 0) {
        return i + ' is a common year';
    }
    else {
        return i + ' is a leap year';
    }
}