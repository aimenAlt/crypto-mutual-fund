const mongoose = require('mongoose');

const funds = new mongoose.Schema({
  crypto_symbol: String,
  crypto_name: String,
  amount_owned: Number
})

const FundsModel = mongoose.model('funds', funds, 'funds');

module.exports = FundsModel;


