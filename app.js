const calculater  = {
  plus : function (a, b) {
    return a + b ;    
  },

  minus : function (a, b) {
    return a - b ;    
  },

  times : function (a, b) {
  return a * b ;    
  },

  divide : function (a, b) {
    return a / b ;    
  },

  power : function (a, b) {
    return a ** b ;    
  },
}

const plusResult = calculater.plus(2, 3);
const minusResult = calculater.minus(plusResult, 10);
const timesResult = calculater.times(10, minusResult);
const divideResult = calculater.divide(timesResult, plusResult);
const powerResult = calculater.power(divideResult, minusResult);

