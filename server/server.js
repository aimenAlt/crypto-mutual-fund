const express = require('express');
const bodyParser = require('body-parser');
const { getAllInvestors, addInvestment } = require('./controllers/investorsController.js');
const { getAllFunds, addFunds } = require('./controllers/fundsController.js');
const database = require('./../database/index.js');

const app = express();
const PORT = 9000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/../public'));

app.get('/investors', getAllInvestors);
app.post('/investors', addInvestment);

app.get('/funds', getAllFunds);
app.post('/funds', addFunds);

app.listen(PORT, () => {
  console.log(`Its OVER \n http://localhost:9000 !!!`);
});

