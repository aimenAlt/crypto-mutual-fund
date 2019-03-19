import React from 'react';

const FundsRow = ({ symbol, name, amount, amountInUsd, percent }) => {
  return (
      <tr>
        <td>{symbol}</td>
        <td>{name}</td>
        <td>{amount}</td>
        <td>{amountInUsd}</td>
        <td>{percent}</td>
      </tr>
  );
};

export default FundsRow;