import React from 'react';

const FundsRow = ({ symbol, name, amount, amountInUsd, percent }) => {
  return (
      <tr>
        <td>{symbol}</td>
        <td>{name}</td>
        <td>{amount.toFixed(2)}</td>
        <td>$ {amountInUsd.toFixed(2)}</td>
        <td>{percent.toFixed(2) * 100} %</td>
      </tr>
  );
};

export default FundsRow;