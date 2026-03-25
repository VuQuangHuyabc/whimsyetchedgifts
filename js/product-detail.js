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
        description: "Elegant engraved keychains with classic designs - 12 unique styles available",
        material: "Premium Metal Alloy",
        dimensions: "2\" x 1\" x 0.25\"",
        weight: "0.5 oz",
        finish: "Polished",
        features: [
            "Handcrafted with premium materials",
            "12 unique classic designs available",
            "Durable and long-lasting construction",
            "Perfect for gifts and personal use",
            "Elegant polished finish"
        ]
    },
    {
        id: 2,
        name: "Modern Geometric Series",
        price: 15.99,
        image: "SP2/main_images/main-image-1.jpeg",
        category: "modern",
        badge: "New",
        description: "Contemporary geometric pattern keychains - 5 modern designs",
        material: "Stainless Steel",
        dimensions: "2.5\" x 1.2\" x 0.3\"",
        weight: "0.6 oz",
        finish: "Brushed",
        features: [
            "Modern geometric patterns",
            "5 contemporary designs",
            "Brushed stainless steel finish",
            "Lightweight and durable",
            "Trendy and stylish"
        ]
    },
    {
        id: 3,
        name: "Vintage Style Collection",
        price: 18.99,
        image: "SP3/main_images/main-image-1.jpeg",
        category: "classic",
        description: "Retro-inspired vintage keychain designs - 7 nostalgic styles",
        material: "Brass Alloy",
        dimensions: "2.2\" x 1.1\" x 0.28\"",
        weight: "0.7 oz",
        finish: "Antique",
        features: [
            "Vintage-inspired designs",
            "7 nostalgic styles",
            "Antique brass finish",
            "Classic appeal",
            "Perfect for collectors"
        ]
    },
    {
        id: 4,
        name: "Minimalist Keychain Set",
        price: 10.99,
        image: "SP4/main_images/main-image-1.jpeg",
        category: "modern",
        badge: "Popular",
        description: "Simple and elegant minimalist keychains - 16 clean designs",
        material: "Aluminum",
        dimensions: "1.8\" x 0.9\" x 0.2\"",
        weight: "0.3 oz",
        finish: "Matte",
        features: [
            "Minimalist clean designs",
            "16 different styles",
            "Lightweight aluminum",
            "Matte finish",
            "Modern simplicity"
        ]
    },
    {
        id: 5,
        name: "Custom Photo Collection",
        price: 22.99,
        oldPrice: 29.99,
        image: "SP5/main_images/main-image-1.jpeg",
        category: "custom",
        badge: "Bestseller",
        description: "Personalized photo keychains with your images - Custom designs available",
        material: "Acrylic & Metal",
        dimensions: "2\" x 2\" x 0.25\"",
        weight: "0.8 oz",
        finish: "Glossy",
        features: [
            "Custom photo printing",
            "Personalized designs",
            "High-quality acrylic",
            "Glossy protective finish",
            "Perfect for memorable gifts"
        ]
    },
    {
        id: 6,
        name: "Floral Engraved Series",
        price: 14.99,
        image: "SP6/main_images/main-image-1.jpeg",
        category: "classic",
        description: "Beautiful floral pattern engraved keychains - Nature-inspired designs",
        material: "Copper Alloy",
        dimensions: "2.1\" x 1.1\" x 0.26\"",
        weight: "0.5 oz",
        finish: "Polished",
        features: [
            "Beautiful floral patterns",
            "Nature-inspired designs",
            "Copper alloy construction",
            "Detailed engraving",
            "Elegant and feminine"
        ]
    },
    {
        id: 7,
        name: "Abstract Art Collection",
        price: 16.99,
        image: "SP7/main_images/main-image-1.jpeg",
        category: "modern",
        badge: "New",
        description: "Unique abstract art design keychains - Artistic expressions",
        material: "Mixed Metals",
        dimensions: "2.3\" x 1.2\" x 0.3\"",
        weight: "0.6 oz",
        finish: "Artistic",
        features: [
            "Abstract art designs",
            "Unique artistic expressions",
            "Mixed metal construction",
            "One-of-a-kind pieces",
            "Perfect for art lovers"
        ]
    },
    {
        id: 8,
        name: "Premium Leather Series",
        price: 19.99,
        image: "SP8/main_images/main-image-1.jpeg",
        category: "classic",
        description: "Premium leather keychains with metal accents - Luxury collection",
        material: "Genuine Leather & Metal",
        dimensions: "2.5\" x 1.5\" x 0.4\"",
        weight: "0.9 oz",
        finish: "Premium",
        features: [
            "Genuine leather construction",
            "Metal accent details",
            "Luxury feel",
            "Durable craftsmanship",
            "Sophisticated appearance"
        ]
    },
    {
        id: 9,
        name: "Crystal Luxury Collection",
        price: 24.99,
        image: "SP9/main_images/main-image-1.jpeg",
        category: "modern",
        badge: "Premium",
        description: "Elegant crystal keychains with sparkle - High-end designs",
        material: "Crystal & Silver",
        dimensions: "2\" x 1\" x 0.5\"",
        weight: "1.0 oz",
        finish: "Crystal",
        features: [
            "Genuine crystal elements",
            "Silver accents",
            "Sparkling appearance",
            "Luxury materials",
            "Perfect for special occasions"
        ]
    },
    {
        id: 10,
        name: "Personalized Name Series",
        price: 13.99,
        image: "SP10/main_images/main-image-1.jpeg",
        category: "custom",
        description: "Custom name engraved keychains - Personalized gifts",
        material: "Stainless Steel",
        dimensions: "2\" x 0.8\" x 0.2\"",
        weight: "0.4 oz",
        finish: "Engraved",
        features: [
            "Custom name engraving",
            "Personalized messages",
            "Stainless steel construction",
            "Precision engraving",
            "Perfect personalized gift"
        ]
    }
];

