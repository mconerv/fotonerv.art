const GITHUB_BASE = 'https://raw.githubusercontent.com/mconerv/fotonerv.art/main';

const portfolioData = {
    prt: { folder: 'prt', count: 50, title: 'Портретная съемка' },
    rep: { folder: 'rep', count: 57, title: 'Репортажная съемка' },
    nat: { folder: 'nat', count: 67, title: 'Пейзажная съемка' },
    arc: { folder: 'arc', count: 34, title: 'Архитектурная съемка' }
};

const categoryDescriptions = {
    prt: 'Яркие и живые портреты, передающие эмоции и индивидуальность.',
    rep: 'Запечатление моментов и событий в динамике, с сохранением атмосферы.',
    nat: 'Красочные и детализированные пейзажи, передающие красоту природы.',
    arc: 'Детальные и выразительные снимки зданий и интерьеров, подчеркивающие их стиль и особенности.'
};

const portfolioTabs = document.querySelectorAll('.portfolio-tab');
const portfolioGrid = document.getElementById('portfolioGrid');
const descriptionEl = document.getElementById('portfolioDescription');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');
const lightboxClose = document.getElementById('lightboxClose');
const lightboxPrev = document.getElementById('lightboxPrev');
const lightboxNext = document.getElementById('lightboxNext');

let currentCategory = null;
let currentIndex = 0;
let images = [];
let openCategory = null;

function renderPortfolio(category) {
    const data = portfolioData[category];
    if (!data) return;

    portfolioGrid.innerHTML = '';
    images = [];

    for (let i = 1; i <= data.count; i++) {
        const num = String(i).padStart(5, '0');
        const src = `${GITHUB_BASE}/${data.folder}/${data.folder}${num}.jpeg`;
        images.push(src);

        const item = document.createElement('div');
        item.className = 'portfolio-item';
        item.innerHTML = `<img src="${src}" alt="${data.title} ${i}" loading="lazy">`;
        item.addEventListener('click', () => {
            openLightbox(category, i - 1);
     
