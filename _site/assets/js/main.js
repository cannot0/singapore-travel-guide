/**
 * Singapore Travel Guide - Main JavaScript
 */

document.addEventListener('DOMContentLoaded', function() {
  // Initialize all modules
  initNavbar();
  initSmoothScroll();
  initCardAnimations();
  initMapPlaceholder();
});

/**
 * Navbar Toggle for Mobile
 */
function initNavbar() {
  const toggle = document.querySelector('.navbar-toggle');
  const menu = document.querySelector('.navbar-menu');

  if (toggle && menu) {
    toggle.addEventListener('click', function() {
      menu.classList.toggle('active');
      toggle.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
      if (!toggle.contains(event.target) && !menu.contains(event.target)) {
        menu.classList.remove('active');
        toggle.classList.remove('active');
      }
    });

    // Close menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(function(link) {
      link.addEventListener('click', function() {
        menu.classList.remove('active');
        toggle.classList.remove('active');
      });
    });
  }
}

/**
 * Smooth Scroll for Anchor Links
 */
function initSmoothScroll() {
  const anchors = document.querySelectorAll('a[href^="#"]');

  anchors.forEach(function(anchor) {
    anchor.addEventListener('click', function(event) {
      const href = this.getAttribute('href');
      if (href !== '#') {
        event.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          const navbarHeight = document.querySelector('.navbar').offsetHeight;
          const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navbarHeight;

          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      }
    });
  });
}

/**
 * Card Hover Animations
 */
function initCardAnimations() {
  const cards = document.querySelectorAll('.attraction-card, .food-card');

  cards.forEach(function(card) {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-5px)';
    });

    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
    });
  });
}

/**
 * Map Placeholder (for pages without real map integration)
 */
function initMapPlaceholder() {
  const mapContainer = document.querySelector('.map-container');

  if (mapContainer && !mapContainer.querySelector('iframe')) {
    mapContainer.innerHTML = `
      <div style="
        width: 100%;
        height: 100%;
        background: linear-gradient(135deg, #e0f2fe 0%, #bae6fd 100%);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: #0369a1;
        font-family: inherit;
      ">
        <span style="font-size: 4rem; margin-bottom: 1rem;">🗺️</span>
        <p style="font-size: 1.25rem; font-weight: 600; margin-bottom: 0.5rem;">地图加载区域</p>
        <p style="font-size: 0.95rem; opacity: 0.8;">请在此处嵌入 Google Maps 或其他地图服务</p>
      </div>
    `;
  }
}

/**
 * Utility: Debounce function
 */
function debounce(func, wait) {
  let timeout;
  return function executedFunction() {
    const context = this;
    const args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(function() {
      func.apply(context, args);
    }, wait);
  };
}

/**
 * Utility: Throttle function
 */
function throttle(func, limit) {
  let inThrottle;
  return function() {
    const context = this;
    const args = arguments;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(function() {
        inThrottle = false;
      }, limit);
    }
  };
}

/**
 * Lazy Load Images (if Intersection Observer is supported)
 */
function initLazyLoad() {
  if ('IntersectionObserver' in window) {
    const images = document.querySelectorAll('img[data-src]');

    const imageObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
          observer.unobserve(img);
        }
      });
    });

    images.forEach(function(img) {
      imageObserver.observe(img);
    });
  }
}

/**
 * Back to Top Button
 */
function initBackToTop() {
  const backToTopButton = document.createElement('button');
  backToTopButton.innerHTML = '↑';
  backToTopButton.className = 'back-to-top';
  backToTopButton.style.cssText = `
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: var(--primary-color);
    color: white;
    border: none;
    cursor: pointer;
    font-size: 1.5rem;
    display: none;
    align-items: center;
    justify-content: center;
    box-shadow: var(--shadow-lg);
    transition: var(--transition-fast);
    z-index: 999;
  `;

  document.body.appendChild(backToTopButton);

  window.addEventListener('scroll', throttle(function() {
    if (window.pageYOffset > 300) {
      backToTopButton.style.display = 'flex';
    } else {
      backToTopButton.style.display = 'none';
    }
  }, 100));

  backToTopButton.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// Initialize additional features
initLazyLoad();
initBackToTop();
