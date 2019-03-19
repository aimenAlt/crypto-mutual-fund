const express = require('express');
const bodyParser = require('body-parser');
const { getAllInvestors, addInvestment } = require('./controllers/investorsController.js');
const { getAllFunds, addFunds } = require('./controllers/fundsController.js');
const { getCryptos } = require('./controllers/allCryptos.js');
const { getAllCryptos } = require('./../coincapApi/index.js');
const { getInvestorsData, getFunds} = require('./sqlControllers/getInvestorsInfo.js');
const database = require('./../database/index.js');

const app = express();
const PORT = 9000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/../public'));

app.get('/investors', getInvestorsData);
// app.post('/investors', addInvestment);
// app.put('/investors/:email', )

app.get('/funds', getFunds);
// app.post('/funds', addFunds);
// app.put('/funds/:symb', )

app.get('/cryptos', getAllCryptos);

app.listen(PORT, () => {
  console.log(`Its OVER \n http://localhost:9000 !!!`);
});

