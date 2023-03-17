exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  reduceString: function (str, a) {


    var reduceString = "";
    var i = 0;
    var count = 1;
    while (i < str.length) {
      if (str.charAt(i) === str.charAt(i + 1) && i < str.length - 1) {
        i++;
        count++;
      } else {

        if (count < a) {
          reduceString += str.charAt(i);
        } else {
          for (var j = 0; j < a; j++) {
            reduceString += str.charAt(i);
          }

          if (i === str.length - 1 && str.charAt(i) == str.charAt(i + 1)) {
            i = str.length;
          }
          if (i === str.length - 1 && str.charAt(i) !== str.charAt(i + 1)) {
            reduceString += str.charAt(i + 1);
          }

        }
        count = 1;
        i++;
      }
    }
    console.log(reduceString);

    return reduceString;
  },

  wordWrap: function (str, cols) {

    var ans = '';
    var i = 0;
    while (i < str.length) {
      if (str[i + cols] === ' ') {
        ans += str.substr(i, cols);
        ans += '\n';
        i += cols + 1;
      }
      else {
        while (i < str.length && str[i] !== ' ') {
          ans += str[i++];
        }
        ans += '\n';
        i++;
      }
    }
    return ans.trim();

  },

  reverseString: function (str) {

    var reverseString = "";
    for (var char of str) {
      reverseString = char + reverseString;
    }
    return reverseString;
  }
};