import React from 'react';
import InvestorRow from './InvestorRow.jsx';

const InvestorsTable = ({ investors, totalInUsd }) => {
  console.log(investors);
  return (
    <div className="investors-table">
      <table className="rwd-table">
        <tbody table className="rwd-table">
          <tr>
            <th>Name</th>
            <th>eMail</th>
            <th>Amount Invested</th>
            <th>Current Amount</th>
            <th>Percent Owns</th>
          </tr>
          {
            Object.keys(investors).map( (key) => {
              
              return <InvestorRow
                name={investors[key].investor_name}
                email={investors[key].email}
                amountInvested={investors[key].invested}
                currentAmount={(totalInUsd * (investors[key].percentOwned / 100))}
                percentOwns={investors[key].percentOwned}
              />
            })
          }
        </tbody>
      </table>
    </div>
  );
};

export default InvestorsTable;