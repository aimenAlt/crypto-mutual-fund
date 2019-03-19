import React from 'react';
import InvestmentForm from './InvestmentForm.jsx';
import NewInvestorForm from './NewInvestorForm.jsx';


class Forms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: "investment"
    }
  }

  render() {
    const { view } = this.state;
    const { newInvestor } = this.props;
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
        </nav>
        <div>
          {view === "investment"
          ? <InvestmentForm />
          : <NewInvestorForm newInvestor={newInvestor} />
          }
        </div>
      </div>
    );
  }
}

export default Forms;