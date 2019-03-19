const { newFunds,   newInvestor, newInvestment, updateFunds } = require('./../../sqlDatabase/index.js')

function addNewFunds (req, res) {
  newFunds(req.body, (err, data) => {
    if (err) {
      res.sendStatus(400);
      throw ("error!");
    } else {
      res.sendStatus(201);
    }
  })
}

function addNewInvestor (req, res) {
  newInvestor(req.body, (err, data) => {
    if (err) {
      console.log(err);
      res.sendStatus(400);
      throw ("error!");
    } else {

      updateFunds({id: 1, amount_owned: req.body.usdLeft}, (err, response) => {
        if (err) {
          console.log(err);
          res.sendStatus(400);
          throw ("error!");    
        } else {
          res.sendStatus(201);
        }
      });
    }
  })
}

function addNewInvestment (req, res) {
  newInvestment(req.body, (err, data) => {
    if (err) {
      res.sendStatus(400);
      throw ("error!");
    } else {
      let sum = req.body.currentUsd + req.body.investment_amount;
      updateFunds({id: 1, amount_owned: sum}, (err, response) => {
        if (err) {
          console.log(err);
          res.sendStatus(400);
          throw ("error!");    
        } else {
          res.sendStatus(201);
        }
      });
    }
  })
}

module.exports = {
  addNewFunds,
  addNewInvestor,
  addNewInvestment
}