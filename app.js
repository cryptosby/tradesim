import { COINGECKO_API, DEXTOOLS_API } from './config.js';

// 1. Cargar precios en tiempo real (WebSocket Binance)
const binanceWS = new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@ticker');
binanceWS.onmessage = (event) => {
    const data = JSON.parse(event.data);
    updatePrice('BTC', data.c);
};

// 2. Cargar memecoins nuevas (DEXTools API)
async function loadMemecoins() {
    const response = await fetch(`${DEXTOOLS_API}/pairs?chain=ethereum&sort=createdAt`);
    const data = await response.json();
    renderMemecoins(data.data.slice(0, 5));
}

// 3. Noticias (CryptoPanic RSS)
async function loadNews() {
    const response = await fetch('https://cryptopanic.com/news/rss/');
    const xml = await response.text();
    parseNews(xml);
}

// Inicializar
window.onload = () => {
    loadMemecoins();
    loadNews();
    initChart();
};
