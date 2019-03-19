import React from 'react';

const Investor = (props) => {
  return (
    <option id={props.investor.id} value={`${props.investor.id} : ${props.investor.investor_name}`} onClick={() => console.log("workin???")} > { `${props.investor.id} : ${props.investor.investor_name}` } </option>
  );
}

module.exports = Investor;