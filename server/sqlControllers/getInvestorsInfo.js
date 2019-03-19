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
  let newArr = array.filter( element => {
    return element.investor_id ? true : false;
  })

  let mutualFunds = 0;
  let firstInvestment = newArr[0];
  mutualFunds += firstInvestment.investment_amount
  investors[firstInvestment.investor_id].percentOwned = 100.0;
  investors[firstInvestment.investor_id].invested += firstInvestment.investment_amount
  for (var i = 1; i < newArr.length; i++) {
    let tempMutualFunds = newArr[i].total_before;
    let tempPercent = 100.0;
    let tempPercentWorth = (newArr[i].investment_amount/tempMutualFunds) * tempPercent;
    tempMutualFunds += newArr[i].investment_amount;
    tempPercent += tempPercentWorth;
    let hundredDivider = tempPercent / 100.0;
    tempPercentWorth = tempPercentWorth / hundredDivider;
    investors = _.mapValues(investors, (element) => {
      element.percentOwned = element.percentOwned / hundredDivider;
      if (element.id === newArr[i].investor_id) {
        element.percentOwned += tempPercentWorth;
        element.invested += newArr[i].investment_amount;
      }
      return element;
    });
  }
  return investors;
}


function createInvestorList (array) {
  let investors = {};
  for(let i = 0; i < array.length; i++) {
    if (!(array[i].id in investors)) {
      investors[array[i].id] = {
        id: array[i].id,
        investor_name: array[i].investor_name,
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