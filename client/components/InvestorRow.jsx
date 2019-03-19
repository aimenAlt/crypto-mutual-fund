import React from 'react';

const InvestorRow = ({ name, email, amountInvested, currentAmount, percentOwns }) => {
  return (
      <tr>
        <td>{name}</td>
        <td>{email}</td>
        <td>{amountInvested.toFixed(2)}</td>
        <td>{currentAmount.toFixed(2)}</td>
        <td>{percentOwns.toFixed(2)} % </td>
      </tr>
  );
};

export default InvestorRow;