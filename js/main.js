/* ============================================
   AKRAM FISH HOUSE & RESTAURANT
   Main JavaScript
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

    // ---- Page Loader ----
    const loader = document.getElementById('pageLoader');
    if (loader) {
        window.addEventListener('load', () => {
            setTimeout(() => loader.classList.add('hidden'), 400);
        });
        // Fallback
        setTimeout(() => loader.classList.add('hidden'), 2000);
    }

    // ---- Sticky Navbar ----
    const navbar = document.getElementById('navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            navbar.classList.toggle('scrolled', window.scrollY > 50);
        });
    }

    // ---- Hamburger Menu ----
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
        // Close on link click
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }

    // ---- Scroll to Top ----
    const scrollBtn = document.getElementById('scrollTop');
    if (scrollBtn) {
        window.addEventListener('scroll', () => {
            scrollBtn.classList.toggle('visible', window.scrollY > 400);
        });
        scrollBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // ---- Scroll Animations ----
    const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));

    // ---- MENU PAGE: Dynamic Rendering ----
    const menuTabs = document.getElementById('menuTabs');
    const menuContent = document.getElementById('menuContent');

    if (menuTabs && menuContent && typeof menuData !== 'undefined') {
        const categories = Object.keys(menuData);
        let activeTab = categories[0];

        // Build Tabs
        function renderTabs() {
            menuTabs.innerHTML = categories.map(key => {
                const cat = menuData[key];
                return `<button class="menu-tab ${key === activeTab ? 'active' : ''}" data-cat="${key}">
          ${cat.en}
          <span class="tab-urdu">${cat.ur}</span>
        </button>`;
            }).join('');

            // Tab click handlers
            menuTabs.querySelectorAll('.menu-tab').forEach(tab => {
                tab.addEventListener('click', () => {
                    activeTab = tab.dataset.cat;
                    renderTabs();
                    renderMenuItems();
                    // Scroll active tab into view
                    tab.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
                });
            });
        }

        // Build Menu Items
        function renderMenuItems() {
            const cat = menuData[activeTab];
            if (!cat) return;

            let html = `
        <div class="menu-category-header">
          <h2>${cat.en}</h2>
          <p class="urdu-cat-name">${cat.ur}</p>
        </div>
        <div class="menu-grid">
      `;

            cat.items.forEach(item => {
                const whatsappMsg = encodeURIComponent(`Hi! I want to order: ${item.en} (${item.ur})`);
                const whatsappURL = `https://wa.me/923336019800?text=${whatsappMsg}`;

                html += `
          <div class="menu-item">
            <span class="menu-item-number">#${item.id}</span>
            <div class="menu-item-header">
              <h3>${item.en}</h3>
              <p class="item-urdu-name">${item.ur}</p>
            </div>
            <div class="menu-item-prices">`;

                // Full price
                if (item.full) {
                    html += `<div class="price-tag">
            <span class="qty-label">${item.fullQty || 'Price'}</span>
            <span class="price">Rs. ${item.full}</span>
          </div>`;
                }

                // Half price
                if (item.half) {
                    html += `<div class="price-tag">
            <span class="qty-label">${item.halfQty || 'Half'}</span>
            <span class="price">Rs. ${item.half}</span>
          </div>`;
                }

                html += `</div>
            <a href="${whatsappURL}" target="_blank" class="wa-order-btn">
              <i class="fab fa-whatsapp"></i> Order on WhatsApp
            </a>
          </div>`;
            });

            html += '</div>';
            menuContent.innerHTML = html;
        }

        // Initial render
        renderTabs();
        renderMenuItems();

        // Check URL hash for category
        if (window.location.hash) {
            const hash = window.location.hash.substring(1);
            if (menuData[hash]) {
                activeTab = hash;
                renderTabs();
                renderMenuItems();
            }
        }
    }
});
