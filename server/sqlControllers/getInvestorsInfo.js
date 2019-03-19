const _ = require('lodash');
const { funds, investorsInfo } = require('./../../sqlDatabase/index.js')

function getFunds (req, res) {
  funds((err, data) => {
    console.log(err);
    if (err) {
      throw ('error!')
    } else {
      res.send(JSON.stringify(data));
    }
  });
}

function getInvestorsData (req, res) {
  // console.log(investorsInfo);
  investorsInfo((err, data) => {
    console.log(err);
    if (err) {
      throw ('error!')
    } else {
      res.send(JSON.stringify(calculatePercent(data)));
    }
  });
}

function calculatePercent(array) {
  let investors = createInvestorList(array);
  let mutualFunds = 0;
  let firstInvestment = array[0];
  mutualFunds += firstInvestment.investment_amount
  investors[firstInvestment.investor_id].percentOwned = 100.0;
  investors[firstInvestment.investor_id].invested += firstInvestment.investment_amount
  for (var i = 1; i < array.length; i++) {
    let tempMutualFunds = array[i].total_before;
    let tempPercent = 100.0;
    let tempPercentWorth = (array[i].investment_amount/tempMutualFunds) * tempPercent;
    console.log("what? ", array[i].investment_amount);
    tempMutualFunds += array[i].investment_amount;
    tempPercent += tempPercentWorth;
    let hundredDivider = tempPercent / 100.0;
    console.log("HD: ", tempPercent);
    tempPercentWorth = tempPercentWorth / hundredDivider;
    investors = _.mapValues(investors, (element) => {
      console.log(hundredDivider);
      element.percentOwned = element.percentOwned / hundredDivider;
      if (element.id === array[i].investor_id) {
        element.percentOwned += tempPercentWorth;
        element.invested += array[i].investment_amount;
      }
      return element;
    });
  }
  console.log(investors);
  return investors;
}


function createInvestorList (array) {
  let investors = {};
  for(let i = 0; i < array.length; i++) {
    if (!(array[i].investor_id in investors)) {
      investors[array[i].investor_id] = {
        id: array[i].investor_id,
        name: array[i].name,
        email: array[i].email,
        percentOwned:0,
        invested:0
      }
    }
  }
  return investors;
}

module.exports = {
  getFunds,
  getInvestorsData
}