document.addEventListener('DOMContentLoaded', () => {
    // Datos de ejemplo para el directorio
    const data = {
        exchanges: [
            {
                id: 'binance',
                name: 'Binance',
                description: 'El exchange de criptomonedas más grande por volumen de trading. Ofrece una amplia gama de criptomonedas y servicios, incluyendo trading spot, futuros, staking y NFTs.',
                tags: ['Global', 'Spot', 'Futuros', 'Staking', 'NFTs'],
                link: 'https://www.binance.com/es/register?ref=YOUR_BINANCE_AFFILIATE_ID', // **REEMPLAZA CON TU ENLACE DE AFILIADO**
                amazonLink: 'https://www.amazon.com/dp/B08GS2Z29K?tag=YOUR_AMAZON_AFFILIATE_ID', // Libro relacionado con exchanges
                type: 'global'
            },
            {
                id: 'coinbase',
                name: 'Coinbase',
                description: 'Plataforma líder para comprar, vender y almacenar criptomonedas, conocida por su facilidad de uso y seguridad. Ideal para principiantes en Estados Unidos.',
                tags: ['Global', 'Principiantes', 'Seguro', 'EEUU'],
                link: 'https://www.coinbase.com/join/YOUR_COINBASE_AFFILIATE_ID', // **REEMPLAZA CON TU ENLACE DE AFILIADO**
                amazonLink: 'https://www.amazon.com/dp/B09JYS35C8?tag=YOUR_AMAZON_AFFILIATE_ID', // Otro libro
                type: 'global'
            },
            {
                id: 'kraken',
                name: 'Kraken',
                description: 'Uno de los exchanges más antiguos y respetados, con una gran variedad de criptomonedas y características avanzadas para traders experimentados.',
                tags: ['Global', 'Avanzado', 'Seguro', 'Margen'],
                link: 'https://www.kraken.com/signup?referrer=YOUR_KRAKEN_AFFILIATE_ID', // **REEMPLAZA CON TU ENLACE DE AFILIADO**
                type: 'global'
            },
            {
                id: 'bitso',
                name: 'Bitso',
                description: 'Exchange líder en Latinoamérica, ideal para comprar y vender criptomonedas en pesos mexicanos (MXN), pesos argentinos (ARS) y reales brasileños (BRL).',
                tags: ['Latinoamérica', 'MXN', 'ARS', 'BRL', 'Fácil de usar'],
                link: 'https://bitso.com/register?ref=YOUR_BITSO_AFFILIATE_ID', // **REEMPLAZA CON TU ENLACE DE AFILIADO**
                type: 'regional'
            },
            {
                id: 'bybit',
                name: 'Bybit',
                description: 'Exchange popular para trading de derivados de criptomonedas con alta liquidez y una interfaz de usuario intuitiva.',
                tags: ['Global', 'Derivados', 'Futuros', 'Leverage'],
                link: 'https://www.bybit.com/en-US/invite?ref=YOUR_BYBIT_AFFILIATE_ID', // **REEMPLAZA CON TU ENLACE DE AFILIADO**
                type: 'global'
            },
            {
                id: 'okx',
                name: 'OKX',
                description: 'Exchange completo con trading spot, futuros, opciones y un ecosistema DeFi integrado. Ideal para traders experimentados.',
                tags: ['Global', 'Spot', 'Futuros', 'Opciones', 'DeFi'],
                link: 'https://www.okx.com/join/YOUR_OKX_AFFILIATE_ID', // **REEMPLAZA CON TU ENLACE DE AFILIADO**
                type: 'global'
            },
            // Agrega más exchanges aquí
        ],
        news: [
            {
                id: 'noticia1',
                title: 'Bitcoin supera los $70,000: ¿Qué sigue para BTC?',
                excerpt: 'El precio de Bitcoin ha alcanzado un nuevo hito, generando entusiasmo y especulaciones sobre su futuro en el mercado.',
                date: '01 de Junio de 2025',
                link: 'https://www.coindesk.com/price/bitcoin/', // Enlace a una noticia externa real
                amazonLink: 'https://www.amazon.com/dp/B08V81Q7V9?tag=YOUR_AMAZON_AFFILIATE_ID' // Libro sobre Bitcoin
            },
            {
                id: 'noticia2',
                title: 'Ethereum se prepara para la actualización "Serenity"',
                excerpt: 'La próxima gran actualización de Ethereum promete mejoras significativas en escalabilidad y eficiencia energética.',
                date: '28 de Mayo de 2025',
                link: 'https://ethereum.org/es/upgrades/', // Enlace a la web de Ethereum o una noticia
                amazonLink: 'https://www.amazon.com/dp/B0C39H9C1P?tag=YOUR_AMAZON_AFFILIATE_ID' // Libro sobre Ethereum
            },
            {
                id: 'noticia3',
                title: 'Adopción de criptomonedas en El Salvador sigue creciendo',
                excerpt: 'A pesar de los desafíos, el uso de Bitcoin en El Salvador muestra signos de una adopción gradual y constante.',
                date: '25 de Mayo de 2025',
                link: 'https://www.elsalvador.com/noticias/nacional/bitcoin-criptomonedas-elsalvador-economia-chivo-wallet/1138249/2024/', // Noticia relevante de El Salvador
                amazonLink: 'https://www.amazon.com/dp/B0BP3C58S1?tag=YOUR_AMAZON_AFFILIATE_ID' // Libro sobre la economía digital
            },
            {
                id: 'noticia4',
                title: 'Nuevas regulaciones cripto en la Unión Europea',
                excerpt: 'La UE avanza con MiCA, buscando establecer un marco regulatorio claro para los criptoactivos.',
                date: '20 de Mayo de 2025',
                link: 'https://www.europarl.europa.eu/news/es/press-room/20230414IPR79883/cryptoactivos-el-parlamento-da-luz-verde-a-nuevas-normas-para-proteger-a-los-inversores',
                amazonLink: 'https://www.amazon.com/dp/B0BP3C58S1?tag=YOUR_AMAZON_AFFILIATE_ID'
            },
            // Agrega más noticias aquí
        ],
        projects: [
            {
                id: 'polkadot',
                name: 'Polkadot',
                description: 'Un protocolo multi-cadena que permite la interoperabilidad entre diferentes blockchains, facilitando la creación de una web descentralizada.',
                tags: ['Infraestructura', 'Interoperabilidad', 'Web3'],
                link: 'https://polkadot.network/es/',
                amazonLink: 'https://www.amazon.com/dp/B0B5Z8C2QJ?tag=YOUR_AMAZON_AFFILIATE_ID', // Libro sobre Web3
                type: 'infraestructura'
            },
            {
                id: 'aave',
                name: 'Aave',
                description: 'Un protocolo de finanzas descentralizadas (DeFi) que permite a los usuarios prestar y tomar prestadas criptomonedas de forma peer-to-peer.',
                tags: ['DeFi', 'Préstamos', 'Gobernanza'],
                link: 'https://aave.com/',
                amazonLink: 'https://www.amazon.com/dp/B09JYYT29L?tag=YOUR_AMAZON_AFFILIATE_ID', // Libro sobre DeFi
                type: 'defi'
            },
            {
                id: 'axie-infinity',
                name: 'Axie Infinity',
                description: 'Un juego basado en blockchain donde los jugadores pueden coleccionar, criar y batallar criaturas digitales llamadas Axies como NFTs.',
                tags: ['Gaming', 'NFTs', 'Play-to-Earn'],
                link: 'https://axieinfinity.com/',
                amazonLink: 'https://www.amazon.com/dp/B0B554Q9C1?tag=YOUR_AMAZON_AFFILIATE_ID', // Libro sobre NFTs
                type: 'gaming'
            },
            {
                id: 'solana',
                name: 'Solana',
                description: 'Blockchain de alto rendimiento diseñada para aplicaciones descentralizadas y proyectos de cripto escalables.',
                tags: ['Infraestructura', 'Escalable', 'DApps'],
                link: 'https://solana.com/es',
                amazonLink: 'https://www.amazon.com/dp/B0BP3C58S1?tag=YOUR_AMAZON_AFFILIATE_ID',
                type: 'infraestructura'
            },
            {
                id: 'opensea',
                name: 'OpenSea',
                description: 'El marketplace más grande del mundo para NFTs (tokens no fungibles), donde puedes comprar, vender e intercambiar arte digital, coleccionables y más.',
                tags: ['NFTs', 'Marketplace', 'Coleccionables'],
                link: 'https://opensea.io/',
                amazonLink: 'https://www.amazon.com/dp/B0B554Q9C1?tag=YOUR_AMAZON_AFFILIATE_ID',
                type: 'nft'
            },
            // Agrega más proyectos aquí
        ],
        resources: [
            {
                id: 'academy-binance',
                title: 'Binance Academy',
                excerpt: 'Plataforma educativa gratuita que ofrece artículos y cursos sobre blockchain y criptomonedas, desde conceptos básicos hasta temas avanzados.',
                link: 'https://academy.binance.com/es',
                amazonLink: 'https://www.amazon.com/dp/B0BQV862K3?tag=YOUR_AMAZON_AFFILIATE_ID' // Libro de iniciación
            },
            {
                id: 'coinmarketcap',
                title: 'CoinMarketCap',
                excerpt: 'Uno de los sitios web más populares para rastrear precios de criptomonedas, capitalización de mercado y volumen de trading.',
                link: 'https://coinmarketcap.com/es/',
                amazonLink: 'https://www.amazon.com/dp/B0B7N37VHP?tag=YOUR_AMAZON_AFFILIATE_ID' // Libro sobre análisis de mercado
            },
            {
                id: 'etherscan',
                title: 'Etherscan',
                excerpt: 'Explorador de bloques para la red Ethereum, permite buscar transacciones, direcciones, tokens y más.',
                link: 'https://etherscan.io/',
                amazonLink: 'https://www.amazon.com/dp/B0C4M5T3T1?tag=YOUR_AMAZON_AFFILIATE_ID' // Libro técnico sobre blockchain
            },
            {
                id: 'libro-blockchain',
                title: 'Blockchain: La Revolución Industrial de la Nueva Economía',
                excerpt: 'Un libro esencial para entender los fundamentos de la tecnología blockchain y su impacto en el futuro.',
                link: 'https://www.amazon.com/Blockchain-revoluci%C3%B3n-industrial-nueva-econom%C3%ADa/dp/8418042457?tag=YOUR_AMAZON_AFFILIATE_ID', // Enlace directo a Amazon
                amazonLink: 'https://www.amazon.com/Blockchain-revoluci%C3%B3n-industrial-nueva-econom%C3%ADa/dp/8418042457?tag=YOUR_AMAZON_AFFILIATE_ID'
            },
            // Agrega más recursos aquí
        ]
    };

    // Función para renderizar los elementos en el DOM
    function renderContent(category, containerId, templateFn) {
        const container = document.getElementById(containerId);
        if (!container) return; // Asegúrate de que el contenedor exista

        container.innerHTML = ''; // Limpiar el contenido existente

        const itemsToRender = data[category].filter(item => item.visible !== false); // Filtrar por visibilidad
        
        if (itemsToRender.length === 0) {
            container.innerHTML = `<p class="no-results">No se encontraron ${category} que coincidan con los filtros.</p>`;
            return;
        }

        itemsToRender.forEach(item => {
            container.innerHTML += templateFn(item);
        });
    }

    // Plantillas HTML para cada tipo de contenido
    const exchangeTemplate = (exchange) => `
        <div class="card">
            <div class="card-header">${exchange.name}</div>
            <div class="card-content">
                <h3>${exchange.name}</h3>
                <p>${exchange.description}</p>
                <div class="card-tags">
                    ${exchange.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
                <div class="card-buttons">
                    <a href="${exchange.link}" target="_blank" rel="noopener noreferrer" class="button info">Visitar Exchange</a>
                    ${exchange.amazonLink ? `<a href="${exchange.amazonLink}" target="_blank" rel="noopener noreferrer" class="button affiliate">Libros relacionados en Amazon</a>` : ''}
                </div>
            </div>
        </div>
    `;

    const newsTemplate = (newsItem) => `
        <div class="list-item">
            <h3><a href="${newsItem.link}" target="_blank" rel="noopener noreferrer">${newsItem.title}</a></h3>
            <p class="meta">Fecha: ${newsItem.date}</p>
            <p>${newsItem.excerpt}</p>
            <a href="${newsItem.link}" target="_blank" rel="noopener noreferrer" class="read-more">Leer Noticia Completa</a>
            ${newsItem.amazonLink ? `<a href="${newsItem.amazonLink}" target="_blank" rel="noopener noreferrer" class="read-more" style="margin-left: 10px; background-color: #ff9900;">Explorar en Amazon</a>` : ''}
        </div>
    `;

    const projectTemplate = (project) => `
        <div class="card">
            <div class="card-header">${project.name}</div>
            <div class="card-content">
                <h3>${project.name}</h3>
                <p>${project.description}</p>
                <div class="card-tags">
                    ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
                <div class="card-buttons">
                    <a href="${project.link}" target="_blank" rel="noopener noreferrer" class="button info">Ver Proyecto</a>
                    ${project.amazonLink ? `<a href="${project.amazonLink}" target="_blank" rel="noopener noreferrer" class="button affiliate">Libros relacionados en Amazon</a>` : ''}
                </div>
            </div>
        </div>
    `;

    const resourceTemplate = (resource) => `
        <div class="list-item">
            <h3><a href="${resource.link}" target="_blank" rel="noopener noreferrer">${resource.title}</a></h3>
            <p>${resource.excerpt}</p>
            <a href="${resource.link}" target="_blank" rel="noopener noreferrer" class="read-more">Explorar Recurso</a>
            ${resource.amazonLink ? `<a href="${resource.amazonLink}" target="_blank" rel="noopener noreferrer" class="read-more" style="margin-left: 10px; background-color: #ff9900;">Explorar en Amazon</a>` : ''}
        </div>
    `;

    // Función de filtrado genérica
    window.filterContent = (category) => {
        const searchTerm = document.getElementById(`${category}Search`) ? document.getElementById(`${category}Search`).value.toLowerCase() : '';
        const filterValue = document.getElementById(`${category}Filter`) ? document.getElementById(`${category}Filter`).value : 'all';

        data[category].forEach(item => {
            const matchesSearch = searchTerm === '' || 
                                  item.name?.toLowerCase().includes(searchTerm) || 
                                  item.title?.toLowerCase().includes(searchTerm) || 
                                  item.description.toLowerCase().includes(searchTerm) ||
                                  item.tags?.some(tag => tag.toLowerCase().includes(searchTerm));

            const matchesFilter = filterValue === 'all' || 
                                  item.type === filterValue ||
                                  item.tags?.some(tag => tag.toLowerCase() === filterValue); // Permite filtrar por tags también

            item.visible = matchesSearch && matchesFilter;
        });

        // Vuelve a renderizar la sección específica
        if (category === 'exchanges') {
            renderContent('exchanges', 'exchangesGrid', exchangeTemplate);
        } else if (category === 'noticias') {
            renderContent('noticias', 'noticiasList', newsTemplate);
        } else if (category === 'proyectos') {
            renderContent('proyectos', 'proyectosGrid', projectTemplate);
        } else if (category === 'recursos') {
            renderContent('recursos', 'recursosList', resourceTemplate);
        }
    };

    // Cargar el contenido inicial al cargar la página
    renderContent('exchanges', 'exchangesGrid', exchangeTemplate);
    renderContent('noticias', 'noticiasList', newsTemplate);
    renderContent('proyectos', 'proyectosGrid', projectTemplate);
    renderContent('recursos', 'recursosList', resourceTemplate);

    // Manejar el formulario de contacto (solo para demostración frontend)
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Evita el envío real del formulario
            alert('¡Gracias por tu mensaje! (Este formulario es solo de demostración y no envía correos).');
            contactForm.reset();
        });
    }

    // Inicializar AdSense si está presente (descomentar en producción)
    // if (typeof (adsbygoogle) !== 'undefined') {
    //     (adsbygoogle = window.adsbygoogle || []).push({});
    // }
});
