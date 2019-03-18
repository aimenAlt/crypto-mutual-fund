const mongoose = require('mongoose');

const investorSchema = new mongoose.Schema({
  investor_name: String,
  investments: Array
})

const InvestorsModel = mongoose.model('investors', investorSchema, 'investors');

module.exports = InvestorsModel;