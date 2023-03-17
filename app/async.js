exports = typeof window === "undefined" ? global : window;
exports.asyncAnswers = {
  async: function (value) {
    var pr = new Promise((res, rej) => {
      if (value) {
        res(value);
      } else {
        rej(value);
      }
    });
    return pr;
  },

  manipulateRemoteData: function (url) {

    //  var data =  await fetch(url);
    //  data = await data.text;
    //  data = JSON.parse(data);
    //   data.sort();
    //   return data;

  },

};