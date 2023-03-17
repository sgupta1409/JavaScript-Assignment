exports = typeof window === 'undefined' ? global : window;

exports.numbersAnswers = {
  valueAtBit: function (num, bit) {

    var binaryNumber = this.convertToBinary(num);
    return Number(binaryNumber.charAt(binaryNumber.length - bit));
  },

  base10: function (str) {

    var decimalNumber = 0;
    for (var i = str.length - 1; i >= 0; i--) {
      var numberAtIndex = Number(str.charAt(i));
      if (numberAtIndex !== 0) {
        decimalNumber += Math.pow(2, str.length - i - 1);
      }
    }
    return decimalNumber;
  },

  convertToBinary: function (num) {
    var givenNum = num;
    var binaryNumberString = '';
    while (givenNum > 0) {
      var remainder = givenNum % 2;
      givenNum = Math.floor(givenNum / 2);
      binaryNumberString = remainder + binaryNumberString;
    }
    while (binaryNumberString.length < 8) {
      binaryNumberString = '0' + binaryNumberString;
    }
    return binaryNumberString;
  },

  multiply: function (a, b) {
    let stringA = a.toString();
    let stringB = b.toString();
    let arrOfA = stringA.split('.');
    let arrOfB = stringB.split('.');
    let decimalCount = 0;
    if (arrOfA.length > 1) decimalCount += arrOfA[1].length;
    if (arrOfB.length > 1) decimalCount += arrOfB[1].length;

    return Number((a * b).toFixed(decimalCount));
  }
};