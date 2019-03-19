import React from 'react';
import InvestmentForm from './InvestmentForm.jsx';
import NewInvestorForm from './NewInvestorForm.jsx';
import ExchangeForm from './ExchangeForm.jsx';

class Forms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: "investment"
    }
    this.changeView = this.changeView.bind(this);
  }

  changeView(view) {
    this.setState({
      view: view
    });
  }

  render() {
    const { view } = this.state;
    const { newInvestor, newInvestment, investors, cryptoList, funds, usdAmount, totalInUsd, investUsingUsd } = this.props;
    return (
      <div className="forms-container">
        <nav>
          <span 
            className={this.state.view === 'investment' 
              ? 'nav-item selected'
              : 'nav-item unselected'}
            onClick={() => this.changeView('investment')}
          >
            Add Investment
          </span>
          <span 
            className={this.state.view === 'newInvestor' 
              ? 'nav-item selected'
              : 'nav-item unselected'}
            onClick={() => this.changeView('newInvestor')}
          >
            Investor Registration
          </span>
          <span 
            className={this.state.view === 'exchange' 
              ? 'nav-item selected'
              : 'nav-item unselected'}
            onClick={() => this.changeView('exchange')}
          >
            Crypto Exchange 
          </span>
        </nav>
        <div>
          {view === "investment"
          ? <InvestmentForm newInvestment={newInvestment} investors={investors} usdAmount={usdAmount} totalInUsd={totalInUsd} />
          : null
          }
        </div>
        <div>
          {view === "newInvestor"
          ? <NewInvestorForm newInvestor={newInvestor} />
          : null
          }
        </div>
        <div>
          {view === "exchange"
          ? <ExchangeForm cryptoList={cryptoList} usdAmount={usdAmount} investUsingUsd={investUsingUsd}  />
          : null
          }
        </div>

      </div>
    );
  }
}

export default Forms;