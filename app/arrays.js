exports = typeof window === "undefined" ? global : window;

exports.arraysAnswers = {
  indexOf: function (arr, item) {
    for (var i in arr) {
      if (arr[i] === item) {
        return Number(i);
      }
    }
    return Number(-1);
  },

  sum: function (arr) {
    var sumOfElements = 0;

    for (var i in arr) {
      if (i) {
        sumOfElements += arr[i];
      }
    }

    return Number(sumOfElements);
  },

  remove: function (arr, item) {
    var i = 0;
    var arr2 = [];
    while (i < arr.length) {
      if (arr[i] !== item) {
        arr2.push(arr[i]);
      }
      i++;
    }
    return arr2;
  },

  removeWithoutCopy: function (arr, item) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        arr.splice(i, 1);
        i--;
      }
    }

    return arr;
  },

  append: function (arr, item) {
    arr[arr.length] = item;
    return arr;
  },

  truncate: function (arr) {
    arr.length--;
    return arr;
  },

  prepend: function (arr, item) {
    arr.length++;
    for (var i = 0; i < arr.length - 1; i++) {
      arr[i + 1] = arr[i];
    }
    arr[0] = item;
    return arr;
  },

  curtail: function (arr) {
    for (var i = 0; i < arr.length - 1; i++) {
      arr[i] = arr[i + 1];
    }
    arr.length--;
    return arr;
  },

  concat: function (arr1, arr2) {
    var arr3 = [];

    for (var i = 0; i < arr1.length; i++) {
      arr3[i] = arr1[i];
    }

    for (i = 0; i < arr2.length; i++) {
      arr3[arr3.length] = arr2[i];
    }

    return arr3;
  },

  insert: function (arr, item, index) {
    for (var i = arr.length - 1; i >= index; i--) {
      arr[i + 1] = arr[i];
    }
    arr[index] = item;
    return arr;
  },

  count: function (arr, item) {
    var count = 0;
    for (var itm of arr) {
      if (itm === item) count++;
    }
    return count;
  },

  duplicates: function (arr) {
    let duplicatesArray = [];
    arr.sort((a, b) => {
      return a - b;
    });

    for (var i = 0; i < arr.length - 1; i++) {
      if (arr[i] === arr[i + 1]) {
        if (duplicatesArray.indexOf(arr[i]) == -1) duplicatesArray.push(arr[i]);
      }
    }
    return duplicatesArray;
  },

  square: function (arr) {
    let squareArray = [];

    for (var i = 0; i < arr.length; i++) {
      squareArray[i] = arr[i] * arr[i];
    }
    return squareArray;
  },

  findAllOccurrences: function (arr, target) {
    var start = 0;
    var arr2 = [];
    while (arr.indexOf(target, start) != -1) {
      start = arr.indexOf(target, start);
      arr2[arr2.length] = start++;
    }

    return arr2;
  },
};