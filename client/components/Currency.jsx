import React from 'react';

const Currency = (props) => {
  return (
    <option
      id={props.currency.id}
      value={`${props.currency.symbol} : ${props.currency.id}`}
      onClick={() => console.log("workin???")}
      > 
        { `${props.currency.symbol} : ${props.currency.id}` } 
    </option>
  );
}

module.exports = Currency;