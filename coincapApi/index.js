const axios = require('axios');

const getAllCryptos = () => {
  console.log("hi");
  axios.get('http://api.coincap.io/v2/assets?limit=300').then( data => {
    console.log("Whaaah!");
    this.setState({
      cryptoList: data.data
    });
  }).catch((err) => {
    console.log(Object.keys(err));
    console.log("error!");
  });
}

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
