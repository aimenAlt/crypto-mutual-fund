const express = require('express');
const bodyParser = require('body-parser');
const { getAllCryptos } = require('./../coincapApi/index.js');
const { getInvestorsData, getFunds} = require('./dbControllers/getInvestorsInfo.js');
const { addNewFunds, addNewInvestor, addNewInvestment } = require('./dbControllers/postInvestorInfo.js');

const app = express();
const PORT = 9000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/../public'));

app.get('/investors', getInvestorsData);
app.post('/investors', addNewInvestor);
// app.put('/investors/:email', )

app.get('/funds', getFunds);
app.post('/funds', addNewFunds);
// app.put('/funds/:symb', )

app.post('/investments', addNewInvestment)

app.get('/cryptos', getAllCryptos);

app.listen(PORT, () => {
  console.log(`Its OVER \n http://localhost:9000 !!!`);
});

