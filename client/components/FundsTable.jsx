import React from 'react';
import FundsRow from './FundsRow.jsx';

const FundsTable = ({  }) => {
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
              
              return <FundsRow
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

export default FundsTable;