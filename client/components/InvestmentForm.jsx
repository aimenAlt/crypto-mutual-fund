import React from 'react';
import Investor from './Investor.jsx'
import _ from 'lodash';

class InvestmentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      investment_amount: 0
    }
    this.textChange = this.textChange.bind(this);
    this.registerationClick = this.registerationClick.bind(this);
  }

  textChange(event) {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  registerationClick(event) {
  //   let obj = {
  //     investor_id: ,
  //     investment_amount: ,
  //     time_invested: new Date(),
  //     total_before: ,
        // currentUsd: 
  //   }
  //   this.props.newInvestment();
  }



  render() {
    const { investment_amount } = this.state;
    const { newInvestment, investors } = this.props;
    return (
      <div className="form">
        <form>
          <label> Name: <br/> </label>
          <select onChange={this.textChange} id='select'>
            { Object.keys(investors).map((element) => {
                return <Investor investor={investors[element]} />
              })
            }
          </select>
            {/* <input id="name" onChange={this.textChange} value={name}></input> */}
          <label> <br/> Investment Amount: <br/> </label>
            <input id="investment_amount" onChange={this.textChange} value={investment_amount}></input>
        </form>
        <button onClick={this.registerationClick}> Submit </button>
      </div>
    );
  }
}

export default InvestmentForm;