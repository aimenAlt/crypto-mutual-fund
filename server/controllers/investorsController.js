const InvestorsModel = require('./../../database/models/Investors.js');

const getAllInvestors = (req, res) => {
  console.log("hi");
  InvestorsModel.find((err, data, response) => {
    console.log("what?");
    if (err) {
      console.log('err');
      res.sendStatus(400);
      throw ("err");
    } else {
      res.status(200);
      res.end(JSON.stringify(data));
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

// const investmentSort = (array) => {
//   let length = array.length;
//   let indexOfSmallest = 0;
//   let orderedArray = 
//   for (var i = 0; i < length; i++) {
//     let indexOfSmallest = 0;
//     for (var j = 0; j < array.length; i++) {
//       if (array[j].time_deposited < array[indexOfSmallest].time_deposited) {
//         indexOfSmallest = j;
//       }
//     }
    
//   } 
// }


module.exports = {
  getAllInvestors,
  addInvestment
}

// amount: 1000,
// time_deposited: new Date,
// all_funds_before: 0
