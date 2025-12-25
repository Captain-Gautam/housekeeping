// ===========================
// Navigation & Scroll Effects
// ===========================

// Navbar scroll effect
const navbar = document.getElementById('navbar');
const scrollTop = document.getElementById('scrollTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
        scrollTop.classList.add('active');
    } else {
        navbar.classList.remove('scrolled');
        scrollTop.classList.remove('active');
    }
});

// Mobile menu toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Active nav link on scroll
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
});

// Smooth scroll to top
scrollTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ===========================
// Intersection Observer Animations
// ===========================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all animated elements
const animatedElements = document.querySelectorAll(`
    .product-card,
    .gallery-item,
    .about-card,
    .feature-item,
    .info-card,
    .choose-card
`);

animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ===========================
// Product Card Interactions
// ===========================

const productCards = document.querySelectorAll('.product-card');

productCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// ===========================
// Gallery Modal (Optional Enhancement)
// ===========================

const galleryItems = document.querySelectorAll('.gallery-item');

galleryItems.forEach(item => {
    const viewBtn = item.querySelector('.btn-view');
    
    if (viewBtn) {
        viewBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const category = item.getAttribute('data-category');
            const title = item.querySelector('h4').textContent;
            
            // Show alert for demo - can be replaced with modal
            alert(`Viewing: ${title}\nCategory: ${category}\n\nThis would open a detailed view with product information.`);
        });
    }
});

// ===========================
// Stats Counter Animation
// ===========================

const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumbers = entry.target.querySelectorAll('.stat-number');
            
            statNumbers.forEach(stat => {
                const text = stat.textContent;
                const hasPlus = text.includes('+');
                const number = parseInt(text.replace(/\D/g, ''));
                
                if (!isNaN(number)) {
                    animateNumber(stat, number, hasPlus);
                }
            });
            
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const heroStats = document.querySelector('.hero-stats');
if (heroStats) {
    statsObserver.observe(heroStats);
}

function animateNumber(element, target, hasPlus = false) {
    let current = 0;
    const increment = target / 50;
    const duration = 2000;
    const stepTime = duration / 50;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target + (hasPlus ? '+' : '');
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current) + (hasPlus ? '+' : '');
        }
    }, stepTime);
}

// ===========================
// Form Validation & Contact Actions
// ===========================

// WhatsApp link tracker
const whatsappLinks = document.querySelectorAll('a[href*="whatsapp"]');
whatsappLinks.forEach(link => {
    link.addEventListener('click', () => {
        console.log('WhatsApp link clicked');
        // Analytics tracking can be added here
    });
});

// Email link tracker
const emailLinks = document.querySelectorAll('a[href^="mailto"]');
emailLinks.forEach(link => {
    link.addEventListener('click', () => {
        console.log('Email link clicked');
        // Analytics tracking can be added here
    });
});

// Phone link tracker
const phoneLinks = document.querySelectorAll('a[href^="tel"]');
phoneLinks.forEach(link => {
    link.addEventListener('click', () => {
        console.log('Phone link clicked');
        // Analytics tracking can be added here
    });
});

// ===========================
// Dynamic Background Particles (Optional)
// ===========================

function createFloatingParticles() {
    const hero = document.querySelector('.hero-background');
    if (!hero) return;
    
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: ${Math.random() * 5 + 2}px;
            height: ${Math.random() * 5 + 2}px;
            background: rgba(14, 165, 233, ${Math.random() * 0.3 + 0.1});
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: float ${Math.random() * 10 + 5}s ease-in-out infinite;
            animation-delay: ${Math.random() * 5}s;
        `;
        hero.appendChild(particle);
    }
}

// Uncomment to add particles
// createFloatingParticles();

// ===========================
// Loading Animation
// ===========================

window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// ===========================
// Scroll Progress Indicator
// ===========================

function createScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 4px;
        background: linear-gradient(90deg, #0ea5e9 0%, #10b981 100%);
        z-index: 9999;
        transition: width 0.1s ease;
    `;
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (window.scrollY / windowHeight) * 100;
        progressBar.style.width = scrolled + '%';
    });
}