// Shopping Cart
let cart = [];

// Get product ID from URL
function getProductIdFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    return parseInt(urlParams.get('id')) || 1;
}

// Load product details
function loadProductDetail() {
    const productId = getProductIdFromUrl();
    const product = products.find(p => p.id === productId);
    
    if (!product) {
        window.location.href = 'products.html';
        return;
    }
    
    // Update breadcrumb
    document.getElementById('product-breadcrumb').textContent = product.name;
    
    // Load product details
    const productDetailContainer = document.getElementById('product-detail');
    productDetailContainer.innerHTML = `
        <div class="col-lg-6">
            <div class="product-gallery">
                <img src="${product.image}" alt="${product.name}" class="img-fluid rounded shadow mb-3" id="main-image">
                <div class="row">
                    <div class="col-3">
                        <img src="${product.image}" alt="${product.name}" class="img-fluid rounded thumbnail" onclick="changeImage('${product.image}')">
                    </div>
                    <div class="col-3">
                        <img src="${product.image}" alt="${product.name}" class="img-fluid rounded thumbnail" onclick="changeImage('${product.image}')">
                    </div>
                    <div class="col-3">
                        <img src="${product.image}" alt="${product.name}" class="img-fluid rounded thumbnail" onclick="changeImage('${product.image}')">
                    </div>
                    <div class="col-3">
                        <img src="${product.image}" alt="${product.name}" class="img-fluid rounded thumbnail" onclick="changeImage('${product.image}')">
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-6">
            <div class="product-info">
                <h1 class="display-5 fw-bold mb-3">${product.name}</h1>
                <div class="d-flex align-items-center mb-3">
                    <div class="text-warning me-2">
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-half"></i>
                    </div>
                    <span class="text-muted">(12 reviews)</span>
                </div>
                <div class="mb-4">
                    <span class="product-price h3">$${product.price}</span>
                    ${product.oldPrice ? `<span class="product-old-price ms-2">$${product.oldPrice}</span>` : ''}
                    ${product.badge ? `<span class="badge bg-success ms-2">${product.badge}</span>` : ''}
                </div>
                <p class="lead mb-4">${product.description}</p>
                
                <div class="mb-4">
                    <h5>Key Features:</h5>
                    <ul>
                        ${product.features.map(feature => `<li>${feature}</li>`).join('')}
                    </ul>
                </div>
                
                <div class="mb-4">
                    <div class="row">
                        <div class="col-md-6 mb-3">
                            <label class="form-label">Quantity:</label>
                            <div class="input-group">
                                <button class="btn btn-outline-secondary" type="button" onclick="decreaseQuantity()">-</button>
                                <input type="number" class="form-control text-center" id="quantity" value="1" min="1" max="10">
                                <button class="btn btn-outline-secondary" type="button" onclick="increaseQuantity()">+</button>
                            </div>
                        </div>
                        <div class="col-md-6 mb-3">
                            <label class="form-label">Category:</label>
                            <input type="text" class="form-control" value="${product.category}" readonly>
                        </div>
                    </div>
                </div>
                
                <div class="d-flex gap-3 mb-4">
                    <button class="btn btn-primary btn-lg flex-fill" onclick="addToCart(${product.id})">
                        <i class="bi bi-cart-plus me-2"></i>Add to Cart
                    </button>
                    <button class="btn btn-outline-primary btn-lg" onclick="addToWishlist(${product.id})">
                        <i class="bi bi-heart"></i>
                    </button>
                </div>
                
                <div class="product-meta">
                    <div class="row">
                        <div class="col-6">
                            <small class="text-muted"><i class="bi bi-truck me-1"></i> Free shipping on orders over $50</small>
                        </div>
                        <div class="col-6">
                            <small class="text-muted"><i class="bi bi-shield-check me-1"></i> 30-day return policy</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Update description tab
    document.getElementById('product-description').textContent = product.description;
    document.getElementById('product-features').innerHTML = product.features.map(feature => `<li>${feature}</li>`).join('');
    
    // Update specifications
    document.getElementById('product-material').textContent = product.material;
    document.getElementById('product-dimensions').textContent = product.dimensions;
    document.getElementById('product-weight').textContent = product.weight;
    document.getElementById('product-finish').textContent = product.finish;
    
    // Load related products
    loadRelatedProducts(product.category, product.id);
}

// Load related products
function loadRelatedProducts(category, currentProductId) {
    const relatedProducts = products.filter(p => p.category === category && p.id !== currentProductId).slice(0, 3);
    const relatedContainer = document.getElementById('related-products');
    
    relatedContainer.innerHTML = relatedProducts.map(product => `
        <div class="col-md-4 mb-4">
            <div class="card product-card h-100">
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}">
                    <div class="product-overlay">
                        <a href="product-detail.html?id=${product.id}" class="btn btn-primary">
                            <i class="bi bi-eye me-2"></i>View Details
                        </a>
                    </div>
                </div>
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text text-muted">${product.description}</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <span class="product-price">$${product.price}</span>
                        <button class="btn btn-outline-primary btn-sm" onclick="addToCart(${product.id})">
                            <i class="bi bi-cart-plus"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

