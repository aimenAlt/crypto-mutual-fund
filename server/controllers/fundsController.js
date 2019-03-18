const FundsModel = require('./../../database/models/Funds.js');

const getAllFunds = (req, res) => {
  FundsModel.find((err, data, response) => {
    if (err) {
      res.sendStatus(400);
      throw ("err");
    } else {
      res.sendStatus(200);
      res.end(data);
    }
  });
};

const addFunds = (req, res) => {
  FundsModel.findOneAndUpdate( {crypto_symbol: req.body.crypto_symbol}, req.body, {upsert: true}, (err, response) => {
    if(err) {
      res.sendStatus(500);
      throw (err);
    } else {
      if (response) {
        res.status(200).sendStatus(200);
      } else {
        res.status(201).sendStatus(201);
      }
    }
  });
};



module.exports = {
  getAllFunds,
  addFunds
}