createScrollProgress();

// ===========================
// Product Filter (Optional Enhancement)
// ===========================

function initProductFilter() {
    const productsSection = document.querySelector('.products');
    if (!productsSection) return;
    
    // Create filter buttons
    const filterContainer = document.createElement('div');
    filterContainer.className = 'product-filters';
    filterContainer.style.cssText = `
        display: flex;
        justify-content: center;
        gap: 1rem;
        margin-bottom: 3rem;
        flex-wrap: wrap;
    `;
    
    const categories = ['All', 'stationery', 'housekeeping', 'washroom', 'printing', 'computer', 'packing', 'disposable', 'dustbins'];
    const categoryLabels = {
        'All': 'All Products',
        'stationery': 'Stationery',
        'housekeeping': 'Housekeeping',
        'washroom': 'Washroom',
        'printing': 'Printing',
        'computer': 'Computer',
        'packing': 'Packing',
        'disposable': 'Disposable',
        'dustbins': 'Dustbins'
    };
    
    categories.forEach(category => {
        const btn = document.createElement('button');
        btn.textContent = categoryLabels[category];
        btn.className = 'filter-btn' + (category === 'All' ? ' active' : '');
        btn.style.cssText = `
            padding: 0.75rem 1.5rem;
            background: white;
            border: 2px solid #e0f2fe;
            border-radius: 50px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
        `;
        
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(b => {
                b.classList.remove('active');
                b.style.background = 'white';
                b.style.color = '#64748b';
            });
            btn.classList.add('active');
            btn.style.background = 'linear-gradient(135deg, #0ea5e9 0%, #10b981 100%)';
            btn.style.color = 'white';
            
            filterProducts(category);
        });
        
        filterContainer.appendChild(btn);
    });
    
    const productsGrid = document.querySelector('.products-grid');
    productsGrid.parentNode.insertBefore(filterContainer, productsGrid);
}

function filterProducts(category) {
    const products = document.querySelectorAll('.product-card');
    
    products.forEach(product => {
        if (category === 'All' || product.getAttribute('data-category') === category) {
            product.style.display = 'block';
            setTimeout(() => {
                product.style.opacity = '1';
                product.style.transform = 'translateY(0)';
            }, 10);
        } else {
            product.style.opacity = '0';
            product.style.transform = 'translateY(30px)';
            setTimeout(() => {
                product.style.display = 'none';
            }, 300);
        }
    });
}

// Uncomment to enable product filtering
// initProductFilter();

// ===========================
// Lazy Loading Images (if real images are added)
// ===========================

function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

lazyLoadImages();

// ===========================
// Print Greeting Based on Time
// ===========================

function displayGreeting() {
    const hour = new Date().getHours();
    let greeting = 'Hello';
    
    if (hour < 12) {
        greeting = 'Good Morning';
    } else if (hour < 18) {
        greeting = 'Good Afternoon';
    } else {
        greeting = 'Good Evening';
    }
    
    console.log(`${greeting}! Welcome to Momai Traders`);
}

displayGreeting();

// ===========================
// Keyboard Navigation
// ===========================

