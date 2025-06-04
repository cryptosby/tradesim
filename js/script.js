// Gas Fee Calculator
function calculateGasFee() {
    const gasLimit = document.getElementById('gas-limit').value || 21000;
    const gasPrice = document.getElementById('gas-price').value || 20;
    const ethFee = (gasLimit * gasPrice) / 1e9; // Convertir a ETH
    // Nota: Aquí podrías agregar una API para el precio actual de ETH
    document.getElementById('gas-result').textContent = 
        `Costo: ${ethFee.toFixed(6)} ETH / $${(ethFee * 2500).toFixed(2)} USD (approx)`;
}

// Crypto Converter (Ejemplo con CoinGecko API)
async function convertCrypto() {
    const amount = document.getElementById('crypto-amount').value || 1;
    const fromCrypto = document.getElementById('crypto-from').value;
    const toCurrency = document.getElementById('crypto-to').value;
    
    try {
        const response = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${fromCrypto}&vs_currencies=${toCurrency}`);
        const data = await response.json();
        const rate = data[fromCrypto][toCurrency];
        const result = amount * rate;
        document.getElementById('conversion-result').textContent = 
            `Resultado: ${amount} ${fromCrypto.toUpperCase()} = ${result.toFixed(2)} ${toCurrency.toUpperCase()}`;
    } catch (error) {
        console.error("Error fetching data:", error);
        document.getElementById('conversion-result').textContent = "Error al convertir. Intenta más tarde.";
    }
}

// TradingView Widget
function loadTradingViewChart() {
    new TradingView.widget({
        "autosize": true,
        "symbol": "BINANCE:BTCUSDT",
        "interval": "D",
        "timezone": "Etc/UTC",
        "theme": "light",
        "style": "1",
        "locale": "es",
        "enable_publishing": false,
        "container_id": "tradingview-chart"
    });
}

// Inicializar gráfico cuando la página cargue
window.onload = function() {
    loadTradingViewChart();
};
