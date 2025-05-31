// Configuración
const CONFIG = {
    COINGECKO_API: "https://api.coingecko.com/api/v3",
    DEXTOOLS_API: "https://api.dextools.io/v1",
    BINANCE_WS: "wss://stream.binance.com/ws"
};

// 1. WebSocket para precios en tiempo real (Binance)
function initWebSocket() {
    const ws = new WebSocket(`${CONFIG.BINANCE_WS}/btcusdt@ticker`);
    ws.onmessage = (event) => {
        const data = JSON.parse(event.data);
        updatePriceDisplay('BTC', data.c);
    };
}

// 2. Cargar datos de CoinGecko
async function loadCoinGeckoData() {
    const response = await fetch(`${CONFIG.COINGECKO_API}/coins/markets?vs_currency=usd&order=market_cap_desc`);
    const data = await response.json();
    renderCryptoCards(data.slice(0, 12));
}

// 3. Cargar memecoins de DEXTools
async function loadMemecoins() {
    const response = await fetch(`${CONFIG.DEXTOOLS_API}/pairs?chain=ethereum&sort=createdAt&order=desc`);
    const data = await response.json();
    renderMemecoins(data.data.slice(0, 5));
}

// 4. Inicializar gráfico
function initChart() {
    const chart = LightweightCharts.createChart(document.getElementById('price-chart'), {
        width: '100%',
        height: 400,
        layout: {
            background: { color: '#1a1a2e' },
            textColor: '#f8f9fa'
        }
    });
    const lineSeries = chart.addLineSeries();
    lineSeries.setData([{ time: '2023-01-01', value: 100 }, { time: '2023-01-02', value: 120 }]);
}

// 5. Donaciones con Bitso
function initDonations() {
    QRCode.toCanvas(document.getElementById('bitso-qr'), 'bitcoin:TU_DIRECCION_BTC', {
        width: 150,
        color: { dark: '#000000', light: '#FFFFFF00' }
    });
}

function copyAddress() {
    const input = document.getElementById('bitso-address');
    input.select();
    document.execCommand('copy');
    alert('¡Dirección copiada!');
}

// Inicialización completa
window.onload = () => {
    initWebSocket();
    loadCoinGeckoData();
    loadMemecoins();
    initChart();
    initDonations();
};
