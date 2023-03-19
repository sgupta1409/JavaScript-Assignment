exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {
  listFiles: function (data, dirName = "") {

    let filesArray = {};
    let arr = [];

    filesArray = recursion(data, filesArray, arr);

    if (dirName !== "") {
      return filesArray[dirName];
    }

    return filesArray[data.dir];


    function recursion(data, filesArray, arr) {
      let dir = data.dir;
      arr.push(dir);
      filesArray[dir] = [];


      for (var i = 0; i < data.files.length; i++) {

        if (typeof data.files[i] === 'object') {
          recursion(data.files[i], filesArray, arr);
        } else {
          for (let j in arr) {
            filesArray[arr[j]].push(data.files[i]);
          }
        }

      }
      arr.splice(arr.indexOf(dir), 1);

      return filesArray;
    }


  },


  permute: function (arr) {

    var permutedArray = [];

    var temp = [];

    return recursionArray(arr);

    function recursionArray(arr) {
      var item;
      for (var i = 0; i < arr.length; i++) {
        item = arr.splice(i, 1)[0];

        temp.push(item);

        if (arr.length) {
          recursionArray(arr);
        } else {
          logResult();
        }

        arr.splice(i, 0, item);
        temp.pop();
      }

      return permutedArray;

    }

    function logResult() {
      permutedArray.push(

        temp.slice()

      );
    }

  },

  fibonacci: function (n) {

    if (n === 0) {
      return 0;
    }
    if (n === 1) {
      return 1;
    }
    return this.fibonacci(n - 1) + this.fibonacci(n - 2);
  },

  validParentheses: function (n) {

    var arrayOfBrackets = [];
    var str = "";
    function generate(open, closed, str) {
      if (open == 0 && closed == 0) {
        arrayOfBrackets.push(str);
      }

      if (open > 0) {
        generate(open - 1, closed + 1, str + '(');
      }
      if (closed > 0) {
        generate(open, closed - 1, str + ')');
      }
      return arrayOfBrackets;
    }
    return generate(n, 0, str);

  }
};