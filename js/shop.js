// ================================================
// AKUA METHOD - Shop Page JavaScript
// Product catalog, filtering, customization
// ================================================

// Product Database - All 15 Scents
const PRODUCTS = [
    // FEMININE (12 scents)
    {
        id: 'unwrapped',
        name: 'Unwrapped',
        category: 'feminine',
        price: 15.00,
        description: 'A delicate unveiling of soft florals and warm vanilla, like unwrapping a cherished gift.',
        notes: {
            top: ['Bergamot', 'Pink Pepper'],
            heart: ['Jasmine', 'Rose', 'Iris'],
            base: ['Vanilla', 'Sandalwood', 'Musk']
        },
        image: 'assets/images/products/unwrapped.jpg'
    },
    {
        id: 'velvetine',
        name: 'Velvetine',
        category: 'feminine',
        price: 15.00,
        description: 'Luxuriously smooth and sensual, a velvety embrace of rich amber and soft petals.',
        notes: {
            top: ['Mandarin', 'Saffron'],
            heart: ['Turkish Rose', 'Violet'],
            base: ['Amber', 'Patchouli', 'Velvet Musk']
        },
        image: 'assets/images/products/velvetine.jpg'
    },
    {
        id: 'sensual-surrender',
        name: 'Sensual Surrender',
        category: 'feminine',
        price: 15.00,
        description: 'Intoxicating warmth meets floral seduction. Let go and surrender to pure sensuality.',
        notes: {
            top: ['Black Currant', 'Pear'],
            heart: ['Tuberose', 'Ylang-Ylang'],
            base: ['Tonka Bean', 'Vanilla', 'Benzoin']
        },
        image: 'assets/images/products/sensual-surrender.jpg'
    },
    {
        id: 'eternal-city',
        name: 'Eternal City',
        category: 'feminine',
        price: 15.00,
        description: 'Timeless elegance inspired by ancient streets and modern romance.',
        notes: {
            top: ['Italian Bergamot', 'Neroli'],
            heart: ['White Lily', 'Peony'],
            base: ['Cedarwood', 'Amber', 'White Musk']
        },
        image: 'assets/images/products/eternal-city.jpg'
    },
    {
        id: 'desert-dreams',
        name: 'Desert Dreams',
        category: 'feminine',
        price: 15.00,
        description: 'Sun-warmed sands and exotic blooms under endless skies.',
        notes: {
            top: ['Date', 'Apricot'],
            heart: ['Orange Blossom', 'Desert Rose'],
            base: ['Oud', 'Honey', 'Incense']
        },
        image: 'assets/images/products/desert-dreams.jpg'
    },
    {
        id: 'midnight-purr',
        name: 'Midnight Purr',
        category: 'feminine',
        price: 15.00,
        description: 'Mysterious and alluring, a seductive whisper in the darkness.',
        notes: {
            top: ['Black Cherry', 'Plum'],
            heart: ['Night Jasmine', 'Black Orchid'],
            base: ['Dark Chocolate', 'Vanilla', 'Patchouli']
        },
        image: 'assets/images/products/midnight-purr.jpg'
    },
    {
        id: 'follow-me',
        name: 'Follow Me',
        category: 'feminine',
        price: 15.00,
        description: 'An irresistible trail that captivates and beckons.',
        notes: {
            top: ['Raspberry', 'Lychee'],
            heart: ['Peony', 'Freesia'],
            base: ['Cashmere Wood', 'Musk', 'Amber']
        },
        image: 'assets/images/products/follow-me.jpg'
    },
    {
        id: 'midnight-mango',
        name: 'Midnight Mango',
        category: 'feminine',
        price: 15.00,
        description: 'Tropical sweetness meets dark sophistication in this after-hours indulgence.',
        notes: {
            top: ['Mango', 'Passionfruit'],
            heart: ['Coconut', 'Frangipani'],
            base: ['Vanilla', 'Tonka', 'Dark Musk']
        },
        image: 'assets/images/products/midnight-mango.jpg'
    },
    {
        id: 'golden-nectar',
        name: 'Golden Nectar',
        category: 'feminine',
        price: 15.00,
        description: 'Sweet as honey, rich as gold. A luminous celebration of abundance.',
        notes: {
            top: ['Honey', 'Mandarin'],
            heart: ['Honeysuckle', 'Apricot'],
            base: ['Amber', 'Vanilla', 'Benzoin']
        },
        image: 'assets/images/products/golden-nectar.jpg'
    },
    {
        id: 'golden-hour',
        name: 'Golden Hour',
        category: 'feminine',
        price: 15.00,
        description: 'That perfect moment when light turns to gold. Warm, radiant, unforgettable.',
        notes: {
            top: ['Bergamot', 'Peach'],
            heart: ['Magnolia', 'Tuberose'],
            base: ['Sandalwood', 'Amber', 'Musk']
        },
        image: 'assets/images/products/golden-hour.jpg'
    },
    {
        id: 'sensual-shore',
        name: 'Sensual Shore',
        category: 'feminine',
        price: 15.00,
        description: 'Where ocean breezes meet sun-kissed skin. A beachside escape.',
        notes: {
            top: ['Sea Salt', 'Bergamot'],
            heart: ['Tiare Flower', 'Coconut'],
            base: ['Driftwood', 'Amber', 'Vanilla']
        },
        image: 'assets/images/products/sensual-shore.jpg'
    },
    {
        id: 'candy-coast',
        name: 'Candy Coast',
        category: 'feminine',
        price: 15.00,
        description: 'Playful sweetness with a sophisticated twist. Beachside confection.',
        notes: {
            top: ['Cotton Candy', 'Citrus Zest'],
            heart: ['Coconut Cream', 'Vanilla Orchid'],
            base: ['Caramel', 'Sugar Musk', 'Driftwood']
        },
        image: 'assets/images/products/candy-coast.jpg'
    },
    
    // MASCULINE (2 scents)
    {
        id: 'rude-boy-blend',
        name: 'Rude Boy Blend',
        category: 'masculine',
        price: 15.00,
        description: 'Bold, confident, unapologetic. A commanding presence.',
        notes: {
            top: ['Black Pepper', 'Ginger'],
            heart: ['Leather', 'Tobacco'],
            base: ['Cedarwood', 'Vetiver', 'Patchouli']
        },
        image: 'assets/images/products/rude-boy-blend.jpg'
    },
    {
        id: 'baddest-man',
        name: 'The Baddest Man',
        category: 'masculine',
        price: 15.00,
        description: 'Powerful, magnetic, unforgettable. Own the room.',
        notes: {
            top: ['Bergamot', 'Cardamom'],
            heart: ['Oud', 'Smoky Incense'],
            base: ['Dark Leather', 'Amber', 'Musk']
        },
        image: 'assets/images/products/baddest-man.jpg'
    },
    
    // UNISEX (1 scent)
    {
        id: 'forbidden-streets',
        name: 'Forbidden Streets',
        category: 'unisex',
        price: 15.00,
        description: 'Mysterious alleyways where secrets linger. Balanced, enigmatic, universally captivating.',
        notes: {
            top: ['Pink Pepper', 'Cardamom'],
            heart: ['Iris', 'Patchouli'],
            base: ['Vetiver', 'Amber', 'Tonka Bean']
        },
        image: 'assets/images/products/forbidden-streets.jpg'
    }
];

