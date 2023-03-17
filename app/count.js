exports = typeof window === 'undefined' ? global : window;

exports.countAnswers = {
  count: function (start, end) {


    console.log(start);
    var interval = setInterval(func, 100);

    function func() {
      if (start < end) {
        start++;
        console.log(start);
      } else {
        clearInterval(interval);
      }
    }


    return {
      cancel: function () {
        clearInterval(interval);
      }
    }
  }
};