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

function investorsInfo(callback) {
  connection.query(`SELECT * FROM investors INNER JOIN investments ON investments.investor_id = investors.id ORDER BY investments.time_invested`, (err, response, test) => {
    if (err) {
      callback(err);
    } else {
      callback(null, response);
    }
  });
}

module.exports = {
  funds,
  investorsInfo
}