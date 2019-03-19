const { getAllCryptos } = require('./../../coincapApi/index.js');

function getCryptos (req, res) {
  res.send(JSON.stringify(getAllCryptos()));
}

module.exports = {
  getCryptos
}