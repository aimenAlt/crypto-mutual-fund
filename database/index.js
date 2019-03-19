const mysql = require('mysql');
const mysqlConfig = require('./config.js');

const connection = mysql.createConnection(mysqlConfig);


function funds(callback) {
  connection.query(`SELECT * FROM funds`, (err, response) => {
    if (err) {
      callback(err);
    } else {
      callback(null, response);
    }
  });
}

function newFunds(body, callback) {
  console.log("being called?");
  console.log(body);
  connection.query(`INSERT INTO funds (crypto_symbol, crypto_name, amount_owned) VALUES ("${body.crypto_symbol}", "${body.crypto_name}", ${body.amount_owned});`,
  (err, response, test) => {
    if (err) {
      callback(err);
    } else {
      callback(null, response);
    }
  })
}

function updateFunds(body, callback) {
  connection.query(`UPDATE funds SET amount_owned = ${body.amount_owned} WHERE id = ${body.id};`, (err, response, test) => {
    if (err) {
      callback(err);
    } else {
      callback(null, response);
    }
  })
}

function investorsInfo(callback) {
  connection.query(`SELECT investors.*, investments.investor_id, investments.investment_amount, investments.time_invested, investments.total_before FROM investors LEFT JOIN investments ON investments.investor_id = investors.id ORDER BY investments.time_invested`, (err, response, test) => {
    if (err) {
      callback(err);
    } else {
      callback(null, response);
    }
  });
}

function newInvestor(body, callback) {
  connection.query(`INSERT INTO investors (investor_name, email) VALUES ("${body.investor_name}", "${body.email}")`, (err, response, test) => {
    if (err) {
      callback(err);
    } else {
      callback(null, response);
    }
  })
}

function newInvestment(body, callback) {
  connection.query(`INSERT INTO investments (investor_id, investment_amount, time_invested, total_before) VALUES (${body.investor_id}, ${body.investment_amount}, ${body.time_invested}, ${body.total_before})`, (err, response, test) => {
    if (err) {
      callback(err);
    } else {
      callback(null, response);
    }
  })
}

module.exports = {
  funds,
  newFunds,
  updateFunds,
  investorsInfo,
  newInvestor,
  newInvestment
}