document.addEventListener('keydown', (e) => {
    // Press 'Escape' to close mobile menu
    if (e.key === 'Escape') {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
    
    // Press 'Home' to scroll to top
    if (e.key === 'Home') {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
});

// ===========================
// Performance Monitoring
// ===========================

if ('performance' in window) {
    window.addEventListener('load', () => {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        console.log(`Page loaded in ${pageLoadTime}ms`);
    });
}

// ===========================
// Console Welcome Message
// ===========================

console.log('%c Momai Traders ', 'background: linear-gradient(135deg, #0ea5e9 0%, #10b981 100%); color: white; font-size: 20px; padding: 10px 20px; border-radius: 5px;');
console.log('%c Wholesale Supplier Of Housekeeping & Cleaning Materials ', 'color: #0ea5e9; font-size: 14px; font-weight: bold;');
console.log('%c Contact: +91 99749 02733 | momaitraders73@gmail.com ', 'color: #64748b; font-size: 12px;');

// ===========================
// Service Worker Registration (Optional - for PWA)
// ===========================

if ('serviceWorker' in navigator) {
    // Uncomment to enable PWA features
    // navigator.serviceWorker.register('/sw.js')
    //     .then(reg => console.log('Service Worker registered', reg))
    //     .catch(err => console.log('Service Worker registration failed', err));
}

// ===========================
// Analytics Event Tracking
// ===========================

function trackEvent(category, action, label) {
    console.log(`Event: ${category} - ${action} - ${label}`);
    // Google Analytics or other analytics can be integrated here
    // Example: gtag('event', action, { 'event_category': category, 'event_label': label });
}

// Track button clicks
document.querySelectorAll('.btn, .btn-action').forEach(btn => {
    btn.addEventListener('click', function(e) {
        const text = this.textContent.trim();
        trackEvent('Button', 'Click', text);
    });
});

// ===========================
// Copy to Clipboard Function
// ===========================

function copyToClipboard(text) {
    if (navigator.clipboard) {
        navigator.clipboard.writeText(text).then(() => {
            showNotification('Copied to clipboard!');
        });
    } else {
        // Fallback for older browsers
        const textarea = document.createElement('textarea');
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        showNotification('Copied to clipboard!');
    }
}

// Add copy functionality to phone numbers and email
document.querySelectorAll('.contact-link').forEach(link => {
    link.addEventListener('dblclick', function(e) {
        e.preventDefault();
        const text = this.textContent.trim();
        copyToClipboard(text);
    });
});

// ===========================
// Notification System
// ===========================

function showNotification(message, duration = 3000) {
    // Remove existing notification if any
    const existing = document.querySelector('.notification');
    if (existing) existing.remove();
    
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        bottom: 2rem;
        left: 50%;
        transform: translateX(-50%) translateY(100px);
        background: linear-gradient(135deg, #0ea5e9 0%, #10b981 100%);
        color: white;
        padding: 1rem 2rem;
        border-radius: 50px;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        font-weight: 600;
        opacity: 0;
        transition: all 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.opacity = '1';
        notification.style.transform = 'translateX(-50%) translateY(0)';
    }, 10);
    
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateX(-50%) translateY(100px)';
        setTimeout(() => notification.remove(), 300);
    }, duration);
}

// ===========================
// Easter Egg: Konami Code
// ===========================

let konamiCode = [];
const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-10);
    
    if (konamiCode.join(',') === konamiSequence.join(',')) {
        showNotification('🎉 You found the secret! Momai Traders loves tech-savvy clients!', 5000);
        document.body.style.animation = 'rainbow 5s linear';
    }
});

// ===========================
// Browser Detection & Warnings
// ===========================

function detectBrowser() {
    const userAgent = navigator.userAgent;
    let browser = 'Unknown';
    
    if (userAgent.includes('Chrome')) browser = 'Chrome';
    else if (userAgent.includes('Firefox')) browser = 'Firefox';
    else if (userAgent.includes('Safari')) browser = 'Safari';
    else if (userAgent.includes('Edge')) browser = 'Edge';
    else if (userAgent.includes('MSIE') || userAgent.includes('Trident')) browser = 'IE';
    
    console.log(`Browser: ${browser}`);
    
    // Warn if using IE
    if (browser === 'IE') {
        alert('For the best experience, please use a modern browser like Chrome, Firefox, or Edge.');
    }
}

detectBrowser();

// ===========================
// Initialize All Features
// ===========================

document.addEventListener('DOMContentLoaded', () => {
    console.log('Momai Traders website loaded successfully!');
    
    // Add any initialization code here
    
    // Example: Auto-hide notification after showing contact info
    setTimeout(() => {
        showNotification('💡 Tip: Double-click any contact info to copy it!', 4000);
    }, 3000);
});
