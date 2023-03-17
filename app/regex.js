exports = typeof window === 'undefined' ? global : window;

exports.regexAnswers = {
  containsNumber: function (str) {


    var regex = new RegExp('[0-9]', 'g');
    return regex.test(str);

  },

  containsRepeatingLetter: function (str) {


    for (var i = 65; i <= 90; i++) {
      var ch = String.fromCharCode(i);
      var regex = new RegExp(`${ch}`, 'g');
      if (regex.exec(str) != null && regex.exec(str) != null) {
        return true;
      }

    }
    for (var i = 97; i <= 122; i++) {
      var ch = String.fromCharCode(i);
      var regex = new RegExp(`${ch}`, 'g');
      if (regex.exec(str) != null && regex.exec(str) != null) {
        return true;
      }

    }
    return false;

  },

  endsWithVowel: function (str) {

    var regex = new RegExp('[aeiou]$', 'gi');

    return regex.test(str);

  },

  captureThreeNumbers: function (str) {
    var regex = new RegExp('[0-9]{3}', '');

    var arrayOfNums = regex.exec(str);
    if (arrayOfNums != null) {

      return arrayOfNums[0];
    }
    return false;

  },

  matchesPattern: function (str) {

    var regex = new RegExp('^[0-9]{3}[-][0-9]{3}[-][0-9]{4}$', 'g');
    return regex.test(str);
  },
  
  isUSD: function (str) {
    var regex = /^\$\d{1,3}(,\d{3})*(\.\d{2})?$/;
    return regex.test(str);
  }
};