// Product Data
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
let discount = 0;
let promoApplied = false;

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    loadCartFromStorage();
    loadCartItems();
    updateCartCount();
    loadRecommendedProducts();
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

// Load cart items
function loadCartItems() {
    const cartItemsContainer = document.getElementById('cart-items');
    
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `
            <div class="text-center py-5">
                <div class="mb-4">
                    <i class="bi bi-cart-x display-1 text-muted"></i>
                </div>
                <h3 class="mb-3">Your cart is empty</h3>
                <p class="text-muted mb-4">Looks like you haven't added any keychains to your cart yet.</p>
                <div class="mb-4">
                    <p class="text-muted">Start shopping to add some beautiful handcrafted keychains to your collection!</p>
                </div>
                <div class="d-flex gap-3 justify-content-center">
                    <a href="products.html" class="btn btn-primary btn-lg">
                        <i class="bi bi-bag-heart me-2"></i>Start Shopping
                    </a>
                    <a href="index.html" class="btn btn-outline-primary btn-lg">
                        <i class="bi bi-house me-2"></i>Go Home
                    </a>
                </div>
                <div class="mt-4">
                    <h5 class="text-muted">Why shop with us?</h5>
                    <div class="row mt-3">
                        <div class="col-md-4">
                            <div class="text-center mb-3">
                                <i class="bi bi-truck text-primary" style="font-size: 2rem;"></i>
                                <p class="small mb-0">Free Shipping</p>
                                <p class="small text-muted">On orders over $50</p>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="text-center mb-3">
                                <i class="bi bi-shield-check text-primary" style="font-size: 2rem;"></i>
                                <p class="small mb-0">Secure Payment</p>
                                <p class="small text-muted">100% protected</p>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="text-center mb-3">
                                <i class="bi bi-arrow-return-left text-primary" style="font-size: 2rem;"></i>
                                <p class="small mb-0">Easy Returns</p>
                                <p class="small text-muted">30-day policy</p>
                            </div>
                        </div>
                    </div>
                </div>
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
                    ${item.badge ? `<span class="badge bg-warning text-dark">${item.badge}</span>` : ''}
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
    const shipping = cart.length > 0 ? (subtotal >= 50 ? 0 : 5) : 0;
    const tax = subtotal * 0.08; // 8% tax
    const total = subtotal + shipping + tax - discount;
    
    document.getElementById('cart-subtotal').textContent = `$${subtotal.toFixed(2)}`;
    document.getElementById('cart-shipping').textContent = shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`;
    document.getElementById('cart-tax').textContent = `$${tax.toFixed(2)}`;
    document.getElementById('cart-discount').textContent = `-$${discount.toFixed(2)}`;
    document.getElementById('cart-total').textContent = `$${total.toFixed(2)}`;
    
    // Update shipping message
    if (cart.length > 0 && subtotal < 50) {
        const shippingElement = document.getElementById('cart-shipping');
        shippingElement.innerHTML = `$${shipping.toFixed(2)} <small class="text-muted">(Add $${(50 - subtotal).toFixed(2)} more for free shipping)</small>`;
    }
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

// Update cart count
function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    cartCount.style.display = totalItems > 0 ? 'inline-block' : 'none';
}

// Apply promo code
function applyPromoCode() {
    const promoCode = document.getElementById('promo-code').value.trim().toUpperCase();
    
    if (!promoCode) {
        showToast('Please enter a promo code', 'error');
        return;
    }
    
    if (promoApplied) {
        showToast('Promo code already applied', 'error');
        return;
    }
    
    // Sample promo codes
    const promoCodes = {
        'SAVE10': 0.10,
        'SAVE20': 0.20,
        'WELCOME': 0.15,
        'SPECIAL': 0.25
    };
    
    if (promoCodes[promoCode]) {
        const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        discount = subtotal * promoCodes[promoCode];
        promoApplied = true;
        updateCartSummary();
        showToast(`Promo code applied! You saved $${discount.toFixed(2)}`, 'success');
        document.getElementById('promo-code').disabled = true;
    } else {
        showToast('Invalid promo code', 'error');
    }
}

// Proceed to checkout
function proceedToCheckout() {
    if (cart.length === 0) {
        showToast('Your cart is empty', 'error');
        return;
    }
    
    // Here you would typically redirect to a checkout page
    showToast('Redirecting to checkout...', 'success');
    // window.location.href = 'checkout.html';
}

// Continue shopping
function continueShopping() {
    window.location.href = 'products.html';
}

// Load recommended products
function loadRecommendedProducts() {
    const recommendedContainer = document.getElementById('recommended-products');
    const recommendedProducts = products.slice(0, 4); // Show first 4 products as recommendations
    
    recommendedContainer.innerHTML = recommendedProducts.map(product => `
        <div class="col-md-6 col-lg-3 mb-4">
            <div class="card product-card h-100">
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}">
                    ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
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
                            ${product.oldPrice ? `<span class="product-old-price">$${product.oldPrice}</span>` : ''}
                        </div>
                    </div>
                    <button class="btn btn-primary w-100" onclick="addToCart(${product.id})">
                        <i class="bi bi-cart-plus me-2"></i>Add to Cart
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// Add to cart from recommended products
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    
    saveCartToStorage();
    loadCartItems();
    updateCartCount();
    showToast(`${product.name} added to cart!`, 'success');
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
