async function getCryptoPrices() {
  // CoinGecko API endpoint for multiple coins
  const url = 'https://api.coingecko.com/api/v3/simple/price';

  // Define search params
  const params = {
    ids: 'bitcoin,ethereum,bitcoin-cash',
    vs_currencies: 'usd',
  };

  try {
    // Make the API request
    const response = await fetch(`${url}?${new URLSearchParams(params)}`);


    // Check if the request was successful
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // Parse JSON response
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('An error occurred:', error);
    return null;
  }
}

// Display prices
async function displayPrices() {
  const prices = await getCryptoPrices();

  if (prices) {
    const btc = prices.bitcoin.usd;
    const eth = prices.ethereum.usd;
    const bch = prices['bitcoin-cash'].usd;

    const result = document.getElementById("prices");
    result.innerHTML = `
      Bitcoin = $${btc},
      Ethereum = $${eth},
      Bitcoin cash = $${bch}
    `
  }
}
displayPrices();


// this function is all about getting the country name, their flag, and country rate
import { rateData } from "../data/rate-data.js";

function displayRateData() {
  rateData.map((ele) => {
    const row = document.createElement("tr");
    const data1 = document.createElement("td");
    const img = document.createElement("img");
    img.src = ele.img;
    img.alt = ele.country;
    img.classList.add("flag");

    const text = document.createTextNode(ele.country);
    data1.appendChild(img)
    data1.appendChild(text)

    row.appendChild(data1);

    ele.pricePer.forEach((rate) => {
      const btcRatePerCoun = document.createElement("td");
      btcRatePerCoun.innerHTML = rate.btc;
      row.appendChild(btcRatePerCoun);

      const ethRatePerCoun = document.createElement("td");
      ethRatePerCoun.innerHTML = rate.eth;
      row.appendChild(ethRatePerCoun);

      const bchRatePerCoun = document.createElement("td");
      bchRatePerCoun.innerHTML = rate.bch;
      row.appendChild(bchRatePerCoun)
    })

    document.querySelector("table").appendChild(row);
  })
}
displayRateData();