const axios = require('axios');
const jsonp = require('jsonp');

function getAllCryptos (req, res) {
  console.log("hi");
  axios.get('http://api.coincap.io/v2/assets?limit=300').then( data => {
    console.log("Whaaah!");
    // console.log(data);
    res.send(JSON.stringify(data.data.data));
    // this.setState({
    //   cryptoList: data.data
    // });
  }).catch((err) => {
    console.log(Object.keys(err));
    console.log("error!");
  });
  // jsonp('http://api.coincap.io/v2/assets?limit=300', {name: "stuff"}, function (err, data) {
  //   if (err) {
  //     throw ("error!");
  //   } else {
  //     console.log(JSON.parse(data))
  //     console.log("hi");
  //     console.log(data.data[0]);
  //     console.log("hi");
  //     this.setState({
  //       cryptoList: data.data
  //     });
  //     console.log(this.state);
  //   }
  // });
};

function getLiveCryptoData() {
  let link = 'wss://ws.coincap.io/prices?assets=';
  for(let i = 0; i < arguments.length; i++) {
    link += arguments[i];
    if (i < arguments.length - 1) {
      link += ",";
    }
  }
  return new WebSocket(link);
}

module.exports = {
  getAllCryptos,
  getLiveCryptoData
};
