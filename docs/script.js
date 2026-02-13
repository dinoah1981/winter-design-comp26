/**
 * Winter 2026 Design Competition - Main JavaScript
 * Handles: Mobile menu, scroll effects, link application, scroll reveal animations
 */

// ============================================
// LINK CONFIGURATION
// ============================================
// Links are defined in the <script> tag in index.html
// Edit them there — the LINKS variable is already available globally

// ============================================
// APPLY LINKS TO ELEMENTS
// ============================================
function applyLinks() {
  // Find all elements with data-link attribute
  const linkElements = document.querySelectorAll('[data-link]');
  
  linkElements.forEach(element => {
    const linkKey = element.getAttribute('data-link');
    if (LINKS[linkKey]) {
      element.setAttribute('href', LINKS[linkKey]);
      
      // If it's a placeholder link (#), add a click handler to alert the user
      if (LINKS[linkKey] === '#') {
        element.addEventListener('click', (e) => {
          e.preventDefault();
          // Only show alert if user is logged in as admin (you can remove this check)
          console.log(`Link "${linkKey}" needs to be configured in script.js`);
        });
      }
    }
  });
}

// ============================================
// MOBILE MENU
// ============================================
function initMobileMenu() {
  const menuToggle = document.getElementById('menuToggle');
  const mobileNav = document.getElementById('mobileNav');
  
  if (!menuToggle || !mobileNav) return;
  
  menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    mobileNav.classList.toggle('active');
  });
  
  // Close menu when clicking a link
  const mobileLinks = mobileNav.querySelectorAll('a');
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      menuToggle.classList.remove('active');
      mobileNav.classList.remove('active');
    });
  });
}

// ============================================
// HEADER SCROLL EFFECT
// ============================================
function initHeaderScroll() {
  const header = document.getElementById('header');
  if (!header) return;
  
  let lastScroll = 0;
  
  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
  });
}

// ============================================
// SCROLL REVEAL ANIMATIONS
// ============================================
function initScrollReveal() {
  // Add reveal class to sections that should animate
  const revealElements = document.querySelectorAll(
    '.section-header, .material-card, .team-item, .workshop-day, .prize-card, .resource-card, .overview-text, .overview-image, .stats'
  );
  
  revealElements.forEach((el, index) => {
    el.classList.add('reveal');
    // Add stagger delay based on index
    el.style.transitionDelay = `${(index % 5) * 0.1}s`;
  });
  
  // Create intersection observer
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.2
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        // Optionally unobserve after revealing
        // observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  revealElements.forEach(el => observer.observe(el));
}

// ============================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ============================================
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#') return; // Skip placeholder links
      
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

// ============================================
// INITIALIZE EVERYTHING
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  applyLinks();
  initMobileMenu();
  initHeaderScroll();
  initScrollReveal();
  initSmoothScroll();
});

// ============================================
// HOW TO EDIT LINKS
// ============================================
/*
To update a link, simply:

1. Open script.js
2. Find the link you want to update in the LINKS object above
3. Replace the placeholder URL with your actual Google Doc/Sheet URL
4. Save and push to GitHub

Example:
  Before: schedule: "https://docs.google.com/spreadsheets/d/YOUR_SPREADSHEET_ID/edit"
  After:  schedule: "https://docs.google.com/spreadsheets/d/1ABC123xyz/edit"

That's it! The link will automatically update everywhere on the site.
*/
