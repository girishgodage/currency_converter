import React from "react";

const Results = ({
  data: { fromCurrency, toCurrency, amount, convertedAmount, countries },
}) => {
  const message = `${amount} ${fromCurrency} is worth ${convertedAmount} ${toCurrency}. You can spend these in the following countries: ${countries}`;

  return (
    <div>
      <h2>From currency: {fromCurrency}</h2>
      <h2>To currency: {toCurrency}</h2>
      <h2>Amount: {amount}</h2>
      <h2>Converted Amount: {convertedAmount}</h2>
      {/* <h1>Countries: {countries}</h1> */}
      <h5>{convertedAmount ? message : null}</h5>
    </div>
  );
};

export default Results;
