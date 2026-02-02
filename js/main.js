// ================================================
// AKUA METHOD - Main JavaScript
// Navigation, mobile menu, cart sidebar, animations
// ================================================

document.addEventListener('DOMContentLoaded', () => {
    initializeNavigation();
    initializeCart();
    initializeScrollEffects();
    initializeAnimations();
});

// ===== Navigation =====
function initializeNavigation() {
    const nav = document.getElementById('main-nav');
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let lastScroll = 0;
    
    // Mobile menu toggle
    navToggle?.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });
    
    // Close mobile menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    });
    
    // Scroll effects: hide/show nav, add shadow
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        // Add shadow when scrolled
        if (currentScroll > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
        
        // Hide nav on scroll down, show on scroll up
        if (currentScroll > lastScroll && currentScroll > 100) {
            nav.classList.add('hidden');
        } else {
            nav.classList.remove('hidden');
        }
        
        lastScroll = currentScroll;
    });
    
    // Set active link based on current page
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        }
    });
}

// ===== Cart Sidebar =====
function initializeCart() {
    const cartButton = document.getElementById('cart-button');
    const cartSidebar = document.getElementById('cart-sidebar');
    const cartClose = document.getElementById('cart-close');
    
    // Open cart sidebar
    cartButton?.addEventListener('click', () => {
        cartSidebar.classList.add('active');
        cartSidebar.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    });
    
    // Close cart sidebar
    cartClose?.addEventListener('click', closeCart);
    
    // Close cart when clicking outside
    cartSidebar?.addEventListener('click', (e) => {
        if (e.target === cartSidebar) {
            closeCart();
        }
    });
    
    // Close with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && cartSidebar.classList.contains('active')) {
            closeCart();
        }
    });
    
    function closeCart() {
        cartSidebar.classList.remove('active');
        cartSidebar.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }
    
    // Load cart from localStorage
    updateCartUI();
}

// Update cart UI with current items
function updateCartUI() {
    const cart = getCart();
    const cartCount = document.getElementById('cart-count');
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    
    // Update count badge
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    if (cartCount) {
        cartCount.textContent = totalItems;
        cartCount.style.display = totalItems > 0 ? 'flex' : 'none';
    }
    
    // Update cart items list
    if (cartItems) {
        if (cart.length === 0) {
            cartItems.innerHTML = '<p class="cart-empty">Your cart is empty</p>';
        } else {
            cartItems.innerHTML = cart.map(item => `
                <div class="cart-item" data-id="${item.id}">
                    <div class="cart-item-image">
                        <img src="${item.image}" alt="${item.name}">
                    </div>
                    <div class="cart-item-details">
                        <h4 class="cart-item-name">${item.name}</h4>
                        <p class="cart-item-custom">
                            ${item.customization.bottle} bottle, ${item.customization.cap} cap
                        </p>
                        <p class="cart-item-price">$${item.price.toFixed(2)}</p>
                    </div>
                    <div class="cart-item-actions">
                        <button class="cart-item-decrease" data-id="${item.id}" aria-label="Decrease quantity">−</button>
                        <span class="cart-item-quantity">${item.quantity}</span>
                        <button class="cart-item-increase" data-id="${item.id}" aria-label="Increase quantity">+</button>
                        <button class="cart-item-remove" data-id="${item.id}" aria-label="Remove item">×</button>
                    </div>
                </div>
            `).join('');
            
            // Add event listeners to cart item buttons
            attachCartItemListeners();
        }
    }
    
    // Update total
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    if (cartTotal) {
        cartTotal.textContent = `$${subtotal.toFixed(2)}`;
    }
}

// Attach event listeners to cart item actions
function attachCartItemListeners() {
    document.querySelectorAll('.cart-item-increase').forEach(btn => {
        btn.addEventListener('click', (e) => {
            updateCartItemQuantity(e.target.dataset.id, 1);
        });
    });
    
    document.querySelectorAll('.cart-item-decrease').forEach(btn => {
        btn.addEventListener('click', (e) => {
            updateCartItemQuantity(e.target.dataset.id, -1);
        });
    });
    
    document.querySelectorAll('.cart-item-remove').forEach(btn => {
        btn.addEventListener('click', (e) => {
            removeFromCart(e.target.dataset.id);
        });
    });
}

// Get cart from localStorage
function getCart() {
    const cart = localStorage.getItem('akuaCart');
    return cart ? JSON.parse(cart) : [];
}

// Save cart to localStorage
function saveCart(cart) {
    localStorage.setItem('akuaCart', JSON.stringify(cart));
    updateCartUI();
}

// Add item to cart
function addToCart(item) {
    const cart = getCart();
    const existingItem = cart.find(i => 
        i.id === item.id && 
        i.customization.bottle === item.customization.bottle &&
        i.customization.cap === item.customization.cap
    );
    
    if (existingItem) {
        existingItem.quantity += item.quantity;
    } else {
        cart.push(item);
    }
    
    saveCart(cart);
    
    // Show success notification
    showNotification('Added to cart!', 'success');
}

// Update cart item quantity
function updateCartItemQuantity(itemId, change) {
    const cart = getCart();
    const item = cart.find(i => i.id === itemId);
    
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(itemId);
        } else {
            saveCart(cart);
        }
    }
}

// Remove item from cart
function removeFromCart(itemId) {
    const cart = getCart().filter(i => i.id !== itemId);
    saveCart(cart);
    showNotification('Item removed', 'info');
}

// Clear entire cart
function clearCart() {
    localStorage.removeItem('akuaCart');
    updateCartUI();
}

// Show notification toast
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        padding: 1rem 1.5rem;
        background: ${type === 'success' ? '#B8941E' : '#3E2723'};
        color: white;
        border-radius: 4px;
        box-shadow: 0 4px 16px rgba(0,0,0,0.2);
        z-index: 9999;
        animation: slideInRight 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// ===== Scroll Effects =====
function initializeScrollEffects() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            }
        });
    }, observerOptions);
    
    // Observe elements with fade-in class
    document.querySelectorAll('.fade-in, .collection-card, .value-item').forEach(el => {
        observer.observe(el);
    });
}

// ===== Animations =====
function initializeAnimations() {
    // Add CSS for notifications if not present
    if (!document.getElementById('notification-styles')) {
        const style = document.createElement('style');
        style.id = 'notification-styles';
        style.textContent = `
            @keyframes slideInRight {
                from {
                    transform: translateX(100%);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
            
            @keyframes slideOutRight {
                from {
                    transform: translateX(0);
                    opacity: 1;
                }
                to {
                    transform: translateX(100%);
                    opacity: 0;
                }
            }
            
            .in-view {
                animation: fadeInUp 0.6s ease-out;
            }
            
            @keyframes fadeInUp {
                from {
                    opacity: 0;
                    transform: translateY(30px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
        `;
        document.head.appendChild(style);
    }
}

// ===== Utility Functions =====

// Format price
function formatPrice(price) {
    return `$${price.toFixed(2)}`;
}

// Generate unique ID
function generateId() {
    return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

// Debounce function for performance
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

// Export functions for use in other scripts
window.AkuaMethod = {
    getCart,
    addToCart,
    updateCartItemQuantity,
    removeFromCart,
    clearCart,
    showNotification,
    formatPrice,
    generateId
};
