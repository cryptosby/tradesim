// Configuración de APIs
import { COINGECKO_API, DEXTOOLS_API } from './config.js';

// 1. WebSocket para precios en tiempo real (Binance)
const binanceWS = new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@ticker');

// 2. Cargar memecoins de DEXTools
async function loadMemecoins() {
    const response = await fetch(`${DEXTOOLS_API}/pairs?chain=ethereum`);
    const data = await response.json();
    renderMemecoins(data.data.slice(0, 5)); // Top 5
}

// 3. Gráfico con TradingView
const chart = LightweightCharts.createChart(document.getElementById('price-chart'), {
    width: 800,
    height: 400,
});
