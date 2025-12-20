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
    item.innerHTML = `<img src="${src}" alt="${category}-${i}" loading="lazy" data-index="${i - 1}">`;

    item.addEventListener('click', () => {
      openLightbox(category, i - 1);
    });

    portfolioGrid.appendChild(item);
  }

  currentCategory = category;
}

function showCategory(category, tab) {
  if (openCategory === category) {
    openCategory = null;
    descriptionEl.classList.remove('visible');
    portfolioGrid.classList.remove('visible');
    descriptionEl.textContent = '';
    portfolioGrid.innerHTML = '';
    portfolioTabs.forEach(t => t.classList.remove('active'));
    return;
  }

  openCategory = category;

  portfolioTabs.forEach(t => t.classList.remove('active'));
  tab.classList.add('active');

  descriptionEl.textContent = categoryDescriptions[category] || '';
  descriptionEl.classList.add('visible');

  renderPortfolio(category);
  portfolioGrid.classList.add('visible');
}

function openLightbox(category, index) {
  currentCategory = category;
  const data = portfolioData[category];
  images = [];

  for (let i = 1; i <= data.count; i++) {
    const num = String(i).padStart(5, '0');
    images.push(`${GITHUB_BASE}/${data.folder}/${data.folder}${num}.jpeg`);
  }

  currentIndex = index;
  lightboxImage.src = images[currentIndex];
  lightbox.classList.add('open');
}

function closeLightbox() {
  lightbox.classList.remove('open');
}

function showNext(delta) {
  const data = portfolioData[currentCategory];
  if (!data) return;

  currentIndex = (currentIndex + delta + data.count) % data.count;
  lightboxImage.src = images[currentIndex];
}

portfolioTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const category = tab.dataset.category;
    showCategory(category, tab);
  });
});

lightboxClose.addEventListener('click', closeLightbox);
lightboxPrev.addEventListener('click', () => showNext(-1));
lightboxNext.addEventListener('click', () => showNext(1));

lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) closeLightbox();
});

document.addEventListener('keydown', (e) => {
  if (!lightbox.classList.contains('open')) return;
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowRight') showNext(1);
  if (e.key === 'ArrowLeft') showNext(-1);
});