// Global state
let currentCustomization = {
    bottle: 'clear',
    cap: 'gold'
};

let activeFilters = ['all'];

// Initialize shop page
document.addEventListener('DOMContentLoaded', () => {
    initializeFilters();
    initializeCustomization();
    initializeMobileFilter();
    renderProducts();
    
    // Check for URL filter parameter
    const urlParams = new URLSearchParams(window.location.search);
    const filterParam = urlParams.get('filter');
    if (filterParam && ['feminine', 'masculine', 'unisex'].includes(filterParam)) {
        document.getElementById('filter-all').checked = false;
        document.getElementById(`filter-${filterParam}`).checked = true;
        activeFilters = [filterParam];
        renderProducts();
    }
});

// Initialize category filters
function initializeFilters() {
    const filterInputs = document.querySelectorAll('input[name="category"]');
    
    filterInputs.forEach(input => {
        input.addEventListener('change', (e) => {
            if (e.target.value === 'all') {
                // If "All" is checked, uncheck others
                if (e.target.checked) {
                    filterInputs.forEach(inp => {
                        if (inp.value !== 'all') inp.checked = false;
                    });
                    activeFilters = ['all'];
                }
            } else {
                // If a category is checked, uncheck "All"
                if (e.target.checked) {
                    document.getElementById('filter-all').checked = false;
                    activeFilters = Array.from(filterInputs)
                        .filter(inp => inp.checked && inp.value !== 'all')
                        .map(inp => inp.value);
                    
                    if (activeFilters.length === 0) {
                        document.getElementById('filter-all').checked = true;
                        activeFilters = ['all'];
                    }
                } else {
                    activeFilters = Array.from(filterInputs)
                        .filter(inp => inp.checked && inp.value !== 'all')
                        .map(inp => inp.value);
                    
                    if (activeFilters.length === 0) {
                        document.getElementById('filter-all').checked = true;
                        activeFilters = ['all'];
                    }
                }
            }
            
            renderProducts();
        });
    });
}

