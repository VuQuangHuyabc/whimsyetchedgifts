// Product Data - Each folder represents one product
const products = [
    {
        id: 1,
        name: "Classic Engraved Collection",
        price: 12.99,
        oldPrice: 19.99,
        image: "SP1/main_images/main-image-1.jpeg",
        category: "classic",
        badge: "Sale",
        description: "Elegant engraved keychains with classic designs - 12 unique styles available"
    },
    {
        id: 2,
        name: "Modern Geometric Series",
        price: 15.99,
        oldPrice: 24.99,
        image: "SP2/main_images/main-image-1.jpeg",
        category: "modern",
        badge: "Hot",
        description: "Contemporary geometric pattern keychains - 5 modern designs"
    },
    {
        id: 3,
        name: "Vintage Style Collection",
        price: 18.99,
        oldPrice: 28.99,
        image: "SP3/main_images/main-image-1.jpeg",
        category: "classic",
        description: "Retro-inspired vintage keychain designs - 7 nostalgic styles"
    },
    {
        id: 4,
        name: "Minimalist Keychain Set",
        price: 10.99,
        oldPrice: 16.99,
        image: "SP4/main_images/main-image-1.jpeg",
        category: "modern",
        badge: "Popular",
        description: "Simple and elegant minimalist keychains - 16 clean designs"
    },
    {
        id: 5,
        name: "Custom Photo Collection",
        price: 22.99,
        oldPrice: 34.99,
        image: "SP5/main_images/main-image-1.jpeg",
        category: "custom",
        badge: "Bestseller",
        description: "Personalized photo keychains with your images - Custom designs available"
    },
    {
        id: 6,
        name: "Floral Engraved Series",
        price: 14.99,
        oldPrice: 21.99,
        image: "SP6/main_images/main-image-1.jpeg",
        category: "classic",
        description: "Beautiful floral pattern engraved keychains - Nature-inspired designs"
    },
    {
        id: 7,
        name: "Abstract Art Collection",
        price: 16.99,
        oldPrice: 25.99,
        image: "SP7/main_images/main-image-1.jpeg",
        category: "modern",
        badge: "New",
        description: "Unique abstract art design keychains - Artistic expressions"
    },
    {
        id: 8,
        name: "Premium Leather Series",
        price: 19.99,
        oldPrice: 29.99,
        image: "SP8/main_images/main-image-1.jpeg",
        category: "classic",
        badge: "Luxury",
        description: "Premium leather keychains with metal accents - Luxury collection"
    },
    {
        id: 9,
        name: "Crystal Luxury Collection",
        price: 24.99,
        oldPrice: 39.99,
        image: "SP9/main_images/main-image-1.jpeg",
        category: "modern",
        badge: "Premium",
        description: "Elegant crystal keychains with sparkle - High-end designs"
    },
    {
        id: 10,
        name: "Personalized Name Series",
        price: 13.99,
        oldPrice: 19.99,
        image: "SP10/main_images/main-image-1.jpeg",
        category: "custom",
        description: "Custom name engraved keychains - Personalized gifts"
    }
];

// Shopping Cart
let cart = [];
let currentFilter = 'all';
let currentSort = 'name';
let itemsToShow = 6;

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    loadCartFromStorage();
    loadProducts();
    setupEventListeners();
    updateCartCount();
});

// Load cart from localStorage
function loadCartFromStorage() {
    const savedCart = localStorage.getItem('whimsyCart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
    }
}

// Save cart to localStorage
function saveCartToStorage() {
    localStorage.setItem('whimsyCart', JSON.stringify(cart));
}

// Load products with filtering and sorting
function loadProducts(filter = 'all', sort = 'name') {
    currentFilter = filter;
    currentSort = sort;
    
    const productsGrid = document.getElementById('products-grid');
    productsGrid.innerHTML = '';
    
    // Filter products
    let filteredProducts = filter === 'all' 
        ? products 
        : products.filter(product => product.category === filter);
    
    // Sort products
    filteredProducts = sortProducts(filteredProducts, sort);
    
    // Show limited number of products initially
    const productsToShow = filteredProducts.slice(0, itemsToShow);
    
    productsToShow.forEach(product => {
        const productCard = createProductCard(product);
        productsGrid.appendChild(productCard);
    });
    
    // Show/hide load more button
    const loadMoreBtn = document.getElementById('load-more');
    if (filteredProducts.length > itemsToShow) {
        loadMoreBtn.style.display = 'block';
    } else {
        loadMoreBtn.style.display = 'none';
    }
}

// Sort products
function sortProducts(productsArray, sortType) {
    const sorted = [...productsArray];
    
    switch(sortType) {
        case 'name':
            return sorted.sort((a, b) => a.name.localeCompare(b.name));
        case 'price-low':
            return sorted.sort((a, b) => a.price - b.price);
        case 'price-high':
            return sorted.sort((a, b) => b.price - a.price);
        case 'popular':
            return sorted.sort((a, b) => {
                // Give priority to products with badges
                if (a.badge && !b.badge) return -1;
                if (!a.badge && b.badge) return 1;
                return 0;
            });
        default:
            return sorted;
    }
}

