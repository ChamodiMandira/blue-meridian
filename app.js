/**
 * BLUE MERIDIAN — ROYAL CEYLON FINE GEMS & HIGH JEWELRY
 * Interactive E-Commerce, Currency, Cart, Wishlist, Search & Testimonial Engine
 */

document.addEventListener('DOMContentLoaded', () => {

  // =========================================================================
  // 0. Cinematic Intro Overlay Engine
  // =========================================================================
  const luxuryIntroOverlay = document.getElementById('luxuryIntroOverlay');
  const introCanvas = document.getElementById('introCanvas');
  const introEnterBtn = document.getElementById('introEnterBtn');
  const introSkipBtn = document.getElementById('introSkipBtn');
  const introProgressFill = document.getElementById('introProgressFill');

  if (luxuryIntroOverlay) {
    let introDismissed = false;
    let animFrameId = null;

    function dismissIntro(immediate = false) {
      if (introDismissed) return;
      introDismissed = true;
      if (animFrameId) cancelAnimationFrame(animFrameId);
      if (immediate) {
        luxuryIntroOverlay.classList.add('dismissed');
        luxuryIntroOverlay.style.display = 'none';
        return;
      }
      luxuryIntroOverlay.classList.add('fade-out');
      setTimeout(() => {
        luxuryIntroOverlay.classList.add('dismissed');
      }, 850);
    }

    if (introEnterBtn) introEnterBtn.addEventListener('click', () => dismissIntro(false));
    if (introSkipBtn) introSkipBtn.addEventListener('click', () => dismissIntro(true));

    // If deep-linked with a section hash (e.g. #browse-gemstones), skip intro immediately
    if (window.location.hash) {
      dismissIntro(true);
    }

    // Auto-progress bar over 4.5 seconds
    const totalDuration = 4500;
    const startTime = performance.now();

    function updateIntroProgress(now) {
      if (introDismissed) return;
      const elapsed = now - startTime;
      const pct = Math.min(100, (elapsed / totalDuration) * 100);
      if (introProgressFill) introProgressFill.style.width = `${pct}%`;

      if (elapsed >= totalDuration) {
        dismissIntro();
      } else {
        requestAnimationFrame(updateIntroProgress);
      }
    }
    requestAnimationFrame(updateIntroProgress);

    // Interactive Escape key dismissal
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !introDismissed) {
        dismissIntro();
      }
    });

    // Ambient Stardust Canvas
    if (introCanvas) {
      const ctx = introCanvas.getContext('2d');
      let width = introCanvas.width = window.innerWidth;
      let height = introCanvas.height = window.innerHeight;

      window.addEventListener('resize', () => {
        if (!introDismissed && introCanvas) {
          width = introCanvas.width = window.innerWidth;
          height = introCanvas.height = window.innerHeight;
        }
      });

      const particles = [];
      const particleCount = Math.min(65, Math.floor(width / 22));
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius: Math.random() * 2 + 0.6,
          speedY: Math.random() * 0.45 + 0.15,
          speedX: (Math.random() - 0.5) * 0.3,
          color: Math.random() > 0.4 ? 'rgba(243, 217, 157, ' : 'rgba(96, 165, 250, ',
          alpha: Math.random() * 0.7 + 0.2,
          pulse: Math.random() * Math.PI * 2,
          pulseSpeed: Math.random() * 0.04 + 0.015
        });
      }

      function drawParticles() {
        if (introDismissed) return;
        ctx.clearRect(0, 0, width, height);

        particles.forEach(p => {
          p.y -= p.speedY;
          p.x += p.speedX;
          p.pulse += p.pulseSpeed;

          if (p.y < -10) {
            p.y = height + 10;
            p.x = Math.random() * width;
          }
          if (p.x < -10) p.x = width + 10;
          if (p.x > width + 10) p.x = -10;

          const currentAlpha = Math.max(0.1, p.alpha * (0.6 + 0.4 * Math.sin(p.pulse)));
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fillStyle = p.color + currentAlpha + ')';
          ctx.fill();

          if (p.radius > 1.8) {
            ctx.shadowColor = 'rgba(243, 217, 157, 0.6)';
            ctx.shadowBlur = 8;
          } else {
            ctx.shadowBlur = 0;
          }
        });

        animFrameId = requestAnimationFrame(drawParticles);
      }
      animFrameId = requestAnimationFrame(drawParticles);
    }
  }

  // =========================================================================
  // 1. Currency Rates & State Management
  // =========================================================================
  const CURRENCY_DATA = {
    USD: { symbol: '$', rate: 1, code: 'USD', locale: 'en-US' },
    LKR: { symbol: 'Rs', rate: 305, code: 'LKR', locale: 'en-LK' },
    EUR: { symbol: '€', rate: 0.92, code: 'EUR', locale: 'de-DE' },
    GBP: { symbol: '£', rate: 0.78, code: 'GBP', locale: 'en-GB' }
  };

  let currentCurrency = 'USD';
  let cartItems = [];
  let savedWishlist = [];

  // Format price helper
  function formatPrice(amountUSD) {
    const curr = CURRENCY_DATA[currentCurrency];
    const converted = Math.round(amountUSD * curr.rate);
    return `${curr.symbol} ${converted.toLocaleString(curr.locale)}`;
  }

  // Update all prices across the document
  function updateAllPrices() {
    // 1. Update main price elements
    document.querySelectorAll('.main-price').forEach(el => {
      const usd = parseFloat(el.getAttribute('data-usd'));
      if (!isNaN(usd)) {
        el.textContent = formatPrice(usd);
      }
    });

    // 2. Update per-carat elements
    document.querySelectorAll('.per-carat').forEach(el => {
      const usdCarat = parseFloat(el.getAttribute('data-usd-carat'));
      if (!isNaN(usdCarat)) {
        el.textContent = `${formatPrice(usdCarat)} / ct`;
      }
    });

    // 3. Update cart drawer & totals
    renderCart();
    renderWishlist();
  }

  // =========================================================================
  // 2. Currency Switcher Dropdown
  // =========================================================================
  const currencyToggleBtn = document.getElementById('currencyToggleBtn');
  const currencyDropdown = document.getElementById('currencyDropdown');
  const currencyMenu = document.getElementById('currencyMenu');
  const currentCurrencySymbol = document.getElementById('currentCurrencySymbol');
  const currentCurrencyCode = document.getElementById('currentCurrencyCode');

  if (currencyToggleBtn && currencyMenu) {
    currencyToggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      currencyMenu.classList.toggle('active');
    });

    document.addEventListener('click', (e) => {
      if (!currencyDropdown.contains(e.target)) {
        currencyMenu.classList.remove('active');
      }
    });

    currencyMenu.querySelectorAll('.currency-option').forEach(btn => {
      btn.addEventListener('click', () => {
        const selected = btn.getAttribute('data-currency');
        if (CURRENCY_DATA[selected]) {
          currentCurrency = selected;
          currentCurrencySymbol.textContent = CURRENCY_DATA[selected].symbol;
          currentCurrencyCode.textContent = selected;
          
          currencyMenu.querySelectorAll('.currency-option').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          currencyMenu.classList.remove('active');

          updateAllPrices();
          showToast(`Currency switched to ${selected}`);
        }
      });
    });
  }

  // =========================================================================
  // 3. Search Bar Dropdown & Live Filtering
  // =========================================================================
  const searchTriggerBtn = document.getElementById('searchTriggerBtn');
  const headerSearchBar = document.getElementById('headerSearchBar');
  const closeSearchBtn = document.getElementById('closeSearchBtn');
  const liveSearchInput = document.getElementById('liveSearchInput');

  if (searchTriggerBtn && headerSearchBar) {
    searchTriggerBtn.addEventListener('click', () => {
      headerSearchBar.classList.toggle('active');
      if (headerSearchBar.classList.contains('active')) {
        liveSearchInput.focus();
      }
    });

    if (closeSearchBtn) {
      closeSearchBtn.addEventListener('click', () => {
        headerSearchBar.classList.remove('active');
        liveSearchInput.value = '';
        filterItems('');
      });
    }

    if (liveSearchInput) {
      liveSearchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        filterItems(query);
      });
    }
  }

  function filterItems(query) {
    const productCards = document.querySelectorAll('.figma-product-card, .figma-jewel-card');
    productCards.forEach(card => {
      const text = card.textContent.toLowerCase();
      if (!query || text.includes(query)) {
        card.style.display = '';
      } else {
        card.style.display = 'none';
      }
    });
  }

  // =========================================================================
  // 4. Cart Drawer & Item Management
  // =========================================================================
  const cartTriggerBtn = document.getElementById('cartTriggerBtn');
  const cartDrawer = document.getElementById('cartDrawer');
  const cartModalBackdrop = document.getElementById('cartModalBackdrop');
  const closeCartBtn = document.getElementById('closeCartBtn');
  const cartBadge = document.getElementById('cartBadge');
  const cartDrawerCount = document.getElementById('cartDrawerCount');
  const cartItemsList = document.getElementById('cartItemsList');
  const emptyCartState = document.getElementById('emptyCartState');
  const cartSubtotalVal = document.getElementById('cartSubtotalVal');
  const cartTotalVal = document.getElementById('cartTotalVal');
  const emptyCartExploreBtn = document.getElementById('emptyCartExploreBtn');

  function openCart() {
    cartDrawer.classList.add('active');
    cartModalBackdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeCart() {
    cartDrawer.classList.remove('active');
    cartModalBackdrop.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (cartTriggerBtn) cartTriggerBtn.addEventListener('click', openCart);
  if (closeCartBtn) closeCartBtn.addEventListener('click', closeCart);
  if (cartModalBackdrop) cartModalBackdrop.addEventListener('click', closeCart);
  if (emptyCartExploreBtn) {
    emptyCartExploreBtn.addEventListener('click', () => {
      closeCart();
    });
  }

  // Add to cart buttons
  document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const id = btn.getAttribute('data-id');
      const name = btn.getAttribute('data-name');
      const priceUSD = parseFloat(btn.getAttribute('data-price'));
      const img = btn.getAttribute('data-img');
      const spec = btn.getAttribute('data-spec');

      const existing = cartItems.find(item => item.id === id);
      if (existing) {
        existing.quantity += 1;
      } else {
        cartItems.push({
          id,
          name,
          priceUSD,
          img,
          spec,
          quantity: 1
        });
      }

      updateCartBadges();
      renderCart();
      openCart();
      showToast(`Added "${name}" to Bag`);
    });
  });

  function updateCartBadges() {
    const totalCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
    if (cartBadge) cartBadge.textContent = totalCount;
    if (cartDrawerCount) cartDrawerCount.textContent = totalCount;
  }

  function renderCart() {
    if (!cartItemsList) return;

    if (cartItems.length === 0) {
      cartItemsList.innerHTML = `
        <div class="empty-cart-state" id="emptyCartState">
          <i class="fa-solid fa-gem"></i>
          <p>Your acquisition bag is currently empty.</p>
          <a href="#featured-gemstones" class="figma-btn figma-btn-outline btn-sm" id="emptyCartExploreBtn">Explore Collection</a>
        </div>
      `;
      if (cartSubtotalVal) cartSubtotalVal.textContent = formatPrice(0);
      if (cartTotalVal) cartTotalVal.textContent = formatPrice(0);
      return;
    }

    let subtotalUSD = 0;
    let itemsHTML = '';

    cartItems.forEach(item => {
      const itemTotalUSD = item.priceUSD * item.quantity;
      subtotalUSD += itemTotalUSD;

      itemsHTML += `
        <div class="cart-item-card">
          <img src="${item.img}" alt="${item.name}">
          <div class="cart-item-info">
            <h4 class="cart-item-name">${item.name}</h4>
            <span class="cart-item-spec">${item.spec} (Qty: ${item.quantity})</span>
            <div class="cart-item-price">${formatPrice(itemTotalUSD)}</div>
          </div>
          <button class="cart-item-remove" data-id="${item.id}" aria-label="Remove item" title="Remove">
            <i class="fa-solid fa-trash-can"></i>
          </button>
        </div>
      `;
    });

    cartItemsList.innerHTML = itemsHTML;

    // Attach remove handlers
    cartItemsList.querySelectorAll('.cart-item-remove').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        cartItems = cartItems.filter(item => item.id !== id);
        updateCartBadges();
        renderCart();
        showToast("Item removed from Bag");
      });
    });

    if (cartSubtotalVal) cartSubtotalVal.textContent = formatPrice(subtotalUSD);
    if (cartTotalVal) cartTotalVal.textContent = formatPrice(subtotalUSD);
  }

  // =========================================================================
  // 5. Wishlist Drawer & Toggle Management
  // =========================================================================
  const wishlistTriggerBtn = document.getElementById('wishlistTriggerBtn');
  const wishlistDrawer = document.getElementById('wishlistDrawer');
  const wishlistModalBackdrop = document.getElementById('wishlistModalBackdrop');
  const closeWishlistBtn = document.getElementById('closeWishlistBtn');
  const wishlistBadge = document.getElementById('wishlistBadge');
  const wishlistDrawerCount = document.getElementById('wishlistDrawerCount');
  const wishlistItemsList = document.getElementById('wishlistItemsList');

  function openWishlist() {
    wishlistDrawer.classList.add('active');
    wishlistModalBackdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeWishlist() {
    wishlistDrawer.classList.remove('active');
    wishlistModalBackdrop.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (wishlistTriggerBtn) wishlistTriggerBtn.addEventListener('click', openWishlist);
  if (closeWishlistBtn) closeWishlistBtn.addEventListener('click', closeWishlist);
  if (wishlistModalBackdrop) wishlistModalBackdrop.addEventListener('click', closeWishlist);

  document.querySelectorAll('.card-wishlist-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const id = btn.getAttribute('data-id');
      const card = btn.closest('.figma-product-card, .figma-jewel-card');
      const name = card.getAttribute('data-name');
      const priceUSD = parseFloat(card.getAttribute('data-base-price'));
      const img = card.querySelector('img').getAttribute('src');

      const index = savedWishlist.findIndex(item => item.id === id);
      if (index > -1) {
        savedWishlist.splice(index, 1);
        btn.classList.remove('active');
        btn.innerHTML = '<i class="fa-regular fa-heart"></i>';
        showToast(`Removed "${name}" from Wishlist`);
      } else {
        savedWishlist.push({ id, name, priceUSD, img });
        btn.classList.add('active');
        btn.innerHTML = '<i class="fa-solid fa-heart" style="color:#ef4444"></i>';
        showToast(`Saved "${name}" to Wishlist`);
      }

      updateWishlistBadges();
      renderWishlist();
    });
  });

  function updateWishlistBadges() {
    const count = savedWishlist.length;
    if (wishlistBadge) wishlistBadge.textContent = count;
    if (wishlistDrawerCount) wishlistDrawerCount.textContent = count;
  }

  function renderWishlist() {
    if (!wishlistItemsList) return;

    if (savedWishlist.length === 0) {
      wishlistItemsList.innerHTML = `
        <div class="empty-cart-state" id="emptyWishlistState">
          <i class="fa-regular fa-heart"></i>
          <p>No gemstones saved yet. Click the heart icon on any piece to save it here.</p>
        </div>
      `;
      return;
    }

    let itemsHTML = '';
    savedWishlist.forEach(item => {
      itemsHTML += `
        <div class="cart-item-card">
          <img src="${item.img}" alt="${item.name}">
          <div class="cart-item-info">
            <h4 class="cart-item-name">${item.name}</h4>
            <div class="cart-item-price">${formatPrice(item.priceUSD)}</div>
          </div>
          <button class="cart-item-remove" data-wishlist-id="${item.id}" aria-label="Remove from Wishlist" title="Remove">
            <i class="fa-solid fa-trash-can"></i>
          </button>
        </div>
      `;
    });

    wishlistItemsList.innerHTML = itemsHTML;

    wishlistItemsList.querySelectorAll('[data-wishlist-id]').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-wishlist-id');
        savedWishlist = savedWishlist.filter(item => item.id !== id);
        
        // Uncheck matching card button
        const cardBtn = document.querySelector(`.card-wishlist-btn[data-id="${id}"]`);
        if (cardBtn) {
          cardBtn.classList.remove('active');
          cardBtn.innerHTML = '<i class="fa-regular fa-heart"></i>';
        }

        updateWishlistBadges();
        renderWishlist();
        showToast("Removed from Wishlist");
      });
    });
  }

  // =========================================================================
  // 6. Testimonial Carousel Switcher
  // =========================================================================
  const TESTIMONIALS_DATA = [
    {
      quote: '"I purchased a 2.5ct blue sapphire for my wife\'s engagement ring. The stone arrived beautifully packaged with the GIA certificate. The quality exceeded my expectations — a pure cornflower blue that photographs magnificently. Lanka Gem House has a lifelong customer."',
      avatar: 'A',
      name: 'Amara de Silva',
      location: 'London, United Kingdom'
    },
    {
      quote: '"As an avid gemstone collector for over twenty years, finding genuine untreated Ceylon rubies with this degree of chromium fluorescence is exceedingly rare. Blue Meridian provided complete laboratory provenance and verified mine traceability."',
      avatar: 'M',
      name: 'Michael Vance',
      location: 'Zurich, Switzerland'
    },
    {
      quote: '"The custom sapphire halo ring crafted in Colombo was delivered to Dubai in under four days via insured armored courier. The six-ray star sapphire exhibits remarkable symmetry and depth."',
      avatar: 'E',
      name: 'Elena Rostova',
      location: 'Dubai, United Arab Emirates'
    },
    {
      quote: '"Spectacular natural alexandrite with a crisp, mesmerizing color transition from emerald teal in daylight to deep ruby crimson under tungsten incandescent illumination. Flawless consultation."',
      avatar: 'K',
      name: 'Kenji Takahashi',
      location: 'Tokyo, Japan'
    }
  ];

  const testimonialQuote = document.getElementById('testimonialQuote');
  const testimonialAvatar = document.getElementById('testimonialAvatar');
  const testimonialName = document.getElementById('testimonialName');
  const testimonialLoc = document.getElementById('testimonialLoc');
  const testimonialDots = document.getElementById('testimonialDots');

  if (testimonialDots) {
    testimonialDots.querySelectorAll('.dot').forEach(dot => {
      dot.addEventListener('click', () => {
        const index = parseInt(dot.getAttribute('data-index'), 10);
        if (TESTIMONIALS_DATA[index]) {
          testimonialDots.querySelectorAll('.dot').forEach(d => d.classList.remove('active'));
          dot.classList.add('active');

          const t = TESTIMONIALS_DATA[index];
          testimonialQuote.textContent = t.quote;
          testimonialAvatar.textContent = t.avatar;
          testimonialName.textContent = t.name;
          testimonialLoc.textContent = t.location;
        }
      });
    });
  }

  // =========================================================================
  // 7. Mobile Navigation Drawer
  // =========================================================================
  const mobileMenuToggle = document.getElementById('mobileMenuToggle');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const mobileDrawerClose = document.getElementById('mobileDrawerClose');

  if (mobileMenuToggle && mobileDrawer) {
    mobileMenuToggle.addEventListener('click', () => {
      mobileDrawer.classList.add('active');
    });

    if (mobileDrawerClose) {
      mobileDrawerClose.addEventListener('click', () => {
        mobileDrawer.classList.remove('active');
      });
    }

    mobileDrawer.querySelectorAll('.drawer-link').forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('active');
      });
    });
  }

  // =========================================================================
  // 8. Acquisition Inquiry Modal
  // =========================================================================
  const proceedCheckoutBtn = document.getElementById('proceedCheckoutBtn');
  const checkoutModal = document.getElementById('checkoutModal');
  const closeCheckoutBtn = document.getElementById('closeCheckoutBtn');
  const vaultCheckoutForm = document.getElementById('vaultCheckoutForm');
  const checkoutItemsSummary = document.getElementById('checkoutItemsSummary');
  const checkoutSubtotalDisplay = document.getElementById('checkoutSubtotalDisplay');
  const checkoutFinalTotalDisplay = document.getElementById('checkoutFinalTotalDisplay');

  if (proceedCheckoutBtn && checkoutModal) {
    proceedCheckoutBtn.addEventListener('click', () => {
      if (cartItems.length === 0) {
        showToast("Your acquisition bag is empty. Please add a stone first.");
        return;
      }

      closeCart();

      // Populate summary
      let subtotal = 0;
      let summaryHTML = '';
      cartItems.forEach(item => {
        const itemTot = item.priceUSD * item.quantity;
        subtotal += itemTot;
        summaryHTML += `
          <div style="display:flex; justify-content:space-between; margin-bottom:0.5rem; font-size:0.85rem;">
            <span>${item.name} (x${item.quantity})</span>
            <span style="color:#f3d99d; font-weight:700;">${formatPrice(itemTot)}</span>
          </div>
        `;
      });

      if (checkoutItemsSummary) checkoutItemsSummary.innerHTML = summaryHTML;
      if (checkoutSubtotalDisplay) checkoutSubtotalDisplay.textContent = formatPrice(subtotal);
      if (checkoutFinalTotalDisplay) checkoutFinalTotalDisplay.textContent = formatPrice(subtotal);

      checkoutModal.classList.add('active');
    });

    if (closeCheckoutBtn) {
      closeCheckoutBtn.addEventListener('click', () => {
        checkoutModal.classList.remove('active');
      });
    }

    checkoutModal.addEventListener('click', (e) => {
      if (e.target === checkoutModal) {
        checkoutModal.classList.remove('active');
      }
    });

    if (vaultCheckoutForm) {
      vaultCheckoutForm.addEventListener('submit', (e) => {
        e.preventDefault();
        checkoutModal.classList.remove('active');
        cartItems = [];
        updateCartBadges();
        renderCart();
        showToast("✓ Acquisition inquiry submitted! A senior gemologist will contact you within 2 hours.");
      });
    }
  }

  // =========================================================================
  // 9. Toast Notification Engine
  // =========================================================================
  function showToast(message) {
    const container = document.getElementById('toastContainer');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'toast-alert';
    toast.style.cssText = `
      background: #141b2a;
      color: #f8fafc;
      border: 1px solid rgba(224, 184, 90, 0.4);
      padding: 0.9rem 1.4rem;
      border-radius: 8px;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.6);
      display: flex;
      align-items: center;
      gap: 0.75rem;
      font-size: 0.88rem;
      font-weight: 500;
      margin-bottom: 0.75rem;
      animation: toastSlideIn 0.3s ease forwards;
    `;

    toast.innerHTML = `<i class="fa-solid fa-gem" style="color:#e0b85a;"></i> <span>${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 350);
    }, 3800);
  }

  // Initialize
  updateAllPrices();
  updateCartBadges();
  updateWishlistBadges();

});