// Initialize customization swatches
function initializeCustomization() {
    const swatches = document.querySelectorAll('.customize-swatch');
    
    swatches.forEach(swatch => {
        swatch.addEventListener('click', () => {
            const type = swatch.dataset.type; // 'bottle' or 'cap'
            const value = swatch.dataset.value;
            
            // Update active state
            document.querySelectorAll(`.customize-swatch[data-type="${type}"]`).forEach(s => {
                s.classList.remove('active');
            });
            swatch.classList.add('active');
            
            // Update global customization
            currentCustomization[type] = value;
            
            // Re-render products to show updated customization
            renderProducts();
        });
    });
    
    // Set initial active states
    document.querySelector('.customize-swatch[data-type="bottle"][data-value="clear"]')?.classList.add('active');
    document.querySelector('.customize-swatch[data-type="cap"][data-value="gold"]')?.classList.add('active');
}

// Mobile filter toggle
function initializeMobileFilter() {
    const mobileFilterBtn = document.getElementById('mobile-filter');
    const sidebar = document.querySelector('.shop-sidebar');
    
    mobileFilterBtn?.addEventListener('click', () => {
        sidebar.classList.toggle('active');
        mobileFilterBtn.textContent = sidebar.classList.contains('active') ? 'Close Filters' : 'Filters';
    });
}

// Render product grid
function renderProducts() {
    const grid = document.getElementById('product-grid');
    const resultsCount = document.getElementById('results-count');
    
    // Filter products
    let filteredProducts = PRODUCTS;
    if (!activeFilters.includes('all')) {
        filteredProducts = PRODUCTS.filter(product => 
            activeFilters.includes(product.category)
        );
    }
    
    // Update results count
    resultsCount.textContent = `Showing ${filteredProducts.length} product${filteredProducts.length !== 1 ? 's' : ''}`;
    
    // Render product cards
    grid.innerHTML = filteredProducts.map(product => `
        <article class="product-card" data-product-id="${product.id}">
            <a href="product-detail.html?id=${product.id}" class="product-link">
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name} perfume oil" loading="lazy">
                    <span class="product-category">${capitalizeFirst(product.category)}</span>
                </div>
                <div class="product-info">
                    <h3 class="product-name">${product.name}</h3>
                    <p class="product-description">${truncateText(product.description, 60)}</p>
                    <div class="product-price">$${product.price.toFixed(2)}</div>
                </div>
            </a>
            <div class="product-actions">
                <div class="product-customize">
                    <span class="customize-preview">
                        ${currentCustomization.bottle} bottle, ${currentCustomization.cap} cap
                    </span>
                </div>
                <button class="btn-add-cart" data-product-id="${product.id}">
                    Add to Cart
                </button>
            </div>
        </article>
    `).join('');
    
    // Attach event listeners to add-to-cart buttons
    document.querySelectorAll('.btn-add-cart').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const productId = e.target.dataset.productId;
            addProductToCart(productId);
        });
    });
}

// Add product to cart
function addProductToCart(productId) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;
    
    const cartItem = {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        category: product.category,
        quantity: 1,
        customization: { ...currentCustomization }
    };
    
    window.AkuaMethod.addToCart(cartItem);
}

// Utility: Capitalize first letter
function capitalizeFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Utility: Truncate text
function truncateText(text, maxLength) {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength).trim() + '...';
}
