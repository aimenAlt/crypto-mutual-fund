const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/crypto');

const db = mongoose.connection;

const investorSchema = new mongoose.Schema({
  investor_name: String,
  investor_email: String,
  investments: Array
})

const Investors = mongoose.model('investor', investorSchema);

const empty1 = new Investors ({
  investor_name: "Aimen Altaiyeb",
  investor_email: "ssj21000@gmail.com",
  investments: [
    {
      amount: 1000,
      time_deposited: new Date,
      all_funds_before: 0
    }
  ]
});

Investors.create(empty1, (err, res) => {
  if (err) {
    throw ("error!");
  } else {
    console.log(res);
  }
});

///////////////////////////////////////////////////////

const funds = new mongoose.Schema({
  crypto_symbol: String,
  crypto_name: String,
  amount_owned: Number
})

const Funds = mongoose.model('fund', funds);

const empty2 = new Funds ({
  crypto_symbol: "USD",
  crypto_name: "United States Dollar",
  amount_owned: 1000
});

Funds.create(empty2, (err, res) => {
  if (err) {
    throw ("error!");
  } else {
    console.log(res);
  }
});


module.exports = db;