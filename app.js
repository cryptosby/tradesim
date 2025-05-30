// Conexión a CoinGecko
async function loadPrices() {
    const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd');
    const data = await response.json();
    console.log(data); // Ver datos en consola
}
loadPrices();
