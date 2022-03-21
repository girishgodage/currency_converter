import cc from "iso-country-currency";
//const axios = require("axios");

const getCountries = async (currencyCode) => {
  try {
    const response = await cc.getAllCountriesByCurrencyOrSymbol(
      "currency",
      currencyCode
    );
    // const response = await axios.get(
    //   `https://restcountries.eu/rest/v2/currency/${currencyCode}`
    //);
    console.log(response);
    //return response.data.map((country) => country.name);
    return response;
  } catch (error) {
    throw new Error(`Unable to get countries that use ${currencyCode}`);
  }
};

export default getCountries;
