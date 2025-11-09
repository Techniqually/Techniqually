// Techniqually - Main JavaScript
// Modern vanilla JavaScript for smooth interactions and animations

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initNavigation();
    initSmoothScrolling();
    initScrollAnimations();
    initMobileMenu();
    initNavbarScroll();
});

// Navigation functionality
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

                // Close mobile menu if open
                closeMobileMenu();
            }
        });
    });
}

// Smooth scrolling for anchor links
function initSmoothScrolling() {
    // Additional smooth scrolling setup if needed
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

    // Observe elements that should animate on scroll
    const animateElements = document.querySelectorAll('.grid > div, .space-y-3 > li, .aspect-video');
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

// Navbar scroll effect
function initNavbarScroll() {
    const navbar = document.getElementById('navbar');
    let lastScrollTop = 0;

    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        // Add background when scrolled past hero section
        if (scrollTop > 100) {
            navbar.classList.add('bg-white/95', 'backdrop-blur-sm', 'shadow-sm', 'border-b', 'border-gray-100');
            // Change text to dark when background is white
            document.querySelectorAll('.navbar-link').forEach(link => {
                link.classList.remove('text-white', 'hover:text-primary-300');
                link.classList.add('text-gray-700', 'hover:text-primary-600');
            });
            // Change logo color
            const logo = navbar.querySelector('a[href="#home"]');
            if (logo) {
                logo.classList.remove('text-white');
                logo.classList.add('text-primary-600', 'hover:text-primary-700');
            }
            // Change mobile menu button color
            const mobileBtn = document.getElementById('mobile-menu-button');
            if (mobileBtn) {
                mobileBtn.classList.remove('text-white', 'hover:text-primary-300');
                mobileBtn.classList.add('text-gray-700', 'hover:text-primary-600');
            }
        } else {
            navbar.classList.remove('bg-white/95', 'backdrop-blur-sm', 'shadow-sm', 'border-b', 'border-gray-100');
            // Change text back to white when background is transparent
            document.querySelectorAll('.navbar-link').forEach(link => {
                link.classList.remove('text-gray-700', 'hover:text-primary-600');
                link.classList.add('text-white', 'hover:text-primary-300');
            });
            // Change logo color back
            const logo = navbar.querySelector('a[href="#home"]');
            if (logo) {
                logo.classList.remove('text-primary-600', 'hover:text-primary-700');
                logo.classList.add('text-white');
            }
            // Change mobile menu button color back
            const mobileBtn = document.getElementById('mobile-menu-button');
            if (mobileBtn) {
                mobileBtn.classList.remove('text-gray-700', 'hover:text-primary-600');
                mobileBtn.classList.add('text-white', 'hover:text-primary-300');
            }
        }

        lastScrollTop = scrollTop;
    });
}

// Utility functions
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

// Add loading animation for portfolio items
function initPortfolioHover() {
    const portfolioItems = document.querySelectorAll('.group.relative');

    portfolioItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            const overlay = this.querySelector('.absolute.inset-0');
            if (overlay) {
                overlay.style.transition = 'all 0.3s ease';
            }
        });
    });
}

// Performance optimization - lazy load images if needed
function initLazyLoading() {
    // Could implement lazy loading for images here if needed
    // For now, all images are loaded immediately for better UX
}

// Initialize additional features when window loads
window.addEventListener('load', function() {
    initPortfolioHover();
    initLazyLoading();

    // Add a small delay to ensure everything is loaded
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 100);
});

// Handle resize events for responsive adjustments
window.addEventListener('resize', debounce(function() {
    // Close mobile menu on resize if screen becomes larger
    if (window.innerWidth >= 768) {
        closeMobileMenu();
    }
}, 250));

// Add CSS for the slide-up animation
const style = document.createElement('style');
style.textContent = `
    .animate-slide-up {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }

    body.loaded .animate-fade-in {
        animation: fadeIn 0.8s ease-out forwards;
    }
`;
document.head.appendChild(style);

// Add some modern touches
document.addEventListener('DOMContentLoaded', function() {
    // Add subtle parallax effect to hero section
    const hero = document.getElementById('home');

    if (hero) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;

            if (hero.querySelector('.relative.z-10')) {
                hero.querySelector('.relative.z-10').style.transform = `translateY(${rate * 0.1}px)`;
            }
        });
    }
});