// Create product card
function createProductCard(product) {
    const col = document.createElement('div');
    col.className = 'col-md-6 col-lg-4 mb-4 fade-in';
    
    const oldPriceHtml = product.oldPrice 
        ? `<span class="product-old-price">$${product.oldPrice}</span>` 
        : '';
    
    const badgeHtml = product.badge 
        ? `<span class="product-badge">${product.badge}</span>` 
        : '';
    
    col.innerHTML = `
        <div class="card product-card">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
                ${badgeHtml}
                <div class="product-overlay">
                    <a href="product-detail.html?id=${product.id}" class="btn btn-primary">
                        <i class="bi bi-eye me-2"></i>View Details
                    </a>
                </div>
            </div>
            <div class="card-body">
                <h5 class="card-title">${product.name}</h5>
                <p class="card-text text-muted">${product.description}</p>
                <div class="d-flex justify-content-between align-items-center mb-3">
                    <div>
                        <span class="product-price">$${product.price}</span>
                        ${oldPriceHtml}
                    </div>
                    ${product.badge ? `<span class="badge bg-warning text-dark">${product.badge}</span>` : ''}
                </div>
                <button class="btn btn-primary w-100" onclick="addToCart(${product.id})">
                    <i class="bi bi-cart-plus me-2"></i>Add to Cart
                </button>
            </div>
        </div>
    `;
    
    return col;
}

// Setup event listeners
function setupEventListeners() {
    // Filter buttons
    document.querySelectorAll('[data-filter]').forEach(button => {
        button.addEventListener('click', function() {
            document.querySelectorAll('[data-filter]').forEach(btn => 
                btn.classList.remove('active'));
            this.classList.add('active');
            loadProducts(this.dataset.filter, currentSort);
        });
    });
    
    // Sort dropdown
    document.querySelectorAll('[data-sort]').forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            loadProducts(currentFilter, this.dataset.sort);
        });
    });
    
    // Load more button
    document.getElementById('load-more').addEventListener('click', function() {
        itemsToShow += 6;
        loadProducts(currentFilter, currentSort);
    });
    
    // Cart navigation
    document.querySelectorAll('a[href="#cart"]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            showCart();
        });
    });
}

// Add to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    
    saveCartToStorage();
    updateCartCount();
    showToast(`${product.name} added to cart!`, 'success');
}

// Update cart count
function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    cartCount.style.display = totalItems > 0 ? 'inline-block' : 'none';
}

// Show cart
function showCart() {
    const cartSection = document.getElementById('cart-section');
    const mainSections = document.querySelectorAll('section:not(#cart-section)');
    
    if (cartSection && mainSections.length > 0) {
        mainSections.forEach(section => section.style.display = 'none');
        cartSection.style.display = 'block';
        
        loadCartItems();
        window.scrollTo(0, 0);
    } else {
        showToast('Cart section not found on this page!', 'info');
    }
}

// Load cart items
function loadCartItems() {
    const cartItemsContainer = document.getElementById('cart-items');
    
    if (!cartItemsContainer) return;
    
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `
            <div class="text-center py-5">
                <i class="bi bi-cart-x display-1 text-muted"></i>
                <h3 class="mt-3">Your cart is empty</h3>
                <p class="text-muted">Add some products to get started!</p>
                <button class="btn btn-primary" onclick="continueShopping()">Continue Shopping</button>
            </div>
        `;
        updateCartSummary();
        return;
    }
    
    cartItemsContainer.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div class="row align-items-center">
                <div class="col-md-2">
                    <img src="${item.image}" alt="${item.name}" class="img-fluid rounded">
                </div>
                <div class="col-md-4">
                    <h5>${item.name}</h5>
                    <p class="text-muted small">${item.description}</p>
                </div>
                <div class="col-md-2">
                    <div class="quantity-control">
                        <button class="btn btn-sm btn-outline-secondary" onclick="updateQuantity(${item.id}, -1)">-</button>
                        <span class="mx-2">${item.quantity}</span>
                        <button class="btn btn-sm btn-outline-secondary" onclick="updateQuantity(${item.id}, 1)">+</button>
                    </div>
                </div>
                <div class="col-md-2">
                    <h5>$${(item.price * item.quantity).toFixed(2)}</h5>
                    ${item.oldPrice ? `<small class="text-muted"><s>$${(item.oldPrice * item.quantity).toFixed(2)}</s></small>` : ''}
                </div>
                <div class="col-md-2">
                    <button class="btn btn-danger btn-sm" onclick="removeFromCart(${item.id})">
                        <i class="bi bi-trash"></i>
                    </button>
                </div>
            </div>
        </div>
    `).join('');
    
    updateCartSummary();
}

// Update cart summary
function updateCartSummary() {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = cart.length > 0 ? 5 : 0;
    const tax = subtotal * 0.08; // 8% tax
    const total = subtotal + shipping + tax;
    
    const subtotalElement = document.getElementById('cart-subtotal');
    const taxElement = document.getElementById('cart-tax');
    const totalElement = document.getElementById('cart-total');
    
    if (subtotalElement) subtotalElement.textContent = `$${subtotal.toFixed(2)}`;
    if (taxElement) taxElement.textContent = `$${tax.toFixed(2)}`;
    if (totalElement) totalElement.textContent = `$${total.toFixed(2)}`;
}

// Update quantity
function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            saveCartToStorage();
            loadCartItems();
            updateCartCount();
        }
    }
}

// Remove from cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCartToStorage();
    loadCartItems();
    updateCartCount();
    showToast('Item removed from cart', 'success');
}

// Continue shopping
function continueShopping() {
    // Reload the page to show products again
    location.reload();
}

// Show toast notification
function showToast(message, type = 'success') {
    const toastHtml = `
        <div class="custom-toast toast-${type}">
            <i class="bi bi-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
            <span>${message}</span>
        </div>
    `;
    
    const toastContainer = document.createElement('div');
    toastContainer.className = 'toast-container';
    toastContainer.innerHTML = toastHtml;
    document.body.appendChild(toastContainer);
    
    setTimeout(() => {
        toastContainer.remove();
    }, 3000);
}
