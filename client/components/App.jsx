import React from 'react';
import axios from 'axios';
import Forms from './Forms.jsx';
import coincapApi from './../../coincapApi/index.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      investors: [],
      funds: [],
      cryptoList: [],
      ourCryptos: [],
      usdAmount: 0,
      totalInUsd: 0
    }
    this.getInvestorsAndFunds = this.getInvestorsAndFunds.bind(this);
    this.getCryptoList = this.getCryptoList.bind(this);
    this.newInvestor = this.newInvestor.bind(this);
    this.newInvestment = this.newInvestment.bind(this);
    this.getTotalInUsd = this.getTotalInUsd.bind(this);
    this.grabCurrencyInfo = this.grabCurrencyInfo.bind(this);
    // this.getAllCryptos = coincapApi.getAllCryptos.bind(this);
  }

  componentDidMount() {
    this.getCryptoList();
    this.getInvestorsAndFunds();
  }

  getInvestorsAndFunds() {
    Promise.all([
      axios.get('/investors'),
      axios.get('/funds')
    ]).then( data => [data[0].data, data[1].data])
    .then(([ investorsGot , fundsGot ]) => {
      this.setState({
        investors: investorsGot,
        funds: fundsGot
      })
    })
    .catch((err) => {
      console.log('something bad happened');
    })
  }

  getCryptoList() {
    axios.get('/cryptos').then(data => {
      this.setState({
        cryptoList: data.data
      });
      console.log(this.state);
    })
  }

  newInvestor(data) {
    axios.post('/investors', data).then( data => {
      getInvestorsAndFunds();
    })
  }

  newInvestment(data) {
    axios.post('/investments', data).then( data => {
      getInvestorsAndFunds();
    })
  }

  getTotalInUsd() {
    const { funds, cryptoList } = this.state
    let total = 0;
    usdAmount = 0;
    for (var i = 0; i < funds.length; i++) {
      if (funds[i].crypto_symbol === "USD") {
        usdAmount = funds[i].amount_owned;
        total += usdAmount;
      }
      let tempInfo = grabCurrencyInfo(funds[i].crypto_symbol, cryptoList);
      total += (tempInfo.priceUsd * funds[i].amount_owned);
    }
    this.setState({
      usdAmount: usdAmount,
      totalInUsd: total
    })
  }
  
  grabCurrencyInfo(symbol, array) {
    for (var i = 0; i < array.length; i++) {
      if (array[i].symbol === symbol) {
        return array[i];
      }
    }
    return null;
  }
  
  render () {
    const { investors, funds, cryptoList, usdAmount, totalInUsd } = this.state;
    return (
      <div>
        <Forms
          newInvestor={this.newInvestor}
          newInvestment={this.newInvestment}
          investors={investors}
          funds={funds}
          cryptoList={cryptoList}
          usdAmount={usdAmount}
          totalInUsd={totalInUsd}
        />
      </div>
    );
  }
}

export default App;