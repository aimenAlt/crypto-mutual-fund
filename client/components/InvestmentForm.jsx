import React from 'react';
import Investor from './Investor.jsx'
import _ from 'lodash';

class InvestmentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      idSelected: 1,
      investment_amount: 0
    }
    this.textChange = this.textChange.bind(this);
    this.registerationClick = this.registerationClick.bind(this);
  }

  textChange(event) {
    let value = event.target.value;
    if (event.target.id === 'idSelected') {
      value = value.split(" ");
      value = parseInt(value[0]);
    }
    this.setState({
      [event.target.id]: value
    });
  }

  registerationClick(event) {
    const { usdAmount, totalInUsd, newInvestment } = this.props;
    const { investment_amount, idSelected } = this.state;
    let obj = {
      investor_id: idSelected,
      investment_amount: parseInt(investment_amount),
      time_invested: Date.now(),
      total_before: totalInUsd,
      currentUsd:  usdAmount
    }
    newInvestment(obj);
  }



  render() {
    const { investment_amount } = this.state;
    const { newInvestment, investors } = this.props;
    return (
      <div className="form">
        <form>
          <label> Name: <br/> </label>
          <select onChange={this.textChange} id='idSelected'>
            { Object.keys(investors).map((element) => {
                return <Investor investor={investors[element]} />
              })
            }
          </select>
            {/* <input id="name" onChange={this.textChange} value={name}></input> */}
          <label> <br/> Investment Amount (in Dollars): <br/> </label>
            <input id="investment_amount" onChange={this.textChange} value={investment_amount}></input>
        </form>
        <button onClick={this.registerationClick}> Submit </button>
      </div>
    );
  }
}

export default InvestmentForm;