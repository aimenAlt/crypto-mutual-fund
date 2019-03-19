import React from 'react';
import axios from 'axios';
import Forms from './Forms.jsx';
import InvestorsTable from './InvestorsTable.jsx';
import FundsTable from './FundsTable.jsx';
import coincapApi from './../../coincapApi/index.js';
// import Graph from './Graph.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      investors: {},
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
    this.investUsingUsd = this.investUsingUsd.bind(this);
    // this.getAllCryptos = coincapApi.getAllCryptos.bind(this);
  }

  componentDidMount() {
    const allGets = () => {Promise.all([
      axios.get('/investors'),
      axios.get('/funds'),
      axios.get('/cryptos')
    ]).then( data => [data[0].data, data[1].data, data[2].data])
    .then(([ investorsGot , fundsGot, cryptoList ]) => {
      this.setState({
        investors: investorsGot,
        funds: fundsGot,
        cryptoList: cryptoList
      })
      this.getTotalInUsd();
    })
    .catch((err) => {
      console.log(err);
      console.log('something bad happened!!!!!!');
    })}
    allGets();
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
      this.getTotalInUsd();
    })
    .catch((err) => {
      console.log(err);
      console.log('something bad happened');
    })
  }

  getCryptoList() {
    axios.get('/cryptos').then(data => {
      this.setState({
        cryptoList: data.data
      });
      this.getTotalInUsd();
    })
  }

  newInvestor(data) {
    axios.post('/investors', data).then( data => {
      this.getInvestorsAndFunds();
    })
  }

  newInvestment(data) {
    axios.post('/investments', data).then( data => {
      this.getInvestorsAndFunds();
    })
  }

  getTotalInUsd() {
    const { funds, cryptoList } = this.state
    let ourCryptos = [];
    let total = 0;
    let usdAmount = 0;
    for (var i = 0; i < funds.length; i++) {
      if (funds[i].crypto_symbol === "USD") {
        usdAmount = funds[i].amount_owned;
        total += usdAmount;
        continue;
      }
      let tempInfo = this.grabCurrencyInfo(funds[i].crypto_symbol, cryptoList);
      ourCryptos.push(tempInfo);
      total += (tempInfo.priceUsd * funds[i].amount_owned);
    }
    this.setState({
      usdAmount: usdAmount,
      totalInUsd: total,
      ourCryptos: ourCryptos
    })
  }

  investUsingUsd(symbol, currentUsd, paying) {
    let currencyInfo = this.grabCurrencyInfo(symbol, this.state.cryptoList);
    let amountBuying = paying / currencyInfo.priceUsd;
    let objSent = {
      crypto_symbol: currencyInfo.symbol,
      crypto_name: currencyInfo.name,
      amount_owned: amountBuying,
      usdLeft: currentUsd - paying
    }
    console.log(objSent);
    axios.post('/funds', objSent).then(() => {
      this.getInvestorsAndFunds();
    })
  }
  
  grabCurrencyInfo(symbol, array) {
    for (var i = 0; i < array.length; i++) {
      console.log(array[i]);
      if (array[i].symbol === symbol) {
        return array[i];
      }
    }
    return null;
  }
  
  render () {
    const { investors, funds, cryptoList, usdAmount, totalInUsd, ourCryptos } = this.state;
    return (
      <div>
        {/* <Graph investors={investors} /> */}
        <FundsTable ourCryptos={ourCryptos} funds={funds} totalInUsd={totalInUsd} grabCurrencyInfo={this.grabCurrencyInfo} cryptoList={cryptoList} />
        <InvestorsTable investors={investors} totalInUsd={totalInUsd} />
        <Forms
          newInvestor={this.newInvestor}
          newInvestment={this.newInvestment}
          investors={investors}
          funds={funds}
          cryptoList={cryptoList}
          usdAmount={usdAmount}
          totalInUsd={totalInUsd}
          investUsingUsd={this.investUsingUsd}
        />
      </div>
    );
  }
}

export default App;