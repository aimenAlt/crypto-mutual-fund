const mongoose = require('mongoose');

const investorSchema = new mongoose.Schema({
  investor_name: String,
  investor_email: String,
  investments: [
    {
      amount: Number,
      time_deposited: Number,
      all_funds_before: Number
    }
  ]
})

const InvestorsModel = mongoose.model('investors', investorSchema, 'investors');

module.exports = InvestorsModel;