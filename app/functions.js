exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function (fn, arr) {

    var ans = fn(...arr);
    return ans;
  },

  speak: function (fn, obj) {
    let func = fn.call(obj);

    return func;
  },

  functionFunction: function (str) {

    function func(str2) {
      return str + ", " + str2;
    }

    return func;
  },

  makeClosures: function (arr, fn) {

    var arr2 = [];
    for (let i = 0; i < arr.length; i++) {
      function f() {
        return fn(arr[i]);
      }
      arr2.push(f);
    }
    return arr2;

  },

  partial: function (fn, str1, str2) {

    const partial = fn.bind(null, str1, str2);
    return partial;
  },

  useArguments: function () {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
      sum += arguments[i];
    }
    return sum;
  },

  callIt: function (fn) {
    
    let keys = Object.values(arguments);
    let argsPassed = keys.splice(1,keys.length);
    fn(...argsPassed);
  },

  partialUsingArguments: function (fn) {

    let values = Object.values(arguments);
    let argsPassed = values.splice(1,values.length);

    let f =  fn.bind(null,...argsPassed);
    return f;

  },

  curryIt: function (fn) {

  let f1 = fn.bind(null,);n
  let f2 = f1.bind(null,);
  let f3 = f2.bind(null,);
  }
};