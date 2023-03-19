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

    var pr = new Promise((resolve,reject)=>{
      fetch(url).then((res)=> res.json()).then((res)=>{

       var result= res.people.map((item,index)=>{
          return item.name;
        })
        resolve(result.sort());
     
     });
    });

    return pr;
     
  },

};