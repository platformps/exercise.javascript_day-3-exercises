function isNumber(number){
    if(true==isNaN(number)){
        return false;
    }
    return true;
}

function convertToNumber(string){
    return parseInt(string);
}
