const InvestorsModel = require('./../../database/models/Investors.js');

const getAllInvestors = (req, res) => {
  InvestorsModel.find((err, data, response) => {
    if (err) {
      res.sendStatus(400);
      throw ("err");
    } else {
      res.sendStatus(200);
      res.end(data);
    }
  });
};

const addInvestment = (req, res) => {
  InvestorsModel.findOneAndUpdate( {investor_email: req.body.investor_email}, req.body, {upsert: true}, (err, response) => {
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
  getAllInvestors,
  addInvestment
}