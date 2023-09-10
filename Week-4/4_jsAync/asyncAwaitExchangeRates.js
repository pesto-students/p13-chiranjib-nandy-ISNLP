const axios = require('axios'); // Make sure you have Axios installed

async function getExchangeRate(currencyCode) {
    try {
        // Make a request to the exchange rates API
        const response = await axios.get('https://api.ratesapi.io/api/latest?base=EUR');

        const data = response.data;

        // Check if the currencyCode is in the response
        if (data.rates && data.rates[currencyCode]) {
            // Extract and round the exchange rate to 4 decimal places
            const rate = parseFloat(data.rates[currencyCode]).toFixed(4);
            return rate;
        } else {
            // Currency code not found in the response
            return null;
        }
    } catch (error) {
        throw new Error(`Error fetching exchange rates: ${error.message}`);
    }
}

// Example usage:
getExchangeRate('USD')
    .then((rate) => {
        console.log(rate); // Output: 1.2133
    })
    .catch((error) => {
        console.error(error);
    });
