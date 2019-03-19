import React from 'react';
import FundsRow from './FundsRow.jsx';

const FundsTable = ({ ourCryptos, funds, totalInUsd, grabCurrencyInfo, cryptoList }) => {
  // const findInfo = (symbol, cryptoList) => {
    
  // };
  return (
    <div className="investors-table">
      <table className="rwd-table">
        <tbody className="rwd-table">
          <tr>
            <th>Symbol</th>
            <th>Name</th>
            <th>Amount</th>
            <th>Amount In USD</th>
            <th>Percent of funds</th>
          </tr>
          {
            // if (funds.length > 0 && ourCryptos.length > 0) {
              funds.map( (element) => {
                console.log(funds);
                if(element.crypto_symbol === "USD") {
                  return (
                    <FundsRow
                      symbol={element.crypto_symbol}
                      name={element.crypto_name}
                      amount={element.amount_owned}
                      amountInUsd={element.amount_owned}
                      percent={element.amount_owned / totalInUsd}
                    />
                  );
                } else {
                    let tempInfo = grabCurrencyInfo(element.crypto_symbol, cryptoList);
                    console.log("null?");
                    console.log(tempInfo.priceUsd);
                    console.log(element.amount_owned);
                    return (
                      <FundsRow
                        symbol={element.crypto_symbol}
                        name={element.crypto_name}
                        amount={(element.amount_owned)}
                        amountInUsd={(tempInfo.priceUsd) * element.amount_owned}
                        percent={((tempInfo.priceUsd) * element.amount_owned) / totalInUsd}
                      />
                    );
                  }
              })
            // }
          }
        </tbody>
      </table>
    </div>
  );
};

export default FundsTable;