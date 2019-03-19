import React from 'react';
import _ from 'lodash';
import Currency from './Currency.jsx'

class ExchangeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      idSelected: "",
      amount: 0
    }
    this.textChange = this.textChange.bind(this);
    this.registerationClick = this.registerationClick.bind(this);
  }

  textChange(event) {
    let value = event.target.value;
    if (event.target.id === 'idSelected') {
      value = value.split(" ");
      value = value[0];
    }
    this.setState({
      [event.target.id]: value
    });
  }

  registerationClick(event) {
    const { investUsingUsd, usdAmount } = this.props;
    const { amount, idSelected } = this.state;
    investUsingUsd(idSelected, usdAmount, amount);
  }



  render() {
    const { amount } = this.state;
    const { newInvestment, investors, cryptoList, usdAmount } = this.props;
    return (
      <div className="form">
        <form>
          <label> Choose Crypto: <br/> </label>
          <select onChange={this.textChange} id='idSelected'>
            <option></option>
            { cryptoList.map((element) => {
                return <Currency currency={element} />
              })
            }
          </select>
            {/* <input id="name" onChange={this.textChange} value={name}></input> */}
          <label> <br/> USD Available to Buy cryptos: {usdAmount} <br/> </label>
          <label> <br/> Buy Crypto (in Dollars): <br/> </label>
            <input id="amount" onChange={this.textChange} value={amount}></input>
        </form>
        <button onClick={this.registerationClick}> Submit </button>
      </div>
    );
  }
}

export default ExchangeForm;