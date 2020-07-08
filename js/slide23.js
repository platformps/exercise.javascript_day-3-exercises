function smallerOf2 (num1, num2) { 
    var num1Int = parseInt(num1);
    var num2Int = parseInt(num2);
    var num3 = Math.min(num1Int, num2Int);
    return num3;
}

function smallerOf3 (num1, num2, num3) {
    var num1Int = parseInt(num1);
    var num2Int = parseInt(num2);
    var num3Int = parseInt(num3);
    var num4 = Math.min(num1Int, num2Int, num3Int);
    return num4;
}