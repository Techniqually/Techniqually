// Techniqually - Main JavaScript
// Vanilla JS for navigation, scroll animations, and the mobile menu

document.addEventListener('DOMContentLoaded', function() {
    initNavigation();
    initScrollAnimations();
    initMobileMenu();
    initNavbarScroll();
    initHeroParallax();

    window.addEventListener('load', function() {
        setTimeout(() => {
            document.body.classList.add('loaded');
        }, 100);
    });
});

// Smooth-scroll anchor navigation
function initNavigation() {
    const navLinks = document.querySelectorAll('a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar

                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });

                closeMobileMenu();
            }
        });
    });
}

// Scroll animations using Intersection Observer
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-slide-up');
            }
        });
    }, observerOptions);

    const animateElements = document.querySelectorAll('.grid > div, .space-y-4 > li');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });
}

// Mobile menu functionality
function initMobileMenu() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }
}

function closeMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu) {
        mobileMenu.classList.add('hidden');
    }
}

// Add a background/border once the page is scrolled past the hero
function initNavbarScroll() {
    const navbar = document.getElementById('navbar');

    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > 100) {
            navbar.classList.add('bg-bg/95', 'backdrop-blur-sm', 'border-border');
        } else {
            navbar.classList.remove('bg-bg/95', 'backdrop-blur-sm', 'border-border');
        }
    });
}

// Subtle parallax on the hero content
function initHeroParallax() {
    const hero = document.getElementById('home');
    const heroContent = hero && hero.querySelector('.relative.z-10');
    if (!heroContent) return;

    let ticking = false;
    window.addEventListener('scroll', function() {
        if (ticking) return;
        ticking = true;
        requestAnimationFrame(() => {
            const rate = window.pageYOffset * -0.5;
            heroContent.style.transform = `translateY(${rate * 0.1}px)`;
            ticking = false;
        });
    });
}

// Utility
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Close mobile menu on resize back to desktop widths
window.addEventListener('resize', debounce(function() {
    if (window.innerWidth >= 768) {
        closeMobileMenu();
    }
}, 250));
