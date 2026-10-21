(() => {
  const grid = document.getElementById('productGrid');
  const empty = document.getElementById('emptyState');
  const search = document.getElementById('searchInput');
  const filters = [...document.querySelectorAll('.filter-btn')];
  let activeCategory = 'All';

  function safeExternalUrl(value) {
    try {
      const u = new URL(value);
      return ['https:', 'http:'].includes(u.protocol) ? u.href : '';
    } catch { return ''; }
  }
  function render() {
    const query = (search.value || '').trim().toLowerCase();
    const items = (window.COZY_PRODUCTS || []).filter(p =>
      (activeCategory === 'All' || p.category === activeCategory) &&
      [p.name,p.category,p.description,p.tag].join(' ').toLowerCase().includes(query)
    );
    grid.innerHTML = '';
    empty.hidden = items.length > 0;
    items.forEach(p => {
      const link = safeExternalUrl(p.affiliateUrl);
      const card = document.createElement('article');
      card.className = 'product-card';
      const image = document.createElement('div');
      image.className = 'product-image';
      const img = document.createElement('img');
      img.src = p.image; img.alt = p.name; img.loading = 'lazy';
      img.onerror = () => { img.style.display = 'none'; image.style.background = '#d9d7cd'; };
      const tag = document.createElement('span'); tag.className = 'product-tag'; tag.textContent = p.tag || p.category;
      image.append(img, tag);
      const info = document.createElement('div'); info.className = 'product-info';
      const cat = document.createElement('div'); cat.className = 'product-category'; cat.textContent = p.category;
      const name = document.createElement('h3'); name.className = 'product-name'; name.textContent = p.name;
      const desc = document.createElement('p'); desc.className = 'product-description'; desc.textContent = p.description;
      const bottom = document.createElement('div'); bottom.className = 'product-bottom';
      const price = document.createElement('div'); price.className = 'product-price'; price.textContent = p.price || 'Check store';
      const priceNote = document.createElement('small'); priceNote.textContent = 'Confirm current price at store'; price.appendChild(priceNote);
      const buy = document.createElement('a'); buy.className = 'buy-link'; buy.textContent = link ? (p.button || 'Shop now') + ' ↗' : 'Add affiliate link ↗';
      if (link) { buy.href = link; buy.target = '_blank'; buy.rel = 'sponsored nofollow noopener'; }
      else { buy.href = 'contact.html#affiliate-setup'; buy.setAttribute('aria-label', 'Learn how to add an affiliate link for ' + p.name); }
      bottom.append(price, buy); info.append(cat, name, desc, bottom); card.append(image, info); grid.appendChild(card);
    });
  }
  filters.forEach(btn => btn.addEventListener('click', () => {
    activeCategory = btn.dataset.filter;
    filters.forEach(b => b.classList.toggle('active', b === btn));
    render();
  }));
  document.querySelectorAll('.collection-card').forEach(btn => btn.addEventListener('click', () => {
    activeCategory = btn.dataset.category;
    filters.forEach(b => b.classList.toggle('active', b.dataset.filter === activeCategory));
    render(); document.getElementById('shop').scrollIntoView({behavior:'smooth'});
  }));
  search.addEventListener('input', render);
  const menuToggle = document.getElementById('menuToggle');
  const nav = document.getElementById('mainNav');
  menuToggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  });
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));
  document.getElementById('year').textContent = new Date().getFullYear();
  document.getElementById('newsletterForm').addEventListener('submit', e => {
    e.preventDefault();
    const email = document.getElementById('emailInput').value.trim();
    document.getElementById('newsletterMessage').textContent = email ? 'Thanks! This demo does not store or send your email yet.' : '';
    e.target.reset();
  });
  render();
})();
