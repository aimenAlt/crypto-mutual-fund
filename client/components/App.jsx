import React from 'react';
import axios from 'axios';

import coincapApi from './../../coincapApi/index.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        investors: [],
        funds: [],
        cryptoList: [],
        ourCryptos: [],
    }
    this.getInvestorsAndFunds = this.getInvestorsAndFunds.bind(this);
    // this.getCryptoList = this.cryptoList.bind(this);
    this.getAllCryptos = coincapApi.getAllCryptos.bind(this);
  }

  componentDidMount() {
    this.getInvestorsAndFunds();
    this.getAllCryptos();
    console.log(this.state);
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
      console.log(this.state);

    })
    .catch((err) => {
      console.log('something bad happened');
    })
  }

  // getCryptoList() {
  // }

  

  render () {
    return(
      <div>
        Stuff
      </div>
    );
  }
}

export default App;