// Change main image
function changeImage(imageSrc) {
    document.getElementById('main-image').src = imageSrc;
}

// Quantity controls
function increaseQuantity() {
    const quantityInput = document.getElementById('quantity');
    if (quantityInput.value < 10) {
        quantityInput.value = parseInt(quantityInput.value) + 1;
    }
}

function decreaseQuantity() {
    const quantityInput = document.getElementById('quantity');
    if (quantityInput.value > 1) {
        quantityInput.value = parseInt(quantityInput.value) - 1;
    }
}

// Add to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const quantity = parseInt(document.getElementById('quantity').value) || 1;
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({ ...product, quantity });
    }
    
    updateCartCount();
    showToast(`${product.name} added to cart!`, 'success');
}

// Add to wishlist
function addToWishlist(productId) {
    const product = products.find(p => p.id === productId);
    showToast(`${product.name} added to wishlist!`, 'success');
}

// Update cart count
function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    cartCount.style.display = totalItems > 0 ? 'inline-block' : 'none';
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

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    loadProductDetail();
    updateCartCount();
    
    // Setup cart navigation
    document.querySelectorAll('a[href="#cart"]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            showCart();
        });
    });
});

// Show cart (simplified version)
function showCart() {
    showToast('Cart functionality coming soon!', 'info');
}
