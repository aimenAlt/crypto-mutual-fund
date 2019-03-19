import React from 'react';

const Investor = (props) => {
  return (
    <option id={props.investor.id} value={props.investor.name} onClick={() => console.log("workin???")} > { props.investor.name } </option>
  );
}

module.exports = Investor;