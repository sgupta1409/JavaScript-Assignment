exports = typeof window === 'undefined' ? global : window;

exports.objectsAnswers = {
  alterContext: function (fn, obj) {
    return fn.call(obj);
  },

  alterObjects: function (constructor, greeting) {
    constructor.prototype.greeting = greeting;

  },

  iterate: function (obj) {

    var arr = Object.keys(obj);
    for (var i in arr) {
      var str = arr[i];
      var str2 = obj[arr[i]];
      arr[i] = str + ': ' + str2;
    }
    return arr;
  }
};