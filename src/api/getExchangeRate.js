const axios = require("axios");

const getExchangeRate = async (fromCurrency, toCurrency) => {
  try {
    const key = process.env.REACT_APP_API_KEY1;
    const response = await axios.get(
      "http://data.fixer.io/api/latest?access_key=" + key
    );

    const rate = response.data.rates;
    const euro = 1 / rate[fromCurrency];
    const exchangeRate = euro * rate[toCurrency];

    return exchangeRate;
  } catch (error) {
    throw new Error(
      `Unable to get currency ${fromCurrency} and  ${toCurrency}`
    );
  }
};

export default getExchangeRate;
