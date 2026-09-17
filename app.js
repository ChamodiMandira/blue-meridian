/**
 * BLUE MERIDIAN — ROYAL CEYLON FINE GEMS & HIGH JEWELRY
 * Interactive E-Commerce, Currency, Filter, Atelier, Lab & Cart Engine
 */

document.addEventListener('DOMContentLoaded', () => {

  // =========================================================================
  // 1. Gemstones & Vault Repository Data
  // =========================================================================
  const GEMSTONES_DATA = [
    {
      id: 'gem-01',
      title: '5.42 ct Unheated Ceylon Royal Blue Sapphire',
      category: 'blue-sapphire',
      variety: 'Natural Blue Sapphire',
      carat: 5.42,
      cut: 'cushion',
      dimensions: '10.82 x 9.94 x 6.18 mm',
      color: 'Royal Blue (Vivid Saturation)',
      clarity: 'Eye Clean (VVS1)',
      treatment: 'Natural / Unheated',
      origin: 'Ratnapura, Sri Lanka',
      cert: 'GIA-64210985',
      lab: 'Gemological Institute of America',
      priceUSD: 18500,
      image: 'assets/images/gem_ceylon_blue.jpg',
      featured: true,
      description: 'An exceptional unheated Ceylon sapphire exhibiting classic vivid cornflower-to-royal dispersion and velvety saturation, unearthed from the historic gravels of Ratnapura.'
    },
    {
      id: 'gem-02',
      title: '3.86 ct Natural Padparadscha Sapphire',
      category: 'padparadscha',
      variety: 'Natural Padparadscha Sapphire',
      carat: 3.86,
      cut: 'oval',
      dimensions: '9.85 x 7.62 x 5.40 mm',
      color: 'Sunset Salmon Pink-Orange (50/50 mix)',
      clarity: 'Flawless (Loupe Clean)',
      treatment: 'Natural / Unheated',
      origin: 'Elahera, Sri Lanka',
      cert: 'NGJA-SL-8921',
      lab: 'National Gem & Jewellery Authority',
      priceUSD: 24500,
      image: 'assets/images/gem_padparadscha.jpg',
      featured: true,
      description: 'The revered lotus-blossom sapphire of Sri Lanka (Padma Raga). This natural unheated specimen achieves the rare, harmonious balance of soft lotus pink and sunset orange.'
    },
    {
      id: 'gem-03',
      title: '4.15 ct Ceylon Pigeon Blood Ruby',
      category: 'ruby',
      variety: 'Natural Corundum (Ruby)',
      carat: 4.15,
      cut: 'cushion',
      dimensions: '9.45 x 8.70 x 5.80 mm',
      color: 'Vivid Pigeon Blood Red',
      clarity: 'Very Slightly Included (VVS2)',
      treatment: 'Natural / Unheated',
      origin: 'Pelmadulla, Sri Lanka',
      cert: 'GRS-2026-4412',
      lab: 'GemResearch Swisslab (GRS)',
      priceUSD: 19800,
      image: 'assets/images/gem_ruby.jpg',
      featured: true,
      description: 'Displaying intense crimson vibrancy with high natural chromium fluorescence, characteristic of historical untreated rubies from the Sabaragamuwa basin.'
    },
    {
      id: 'gem-04',
      title: '11.23 ct Natural Asterism Star Sapphire',
      category: 'star-sapphire',
      variety: 'Natural Star Sapphire',
      carat: 11.23,
      cut: 'cabochon',
      dimensions: '14.10 x 12.30 x 7.90 mm',
      color: 'Medium Deep Cornflower Blue',
      clarity: 'Translucent with dense rutile silk',
      treatment: 'Natural / No Heat',
      origin: 'Ratnapura, Sri Lanka',
      cert: 'GIA-51928374',
      lab: 'Gemological Institute of America',
      priceUSD: 16200,
      image: 'assets/images/gem_star_sapphire.jpg',
      featured: true,
      description: 'A distinguished untreated specimen featuring a sharp, well-centered six-ray star gliding across a velvety cornflower dome under single-point daylight illumination.'
    },
    {
      id: 'gem-05',
      title: '6.10 ct Natural Golden Yellow Sapphire',
      category: 'rare-collector',
      variety: 'Natural Yellow Sapphire',
      carat: 6.10,
      cut: 'emerald',
      dimensions: '11.40 x 8.90 x 6.45 mm',
      color: 'Vivid Canary Golden Yellow',
      clarity: 'Eye Clean (VVS1)',
      treatment: 'Natural / Unheated',
      origin: 'Balangoda, Sri Lanka',
      cert: 'NGJA-SL-7734',
      lab: 'National Gem & Jewellery Authority',
      priceUSD: 12800,
      image: 'assets/images/gem_yellow_sapphire.jpg',
      featured: false,
      description: 'Architectural step-cut emerald faceting highlights pure canary brilliance without secondary undertones. Prized in traditional gemology as a stone of clarity and wisdom.'
    },
    {
      id: 'gem-06',
      title: '2.78 ct Natural Color-Change Alexandrite',
      category: 'rare-collector',
      variety: 'Natural Chrysoberyl (Alexandrite)',
      carat: 2.78,
      cut: 'radiant',
      dimensions: '8.40 x 6.90 x 5.15 mm',
      color: 'Teal Blue-Green to Purplish Red',
      clarity: 'Eye Clean (VS1)',
      treatment: 'Natural / Untreated',
      origin: 'Nivithigala, Sri Lanka',
      cert: 'GIA-88231049',
      lab: 'Gemological Institute of America',
      priceUSD: 31000,
      image: 'assets/images/gem_alexandrite.jpg',
      featured: true,
      description: 'One of the rarest mineral varieties from Ceylon, demonstrating a distinct color shift from rich forest teal in natural sun to raspberry crimson in incandescent light.'
    },
    {
      id: 'gem-07',
      title: 'The Meridian Platinum & Sapphire Ring',
      category: 'bespoke-jewelry',
      variety: 'High Fine Jewelry Ring',
      carat: 3.50,
      cut: 'oval',
      dimensions: 'Custom Platinum 950 Mount',
      color: 'Ceylon Royal Blue with F/VVS Diamonds',
      clarity: 'VVS1 Center Sapphire',
      treatment: 'Natural / Unheated',
      origin: 'Colombo & London Atelier',
      cert: 'GIA-99021482',
      lab: 'GIA & London Assay Office Hallmarked',
      priceUSD: 21500,
      image: 'assets/images/bespoke_ring.jpg',
      featured: true,
      description: 'An oval 3.50 ct unheated Ceylon sapphire set in handcrafted 950 Platinum, accented by collection-grade pavé diamonds with delicate hand-milgrain detailing.'
    },
    {
      id: 'gem-08',
      title: '4.80 ct Velvety Cornflower Blue Sapphire',
      category: 'blue-sapphire',
      variety: 'Natural Blue Sapphire',
      carat: 4.80,
      cut: 'cushion',
      dimensions: '10.20 x 9.40 x 5.90 mm',
      color: 'Pure Cornflower Blue (Velvety)',
      clarity: 'Flawless (IF)',
      treatment: 'Natural / Unheated',
      origin: 'Kuruwita, Sri Lanka',
      cert: 'NGJA-SL-9014',
      lab: 'National Gem & Jewellery Authority',
      priceUSD: 17200,
      image: 'assets/images/gem_ceylon_blue.jpg',
      featured: false,
      description: 'Unearthed from the deep alluvial deposits of Kuruwita, displaying the iconic velvety softness and open light return characteristic of Ceylon pastel cornflowers.'
    }
  ];

  // =========================================================================
  // 2. Global State (Currency, Cart, Wishlist, Filters)
  // =========================================================================
  const state = {
    currency: 'USD',
    currencySymbol: '$',
    currencyRate: 1,
    activeCategory: 'all',
    activeCut: 'all',
    minCarat: 2.0,
    sortBy: 'featured',
    searchQuery: '',
    cart: [],
    wishlist: new Set(),
    discountPercent: 0,
    bespokeConfig: {
      stoneName: 'Royal Blue Sapphire',
      stoneBasePrice: 14500,
      stoneImg: 'assets/images/gem_ceylon_blue.jpg',
      metalName: 'Platinum 950',
      metalPrice: 2400,
      settingName: 'Micro-Pavé Diamond Halo',
      settingPrice: 3200
    }
  };

  const CURRENCY_RATES = {
    USD: { symbol: '$', rate: 1 },
    LKR: { symbol: 'Rs', rate: 305 },
    EUR: { symbol: '€', rate: 0.92 },
    GBP: { symbol: '£', rate: 0.78 }
  };

  // =========================================================================
  // 3. Helper Functions (Currency Formatting, Toasts)
  // =========================================================================
  function formatPrice(amountInUSD) {
    const converted = amountInUSD * state.currencyRate;
    if (state.currency === 'LKR') {
      return `${state.currencySymbol} ${Math.round(converted).toLocaleString('en-US')}`;
    }
    return `${state.currencySymbol}${Math.round(converted).toLocaleString('en-US')}`;
  }

  function showToast(message, icon = 'fa-solid fa-gem') {
    const container = document.getElementById('toastContainer');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<i class="${icon}"></i> <span>${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 3500);
  }

  // =========================================================================
  // 4. Currency Switcher Engine
  // =========================================================================
  const currencyToggleBtn = document.getElementById('currencyToggleBtn');
  const currencyMenu = document.getElementById('currencyMenu');
  const currencyOptions = document.querySelectorAll('.currency-option');
  const currentCurrencySymbol = document.getElementById('currentCurrencySymbol');
  const currentCurrencyCode = document.getElementById('currentCurrencyCode');

  if (currencyToggleBtn && currencyMenu) {
    currencyToggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      currencyMenu.classList.toggle('show');
    });

    document.addEventListener('click', () => {
      currencyMenu.classList.remove('show');
    });

    currencyOptions.forEach(opt => {
      opt.addEventListener('click', () => {
        const curr = opt.dataset.currency;
        const config = CURRENCY_RATES[curr];
        if (!config) return;

        state.currency = curr;
        state.currencySymbol = config.symbol;
        state.currencyRate = config.rate;

        currentCurrencyCode.textContent = curr;
        currentCurrencySymbol.textContent = config.symbol;

        currencyOptions.forEach(o => o.classList.remove('active'));
        opt.classList.add('active');
        currencyMenu.classList.remove('show');

        // Re-render UI components with new currency
        renderGemstonesGrid();
        updateCartDrawerUI();
        updateBespokeValuation();
        showToast(`Currency changed to ${curr} (${config.symbol})`, 'fa-solid fa-coins');
      });
    });
  }

  // =========================================================================
  // 5. Gemstones Catalog Render & Filter Engine
  // =========================================================================
  const gemstonesGrid = document.getElementById('gemstonesGrid');
  const resultsCount = document.getElementById('resultsCount');
  const emptyResultsState = document.getElementById('emptyResultsState');
  const categoryTabs = document.querySelectorAll('.cat-pill');
  const cutFilterSelect = document.getElementById('cutFilterSelect');
  const caratRangeInput = document.getElementById('caratRangeInput');
  const caratValueDisplay = document.getElementById('caratValueDisplay');
  const sortSelect = document.getElementById('sortSelect');
  const resetFilterBtn = document.getElementById('resetFilterBtn');
  const emptyResetBtn = document.getElementById('emptyResetBtn');

  function filterAndSortGems() {
    let filtered = GEMSTONES_DATA.filter(gem => {
      // Category filter
      if (state.activeCategory !== 'all' && gem.category !== state.activeCategory) {
        return false;
      }
      // Cut filter
      if (state.activeCut !== 'all' && gem.cut.toLowerCase() !== state.activeCut.toLowerCase()) {
        return false;
      }
      // Carat filter
      if (gem.carat < state.minCarat) {
        return false;
      }
      // Search filter
      if (state.searchQuery.trim() !== '') {
        const query = state.searchQuery.toLowerCase();
        const matches = gem.title.toLowerCase().includes(query) ||
                        gem.variety.toLowerCase().includes(query) ||
                        gem.cut.toLowerCase().includes(query) ||
                        gem.origin.toLowerCase().includes(query) ||
                        gem.cert.toLowerCase().includes(query);
        if (!matches) return false;
      }
      return true;
    });

    // Sorting
    if (state.sortBy === 'price-high') {
      filtered.sort((a, b) => b.priceUSD - a.priceUSD);
    } else if (state.sortBy === 'price-low') {
      filtered.sort((a, b) => a.priceUSD - b.priceUSD);
    } else if (state.sortBy === 'carat-desc') {
      filtered.sort((a, b) => b.carat - a.carat);
    } else {
      // featured default
      filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }

    return filtered;
  }

  function renderGemstonesGrid() {
    if (!gemstonesGrid) return;
    const gems = filterAndSortGems();

    if (resultsCount) {
      resultsCount.textContent = `Showing ${gems.length} Treasure${gems.length === 1 ? '' : 's'}`;
    }

    if (gems.length === 0) {
      gemstonesGrid.innerHTML = '';
      if (emptyResultsState) emptyResultsState.classList.remove('hidden');
      return;
    }

    if (emptyResultsState) emptyResultsState.classList.add('hidden');

    gemstonesGrid.innerHTML = gems.map(gem => {
      const isFav = state.wishlist.has(gem.id);
      return `
        <article class="gemstone-card" data-id="${gem.id}">
          <div class="card-media-wrapper">
            <img src="${gem.image}" alt="${gem.title}" class="gemstone-card-img" loading="lazy">
            <span class="card-badge-top">
              <i class="fa-solid fa-file-contract"></i> ${gem.cert.split('-')[0]} Dossier
            </span>
            <button class="card-fav-btn ${isFav ? 'active' : ''}" data-id="${gem.id}" title="Save to Favorites" aria-label="Favorite gemstone">
              <i class="${isFav ? 'fa-solid' : 'fa-regular'} fa-heart"></i>
            </button>
            <div class="card-quickview-overlay">
              <button class="card-quickview-btn" data-id="${gem.id}">
                <i class="fa-solid fa-eye"></i> View Details
              </button>
            </div>
          </div>
          <div class="card-content">
            <span class="card-origin-tag">
              <i class="fa-solid fa-location-dot"></i> ${gem.origin}
            </span>
            <h3 class="card-gem-title">${gem.title}</h3>
            <div class="card-specs-row">
              <span class="spec-pill"><strong>${gem.carat.toFixed(2)}</strong> ct</span>
              <span class="spec-pill">${capitalize(gem.cut)} Facet</span>
              <span class="spec-pill">${gem.treatment}</span>
            </div>
            <div class="card-pricing-bar">
              <div class="price-box">
                <span class="price-label">Valuation</span>
                <span class="price-val">${formatPrice(gem.priceUSD)}</span>
              </div>
              <button class="card-add-btn" data-id="${gem.id}" title="Add to Selection" aria-label="Add to cart">
                <i class="fa-solid fa-bag-shopping"></i>
              </button>
            </div>
          </div>
        </article>
      `;
    }).join('');

    // Attach card event listeners
    attachCardEvents();
  }

  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  function attachCardEvents() {
    // Quick View Buttons
    document.querySelectorAll('.card-quickview-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.dataset.id;
        openQuickViewModal(id);
      });
    });

    // Add to Cart Buttons
    document.querySelectorAll('.card-add-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = btn.dataset.id;
        const gem = GEMSTONES_DATA.find(g => g.id === id);
        if (gem) {
          addToCart(gem);
        }
      });
    });

    // Wishlist Buttons
    document.querySelectorAll('.card-fav-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = btn.dataset.id;
        toggleWishlist(id);
      });
    });
  }

  // Category Tabs Filter
  categoryTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      categoryTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      state.activeCategory = tab.dataset.category;
      renderGemstonesGrid();
    });
  });

  // Footer Category Quick Links
  document.querySelectorAll('.footer-links-col a[data-filter]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const filter = link.dataset.filter;
      state.activeCategory = filter;
      categoryTabs.forEach(t => {
        t.classList.toggle('active', t.dataset.category === filter);
      });
      renderGemstonesGrid();
      const vaultSec = document.getElementById('vault');
      if (vaultSec) vaultSec.scrollIntoView({ behavior: 'smooth' });
    });
  });

  // Cut Dropdown Filter
  if (cutFilterSelect) {
    cutFilterSelect.addEventListener('change', (e) => {
      state.activeCut = e.target.value;
      renderGemstonesGrid();
    });
  }

  // Carat Range Slider Filter
  if (caratRangeInput && caratValueDisplay) {
    caratRangeInput.addEventListener('input', (e) => {
      const val = parseFloat(e.target.value);
      state.minCarat = val;
      caratValueDisplay.textContent = `${val.toFixed(1)} ct`;
      renderGemstonesGrid();
    });
  }

  // Sort Selector
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      state.sortBy = e.target.value;
      renderGemstonesGrid();
    });
  }

  // Reset Filters
  function resetAllFilters() {
    state.activeCategory = 'all';
    state.activeCut = 'all';
    state.minCarat = 2.0;
    state.sortBy = 'featured';
    state.searchQuery = '';

    categoryTabs.forEach(t => t.classList.toggle('active', t.dataset.category === 'all'));
    if (cutFilterSelect) cutFilterSelect.value = 'all';
    if (caratRangeInput) caratRangeInput.value = 2.0;
    if (caratValueDisplay) caratValueDisplay.textContent = '2.0 ct';
    if (sortSelect) sortSelect.value = 'featured';

    const liveInput = document.getElementById('liveSearchInput');
    if (liveInput) liveInput.value = '';

    renderGemstonesGrid();
    showToast('Filters reset to default', 'fa-solid fa-rotate-right');
  }

  if (resetFilterBtn) resetFilterBtn.addEventListener('click', resetAllFilters);
  if (emptyResetBtn) emptyResetBtn.addEventListener('click', resetAllFilters);

  // =========================================================================
  // 6. Live Search Header Integration
  // =========================================================================
  const searchTriggerBtn = document.getElementById('searchTriggerBtn');
  const headerSearchBar = document.getElementById('headerSearchBar');
  const closeSearchBtn = document.getElementById('closeSearchBtn');
  const liveSearchInput = document.getElementById('liveSearchInput');

  if (searchTriggerBtn && headerSearchBar && closeSearchBtn && liveSearchInput) {
    searchTriggerBtn.addEventListener('click', () => {
      headerSearchBar.classList.toggle('show');
      if (headerSearchBar.classList.contains('show')) {
        liveSearchInput.focus();
      }
    });

    closeSearchBtn.addEventListener('click', () => {
      headerSearchBar.classList.remove('show');
      state.searchQuery = '';
      liveSearchInput.value = '';
      renderGemstonesGrid();
    });

    liveSearchInput.addEventListener('input', (e) => {
      state.searchQuery = e.target.value;
      renderGemstonesGrid();
      // Auto-scroll towards vault if on hero
      if (window.scrollY < 300 && state.searchQuery.trim() !== '') {
        const vaultSec = document.getElementById('vault');
        if (vaultSec) vaultSec.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  // =========================================================================
  // 7. Quick View Gemstone Inspection Modal
  // =========================================================================
  const quickViewModal = document.getElementById('quickViewModal');
  const quickViewContent = document.getElementById('quickViewContent');
  const closeQuickViewBtn = document.getElementById('closeQuickViewBtn');

  function openQuickViewModal(gemId) {
    const gem = GEMSTONES_DATA.find(g => g.id === gemId);
    if (!gem || !quickViewContent || !quickViewModal) return;

    quickViewContent.innerHTML = `
      <div class="qv-image-frame">
        <img src="${gem.image}" alt="${gem.title}">
        <span class="qv-badge-pill"><i class="fa-solid fa-file-contract"></i> GIA / NGJA Registered Dossier</span>
      </div>
      <div class="qv-details">
        <span class="qv-origin"><i class="fa-solid fa-location-dot"></i> Provenance: ${gem.origin}</span>
        <h2 class="qv-title">${gem.title}</h2>
        <div class="qv-price">${formatPrice(gem.priceUSD)}</div>
        <p class="qv-desc">${gem.description}</p>
        
        <div class="qv-specs-table">
          <div class="qv-spec-item">
            <span class="qv-spec-label">Carat Weight</span>
            <span class="qv-spec-val">${gem.carat.toFixed(2)} carats</span>
          </div>
          <div class="qv-spec-item">
            <span class="qv-spec-label">Cutting Style</span>
            <span class="qv-spec-val">${capitalize(gem.cut)} Faceting</span>
          </div>
          <div class="qv-spec-item">
            <span class="qv-spec-label">Color & Saturation</span>
            <span class="qv-spec-val">${gem.color}</span>
          </div>
          <div class="qv-spec-item">
            <span class="qv-spec-label">Clarity Grade</span>
            <span class="qv-spec-val">${gem.clarity}</span>
          </div>
          <div class="qv-spec-item">
            <span class="qv-spec-label">Thermal Enhancement</span>
            <span class="qv-spec-val highlight-green">${gem.treatment}</span>
          </div>
          <div class="qv-spec-item">
            <span class="qv-spec-label">Lab Report Number</span>
            <span class="qv-spec-val highlight-gold">${gem.cert}</span>
          </div>
        </div>

        <div class="qv-action-group">
          <button class="btn btn-primary btn-gold-gleam" id="qvAddToCartBtn" style="flex-grow:1;">
            <i class="fa-solid fa-bag-shopping"></i> Add to Selection
          </button>
          <button class="btn btn-glass-luxury" id="qvVerifyCertBtn">
            <i class="fa-solid fa-file-shield"></i> View Lab Record
          </button>
        </div>
      </div>
    `;

    // Modal Add To Cart
    const qvAddBtn = document.getElementById('qvAddToCartBtn');
    if (qvAddBtn) {
      qvAddBtn.addEventListener('click', () => {
        addToCart(gem);
        closeQuickViewModal();
      });
    }

    // Modal Direct Verify
    const qvVerifyBtn = document.getElementById('qvVerifyCertBtn');
    if (qvVerifyBtn) {
      qvVerifyBtn.addEventListener('click', () => {
        closeQuickViewModal();
        const certInput = document.getElementById('certNumberInput');
        if (certInput) {
          certInput.value = gem.cert;
          simulateCertVerification(gem.cert);
          const verifySec = document.getElementById('verify');
          if (verifySec) verifySec.scrollIntoView({ behavior: 'smooth' });
        }
      });
    }

    quickViewModal.classList.add('show');
    document.body.style.overflow = 'hidden';
  }

  function closeQuickViewModal() {
    if (quickViewModal) {
      quickViewModal.classList.remove('show');
      document.body.style.overflow = '';
    }
  }

  if (closeQuickViewBtn) {
    closeQuickViewBtn.addEventListener('click', closeQuickViewModal);
  }

  if (quickViewModal) {
    quickViewModal.addEventListener('click', (e) => {
      if (e.target === quickViewModal) {
        closeQuickViewModal();
      }
    });
  }

  // =========================================================================
  // 8. Bespoke Jewelry Atelier Builder
  // =========================================================================
  const bespokeGemBtns = document.querySelectorAll('.bespoke-gem-btn');
  const bespokeMetalBtns = document.querySelectorAll('.metal-pill');
  const bespokeSettingBtns = document.querySelectorAll('.setting-pill');
  const bespokeTotalPrice = document.getElementById('bespokeTotalPrice');
  const bespokeSummaryText = document.getElementById('bespokeSummaryText');
  const bespokePreviewImage = document.getElementById('bespokePreviewImage');
  const addBespokeToBagBtn = document.getElementById('addBespokeToBagBtn');
  const inquireBespokeBtn = document.getElementById('inquireBespokeBtn');

  function updateBespokeValuation() {
    const totalUSD = state.bespokeConfig.stoneBasePrice +
                     state.bespokeConfig.metalPrice +
                     state.bespokeConfig.settingPrice;

    if (bespokeTotalPrice) {
      bespokeTotalPrice.textContent = formatPrice(totalUSD);
    }

    if (bespokeSummaryText) {
      bespokeSummaryText.textContent = `${state.bespokeConfig.stoneName} • ${state.bespokeConfig.metalName} • ${state.bespokeConfig.settingName}`;
    }

    // Update individual metal/setting price labels in current currency
    document.querySelectorAll('.setting-pill .dyn-val').forEach(el => {
      const pill = el.closest('.setting-pill');
      if (pill && pill.dataset.settingPrice) {
        el.textContent = formatPrice(parseFloat(pill.dataset.settingPrice));
      }
    });
  }

  bespokeGemBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      bespokeGemBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.bespokeConfig.stoneName = btn.dataset.stone;
      state.bespokeConfig.stoneBasePrice = parseFloat(btn.dataset.basePrice);
      state.bespokeConfig.stoneImg = btn.dataset.img;
      updateBespokeValuation();
    });
  });

  bespokeMetalBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      bespokeMetalBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.bespokeConfig.metalName = btn.dataset.metal;
      state.bespokeConfig.metalPrice = parseFloat(btn.dataset.metalPrice);
      updateBespokeValuation();
    });
  });

  bespokeSettingBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      bespokeSettingBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.bespokeConfig.settingName = btn.dataset.setting;
      state.bespokeConfig.settingPrice = parseFloat(btn.dataset.settingPrice);
      updateBespokeValuation();
    });
  });

  if (addBespokeToBagBtn) {
    addBespokeToBagBtn.addEventListener('click', () => {
      const totalUSD = state.bespokeConfig.stoneBasePrice +
                       state.bespokeConfig.metalPrice +
                       state.bespokeConfig.settingPrice;

      const bespokeItem = {
        id: `bespoke-${Date.now()}`,
        title: `Custom Bespoke Heirloom Ring`,
        category: 'bespoke-jewelry',
        carat: 4.5,
        cut: 'oval',
        treatment: 'Natural Unheated',
        priceUSD: totalUSD,
        image: 'assets/images/bespoke_ring.jpg',
        specsDesc: `${state.bespokeConfig.stoneName} set in ${state.bespokeConfig.metalName} with ${state.bespokeConfig.settingName}`
      };

      addToCart(bespokeItem);
      showToast('Bespoke fine ring creation added to your bag!', 'fa-solid fa-ring');
    });
  }

  if (inquireBespokeBtn) {
    inquireBespokeBtn.addEventListener('click', () => {
      const contactSec = document.getElementById('contact');
      const interestSelect = document.getElementById('cInterest');
      const msgArea = document.getElementById('cMessage');

      if (interestSelect) interestSelect.value = 'Bespoke Engagement Ring';
      if (msgArea) {
        msgArea.value = `I am interested in commissioning a bespoke ring with: ${state.bespokeConfig.stoneName}, ${state.bespokeConfig.metalName}, and ${state.bespokeConfig.settingName}.`;
      }
      if (contactSec) contactSec.scrollIntoView({ behavior: 'smooth' });
    });
  }

  // =========================================================================
  // 9. Government & International Lab Verification Simulator
  // =========================================================================
  const certNumberInput = document.getElementById('certNumberInput');
  const verifyCertBtn = document.getElementById('verifyCertBtn');
  const sampleCertTags = document.querySelectorAll('.sample-cert-tag');
  const certResNumber = document.getElementById('certResNumber');
  const certResSpecies = document.getElementById('certResSpecies');
  const certResWeight = document.getElementById('certResWeight');
  const certResCut = document.getElementById('certResCut');
  const certResColor = document.getElementById('certResColor');
  const certResOrigin = document.getElementById('certResOrigin');
  const certResTreatment = document.getElementById('certResTreatment');
  const certResClarity = document.getElementById('certResClarity');
  const certLabName = document.getElementById('certLabName');
  const certDocumentFrame = document.getElementById('certDocumentFrame');

  function simulateCertVerification(certCode) {
    const code = (certCode || '').trim().toUpperCase();
    const gem = GEMSTONES_DATA.find(g => g.cert.toUpperCase() === code);

    if (gem) {
      if (certResNumber) certResNumber.textContent = gem.cert;
      if (certResSpecies) certResSpecies.textContent = `Natural Corundum (${gem.variety})`;
      if (certResWeight) certResWeight.textContent = `${gem.carat.toFixed(2)} carats`;
      if (certResCut) certResCut.textContent = `${capitalize(gem.cut)} Faceted / ${gem.dimensions}`;
      if (certResColor) certResColor.textContent = gem.color;
      if (certResOrigin) certResOrigin.textContent = `Sri Lanka (Ceylon)`;
      if (certResTreatment) certResTreatment.textContent = `No Indications of Thermal Enhancement (${gem.treatment})`;
      if (certResClarity) certResClarity.textContent = gem.clarity;
      if (certLabName) certLabName.textContent = gem.lab.toUpperCase();

      if (certDocumentFrame) {
        certDocumentFrame.style.borderColor = 'rgba(226, 201, 141, 0.45)';
        certDocumentFrame.style.boxShadow = '0 16px 36px -10px rgba(0, 0, 0, 0.8)';
      }
      showToast(`Verified archive record: ${gem.cert}`, 'fa-solid fa-file-shield');
    } else {
      // Generic fallback for any valid formatted query
      if (certResNumber) certResNumber.textContent = code || 'GIA-64210985';
      if (certResSpecies) certResSpecies.textContent = 'Natural Corundum (Ceylon Sapphire)';
      if (certResWeight) certResWeight.textContent = '5.00 carats';
      if (certResCut) certResCut.textContent = 'Cushion Brilliant';
      if (certResColor) certResColor.textContent = 'Royal Blue';
      if (certResOrigin) certResOrigin.textContent = 'Ratnapura, Sri Lanka';
      if (certResTreatment) certResTreatment.textContent = 'No Indications of Heating';
      if (certResClarity) certResClarity.textContent = 'Eye Clean';
      showToast(`Archive record matched for ${code}`, 'fa-solid fa-file-contract');
    }
  }

  if (verifyCertBtn && certNumberInput) {
    verifyCertBtn.addEventListener('click', () => {
      simulateCertVerification(certNumberInput.value);
    });
    certNumberInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        simulateCertVerification(certNumberInput.value);
      }
    });
  }

  sampleCertTags.forEach(tag => {
    tag.addEventListener('click', () => {
      const c = tag.dataset.cert;
      if (certNumberInput) certNumberInput.value = c;
      simulateCertVerification(c);
    });
  });

  // =========================================================================
  // 10. Shopping Cart (Vault Bag) Engine & Slide Drawer
  // =========================================================================
  const cartTriggerBtn = document.getElementById('cartTriggerBtn');
  const cartCloseBtn = document.getElementById('cartCloseBtn');
  const cartDrawer = document.getElementById('cartDrawer');
  const cartOverlay = document.getElementById('cartOverlay');
  const cartItemsList = document.getElementById('cartItemsList');
  const cartEmptyState = document.getElementById('cartEmptyState');
  const cartCountBadge = document.getElementById('cartCountBadge');
  const cartDrawerCount = document.getElementById('cartDrawerCount');
  const cartSubtotal = document.getElementById('cartSubtotal');
  const cartFinalTotal = document.getElementById('cartFinalTotal');
  const cartDiscount = document.getElementById('cartDiscount');
  const discountRow = document.getElementById('discountRow');
  const applyPromoBtn = document.getElementById('applyPromoBtn');
  const promoCodeInput = document.getElementById('promoCodeInput');
  const continueShoppingBtn = document.getElementById('continueShoppingBtn');
  const checkoutTriggerBtn = document.getElementById('checkoutTriggerBtn');

  function openCartDrawer() {
    if (cartDrawer && cartOverlay) {
      cartDrawer.classList.add('open');
      cartDrawer.setAttribute('aria-hidden', 'false');
      cartOverlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeCartDrawer() {
    if (cartDrawer && cartOverlay) {
      cartDrawer.classList.remove('open');
      cartDrawer.setAttribute('aria-hidden', 'true');
      cartOverlay.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  if (cartTriggerBtn) cartTriggerBtn.addEventListener('click', openCartDrawer);
  if (cartCloseBtn) cartCloseBtn.addEventListener('click', closeCartDrawer);
  if (cartOverlay) cartOverlay.addEventListener('click', closeCartDrawer);
  if (continueShoppingBtn) continueShoppingBtn.addEventListener('click', closeCartDrawer);

  function addToCart(gem) {
    const existing = state.cart.find(item => item.id === gem.id);
    if (existing) {
      existing.quantity += 1;
    } else {
      state.cart.push({
        ...gem,
        quantity: 1
      });
    }
    updateCartDrawerUI();
    openCartDrawer();
    showToast(`Added "${gem.title}" to your Collector Bag!`, 'fa-solid fa-bag-shopping');
  }

  function removeFromCart(gemId) {
    state.cart = state.cart.filter(item => item.id !== gemId);
    updateCartDrawerUI();
    showToast('Item removed from Vault Bag', 'fa-solid fa-trash-can');
  }

  function updateItemQty(gemId, change) {
    const item = state.cart.find(i => i.id === gemId);
    if (item) {
      item.quantity += change;
      if (item.quantity <= 0) {
        removeFromCart(gemId);
      } else {
        updateCartDrawerUI();
      }
    }
  }

  function updateCartDrawerUI() {
    const totalItems = state.cart.reduce((sum, item) => sum + item.quantity, 0);

    if (cartCountBadge) cartCountBadge.textContent = totalItems;
    if (cartDrawerCount) cartDrawerCount.textContent = `${totalItems} Item${totalItems === 1 ? '' : 's'}`;

    if (state.cart.length === 0) {
      if (cartItemsList) cartItemsList.innerHTML = '';
      if (cartEmptyState) {
        cartEmptyState.style.display = 'flex';
        cartItemsList.appendChild(cartEmptyState);
      }
      if (cartSubtotal) cartSubtotal.textContent = formatPrice(0);
      if (cartFinalTotal) cartFinalTotal.textContent = formatPrice(0);
      return;
    }

    if (cartEmptyState) cartEmptyState.style.display = 'none';

    // Render cart items
    if (cartItemsList) {
      cartItemsList.innerHTML = state.cart.map(item => `
        <div class="cart-item-card" data-id="${item.id}">
          <img src="${item.image}" alt="${item.title}" class="cart-item-thumb">
          <div class="cart-item-info">
            <h4 class="cart-item-title">${item.title}</h4>
            <p class="cart-item-specs">${item.specsDesc || `${item.carat} ct • ${capitalize(item.cut)} • ${item.treatment}`}</p>
            <div class="cart-item-row">
              <span class="cart-item-price">${formatPrice(item.priceUSD * item.quantity)}</span>
              <div class="cart-qty-ctrl">
                <button class="qty-btn" onclick="window.changeCartQty('${item.id}', -1)">-</button>
                <span class="qty-num">${item.quantity}</span>
                <button class="qty-btn" onclick="window.changeCartQty('${item.id}', 1)">+</button>
              </div>
              <button class="cart-item-remove" onclick="window.removeCartItem('${item.id}')" title="Remove">
                <i class="fa-regular fa-trash-can"></i>
              </button>
            </div>
          </div>
        </div>
      `).join('');
    }

    // Calculations
    const subtotalUSD = state.cart.reduce((sum, item) => sum + (item.priceUSD * item.quantity), 0);
    const discountUSD = subtotalUSD * state.discountPercent;
    const finalTotalUSD = subtotalUSD - discountUSD;

    if (cartSubtotal) cartSubtotal.textContent = formatPrice(subtotalUSD);

    if (discountRow && cartDiscount) {
      if (state.discountPercent > 0) {
        discountRow.classList.remove('hidden');
        cartDiscount.textContent = `-${formatPrice(discountUSD)}`;
      } else {
        discountRow.classList.add('hidden');
      }
    }

    if (cartFinalTotal) cartFinalTotal.textContent = formatPrice(finalTotalUSD);
  }

  // Window bridge for cart item buttons
  window.changeCartQty = (id, change) => updateItemQty(id, change);
  window.removeCartItem = (id) => removeFromCart(id);

  // Promo Code Handler
  if (applyPromoBtn && promoCodeInput) {
    applyPromoBtn.addEventListener('click', () => {
      const code = promoCodeInput.value.trim().toUpperCase();
      if (code === 'CEYLON10') {
        state.discountPercent = 0.10;
        updateCartDrawerUI();
        showToast('VIP Collector 10% privilege applied!', 'fa-solid fa-tag');
      } else if (code === '') {
        showToast('Please enter a promotion code', 'fa-solid fa-circle-exclamation');
      } else {
        showToast('Invalid VIP code. Try "CEYLON10"', 'fa-solid fa-circle-xmark');
      }
    });
  }

  // =========================================================================
  // 11. Wishlist / Favorites Toggle
  // =========================================================================
  const wishlistCountBadge = document.getElementById('wishlistCountBadge');
  const wishlistTriggerBtn = document.getElementById('wishlistTriggerBtn');

  function toggleWishlist(gemId) {
    const gem = GEMSTONES_DATA.find(g => g.id === gemId);
    if (!gem) return;

    if (state.wishlist.has(gemId)) {
      state.wishlist.delete(gemId);
      showToast(`Removed "${gem.title}" from saved jewels`, 'fa-regular fa-heart');
    } else {
      state.wishlist.add(gemId);
      showToast(`Saved "${gem.title}" to your private wishlist`, 'fa-solid fa-heart');
    }

    if (wishlistCountBadge) {
      wishlistCountBadge.textContent = state.wishlist.size;
    }

    // Refresh hearts on cards
    document.querySelectorAll(`.card-fav-btn[data-id="${gemId}"]`).forEach(btn => {
      const isFav = state.wishlist.has(gemId);
      btn.classList.toggle('active', isFav);
      btn.querySelector('i').className = isFav ? 'fa-solid fa-heart' : 'fa-regular fa-heart';
    });
  }

  if (wishlistTriggerBtn) {
    wishlistTriggerBtn.addEventListener('click', () => {
      if (state.wishlist.size === 0) {
        showToast('Your wishlist is currently empty. Click the heart on any gemstone to save.', 'fa-regular fa-heart');
      } else {
        showToast(`You have ${state.wishlist.size} saved gemstone treasure${state.wishlist.size === 1 ? '' : 's'}.`, 'fa-solid fa-heart');
      }
    });
  }

  // =========================================================================
  // 12. Checkout Modal & Reservation Dispatch
  // =========================================================================
  const checkoutModal = document.getElementById('checkoutModal');
  const closeCheckoutBtn = document.getElementById('closeCheckoutBtn');
  const checkoutItemsSummary = document.getElementById('checkoutItemsSummary');
  const checkoutSubtotalDisplay = document.getElementById('checkoutSubtotalDisplay');
  const checkoutFinalTotalDisplay = document.getElementById('checkoutFinalTotalDisplay');
  const vaultCheckoutForm = document.getElementById('vaultCheckoutForm');

  function openCheckoutModal() {
    if (state.cart.length === 0) {
      showToast('Your Vault Bag is empty. Select a gemstone first.', 'fa-solid fa-bag-shopping');
      return;
    }

    closeCartDrawer();

    if (checkoutItemsSummary) {
      checkoutItemsSummary.innerHTML = state.cart.map(item => `
        <div style="display:flex; justify-content:space-between; font-size:0.84rem; padding:0.4rem 0; border-bottom:1px solid rgba(255,255,255,0.05);">
          <span>${item.quantity}x ${item.title}</span>
          <strong style="color:var(--gold-400);">${formatPrice(item.priceUSD * item.quantity)}</strong>
        </div>
      `).join('');
    }

    const subtotalUSD = state.cart.reduce((sum, item) => sum + (item.priceUSD * item.quantity), 0);
    const finalTotalUSD = subtotalUSD - (subtotalUSD * state.discountPercent);

    if (checkoutSubtotalDisplay) checkoutSubtotalDisplay.textContent = formatPrice(subtotalUSD);
    if (checkoutFinalTotalDisplay) checkoutFinalTotalDisplay.textContent = formatPrice(finalTotalUSD);

    if (checkoutModal) {
      checkoutModal.classList.add('show');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeCheckoutModal() {
    if (checkoutModal) {
      checkoutModal.classList.remove('show');
      document.body.style.overflow = '';
    }
  }

  if (checkoutTriggerBtn) checkoutTriggerBtn.addEventListener('click', openCheckoutModal);
  if (closeCheckoutBtn) closeCheckoutBtn.addEventListener('click', closeCheckoutModal);

  if (checkoutModal) {
    checkoutModal.addEventListener('click', (e) => {
      if (e.target === checkoutModal) closeCheckoutModal();
    });
  }

  if (vaultCheckoutForm) {
    vaultCheckoutForm.addEventListener('submit', (e) => {
      e.preventDefault();
      closeCheckoutModal();

      // Clear Cart
      state.cart = [];
      updateCartDrawerUI();

      // Private Salon Confirmation
      const refCode = 'BM-' + Math.floor(100000 + Math.random() * 900000);
      alert('Thank you for your acquisition request.\n\nReference: #' + refCode + '\n\nYour selected gemstone pieces have been reserved. A senior gemologist from our Colombo salon will contact you within two hours to confirm certificate documentation, sizing specifications, and private insured courier arrangements.');
      showToast('Acquisition Request Confirmed (Ref #' + refCode + ')', 'fa-solid fa-file-signature');
    });
  }

  // =========================================================================
  // 13. VIP Concierge Form & Newsletter
  // =========================================================================
  const conciergeForm = document.getElementById('conciergeForm');
  if (conciergeForm) {
    conciergeForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('cName')?.value || 'Collector';
      showToast(`Thank you, ${name}. Our Master Gemologist will contact you shortly.`, 'fa-solid fa-envelope-circle-check');
      conciergeForm.reset();
    });
  }

  const newsletterForm = document.getElementById('newsletterForm');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      showToast('Welcome to The Collector’s Gazette private preview list.', 'fa-solid fa-gem');
      newsletterForm.reset();
    });
  }

  // =========================================================================
  // 14. Mobile Navigation Menu Toggle
  // =========================================================================
  const mobileMenuToggle = document.getElementById('mobileMenuToggle');
  const navLinks = document.getElementById('navLinks');

  if (mobileMenuToggle && navLinks) {
    mobileMenuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('mobile-open');
    });

    document.querySelectorAll('.nav-item').forEach(item => {
      item.addEventListener('click', () => {
        navLinks.classList.remove('mobile-open');
      });
    });
  }

  // =========================================================================
  // 15. Initial Execution
  // =========================================================================
  renderGemstonesGrid();
  updateBespokeValuation();
  updateCartDrawerUI();

  // Highlight default certificate in lab viewer
  simulateCertVerification('GIA-64210985');

  // Launch Cinematic Salon Intro
  initSalonIntro();

  // =========================================================================
  // 16. Luxury Cinematic Salon Intro Experience
  // =========================================================================
  function initSalonIntro() {
    const introOverlay = document.getElementById('luxuryIntroOverlay');
    const introCanvas = document.getElementById('introCanvas');
    const introEnterBtn = document.getElementById('introEnterBtn');
    const introSkipBtn = document.getElementById('introSkipBtn');
    const introProgressFill = document.getElementById('introProgressFill');
    const headerReplayBtn = document.getElementById('headerReplayIntroBtn');
    const footerReplayLink = document.getElementById('footerReplayIntroLink');

    if (!introOverlay) return;

    let animFrameId = null;
    let progressTimer = null;
    let introStartTime = null;
    const INTRO_DURATION_MS = 3800; // 3.8s cinematic duration
    let isDismissed = false;

    // --- Ambient Floating Stardust Particles Canvas ---
    let particles = [];
    let ctx = null;

    if (introCanvas) {
      ctx = introCanvas.getContext('2d');
      function resizeCanvas() {
        if (!introCanvas) return;
        introCanvas.width = window.innerWidth;
        introCanvas.height = window.innerHeight;
      }
      resizeCanvas();
      window.addEventListener('resize', resizeCanvas);

      // Create 45 ambient luxury motes
      const particleCount = 45;
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          radius: Math.random() * 1.8 + 0.6,
          vy: Math.random() * 0.45 + 0.15,
          vx: (Math.random() - 0.5) * 0.25,
          alpha: Math.random() * 0.6 + 0.2,
          pulseSpeed: Math.random() * 0.02 + 0.008,
          pulsePhase: Math.random() * Math.PI * 2,
          isGold: Math.random() > 0.35 // 65% gold, 35% sapphire
        });
      }

      function drawParticles() {
        if (isDismissed || !ctx) return;
        ctx.clearRect(0, 0, introCanvas.width, introCanvas.height);

        particles.forEach(p => {
          p.y -= p.vy;
          p.x += p.vx;
          p.pulsePhase += p.pulseSpeed;
          const currentAlpha = p.alpha * (0.65 + 0.35 * Math.sin(p.pulsePhase));

          if (p.y < -10) {
            p.y = introCanvas.height + 10;
            p.x = Math.random() * introCanvas.width;
          }
          if (p.x < -10) p.x = introCanvas.width + 10;
          if (p.x > introCanvas.width + 10) p.x = -10;

          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          if (p.isGold) {
            ctx.fillStyle = `rgba(226, 201, 141, ${currentAlpha})`;
            ctx.shadowColor = 'rgba(212, 175, 55, 0.4)';
            ctx.shadowBlur = p.radius * 4;
          } else {
            ctx.fillStyle = `rgba(96, 165, 250, ${currentAlpha})`;
            ctx.shadowColor = 'rgba(37, 99, 235, 0.5)';
            ctx.shadowBlur = p.radius * 4;
          }
          ctx.fill();
        });

        animFrameId = requestAnimationFrame(drawParticles);
      }

      drawParticles();
    }

    // --- Progress & Auto-Dismiss System ---
    function startProgressLoop() {
      introStartTime = performance.now();
      function updateProgress(now) {
        if (isDismissed) return;
        const elapsed = now - introStartTime;
        const percent = Math.min(100, (elapsed / INTRO_DURATION_MS) * 100);
        if (introProgressFill) {
          introProgressFill.style.width = `${percent}%`;
        }
        if (elapsed < INTRO_DURATION_MS) {
          progressTimer = requestAnimationFrame(updateProgress);
        } else {
          dismissIntro();
        }
      }
      progressTimer = requestAnimationFrame(updateProgress);
    }

    startProgressLoop();

    // --- Dismiss Function ---
    function dismissIntro() {
      if (isDismissed) return;
      isDismissed = true;
      if (progressTimer) cancelAnimationFrame(progressTimer);

      introOverlay.classList.add('fade-out');

      setTimeout(() => {
        introOverlay.classList.add('dismissed');
        if (animFrameId) cancelAnimationFrame(animFrameId);
      }, 850);
    }

    // --- Replay Function ---
    function replayIntro() {
      isDismissed = false;
      introOverlay.classList.remove('dismissed', 'fade-out');
      if (introProgressFill) introProgressFill.style.width = '0%';

      // Re-trigger SVG animations by cloning emblem
      const emblem = introOverlay.querySelector('.intro-emblem-wrapper');
      if (emblem) {
        const clone = emblem.cloneNode(true);
        emblem.parentNode.replaceChild(clone, emblem);
      }
      const textBlock = introOverlay.querySelector('.intro-brand-reveal');
      if (textBlock) {
        const textClone = textBlock.cloneNode(true);
        textBlock.parentNode.replaceChild(textClone, textBlock);
      }

      if (introCanvas && ctx) {
        drawParticles();
      }
      startProgressLoop();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // --- Event Listeners ---
    if (introEnterBtn) introEnterBtn.addEventListener('click', dismissIntro);
    if (introSkipBtn) introSkipBtn.addEventListener('click', dismissIntro);
    if (headerReplayBtn) headerReplayBtn.addEventListener('click', (e) => {
      e.preventDefault();
      replayIntro();
    });
    if (footerReplayLink) footerReplayLink.addEventListener('click', (e) => {
      e.preventDefault();
      replayIntro();
    });

    // Press Escape to skip
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !isDismissed) {
        dismissIntro();
      }
    });
  }
});
