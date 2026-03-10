// ==================== UTILITY FUNCTIONS ====================

// Get current customer ID from localStorage
function getCurrentCustomerId() {
    return localStorage.getItem(STORAGE_KEYS.CUSTOMER_ID);
}

// Get current customer name from localStorage
function getCurrentCustomerName() {
    return localStorage.getItem(STORAGE_KEYS.CUSTOMER_NAME);
}

// Set current customer
function setCurrentCustomer(id, name) {
    localStorage.setItem(STORAGE_KEYS.CUSTOMER_ID, id);
    localStorage.setItem(STORAGE_KEYS.CUSTOMER_NAME, name);
    updateUserDisplay();
}

// Clear current customer
function clearCurrentCustomer() {
    localStorage.removeItem(STORAGE_KEYS.CUSTOMER_ID);
    localStorage.removeItem(STORAGE_KEYS.CUSTOMER_NAME);
    updateUserDisplay();
}

// Update user display in header
function updateUserDisplay() {
    const userName = getCurrentCustomerName();
    const userDisplay = document.getElementById('user-display');
    const loginBtn = document.getElementById('login-btn');
    const logoutBtn = document.getElementById('logout-btn');

    if (userDisplay && loginBtn && logoutBtn) {
        if (userName) {
            userDisplay.textContent = `Welcome, ${userName}`;
            loginBtn.style.display = 'none';
            logoutBtn.style.display = 'inline-block';
        } else {
            userDisplay.textContent = 'Guest';
            loginBtn.style.display = 'inline-block';
            logoutBtn.style.display = 'none';
        }
    }
}

// Show alert message
function showAlert(message, type = 'info') {
    const alertContainer = document.getElementById('alert-container');
    if (!alertContainer) return;

    const alert = document.createElement('div');
    alert.className = `alert alert-${type}`;
    alert.textContent = message;
    alertContainer.appendChild(alert);

    setTimeout(() => {
        alert.remove();
    }, 5000);
}

// Format price with currency
function formatPrice(price) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(price);
}

// Backwards-compatible alias (some pages use formatCurrency)
function formatCurrency(price) {
    return formatPrice(price);
}

// Simple modal helpers (used in admin.html and others)
function openModal(id) {
    const modal = document.getElementById(id);
    if (modal) {
        modal.style.display = 'block';
    }
}

function closeModal(id) {
    const modal = document.getElementById(id);
    if (modal) {
        modal.style.display = 'none';
    }
}

// Calculate average rating from ratings array
function calculateAverageRating(ratings) {
    if (!ratings || ratings.length === 0) return 0;
    const sum = ratings.reduce((acc, r) => acc + r.rating, 0);
    return (sum / ratings.length).toFixed(1);
}

// Update cart counter in header
function updateCartCounter() {
    const customerId = getCurrentCustomerId();
    if (!customerId) return;

    getCart(customerId).then(cart => {
        const cartCount = document.getElementById('cart-count');
        if (cartCount && cart && cart.items) {
            cartCount.textContent = cart.items.length;
        }
    }).catch(() => {
        // Handle silently
    });
}
