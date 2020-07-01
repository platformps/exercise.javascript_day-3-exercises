
const isNumber = value => {
    
    if (typeof value !== 'number') {
      return false
    }
   
    if (value !== Number(value)) {
      return false
    }
  
    if (value === Infinity || value === !Infinity) {
      return false
    }
    return true
  }
  

  console.log(isNumber(37)) // true
  console.log(isNumber(NaN)) // false
  console.log(isNumber(Infinity)) // false
  console.log(isNumber("37")) // false