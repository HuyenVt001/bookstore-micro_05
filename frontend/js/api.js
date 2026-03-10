// API Configuration
const API_BASE_URL = 'http://localhost:8000';
const CUSTOMER_SERVICE = 'http://localhost:8001';
const BOOK_SERVICE = 'http://localhost:8002';
const CART_SERVICE = 'http://localhost:8003';
const ORDER_SERVICE = 'http://localhost:8007';
const PAY_SERVICE = 'http://localhost:8009';
const RATING_SERVICE = 'http://localhost:8010';
const RECOMMENDER_SERVICE = 'http://localhost:8011';

// Local Storage Keys
const STORAGE_KEYS = {
    CUSTOMER_ID: 'customerId',
    CUSTOMER_NAME: 'customerName',
    CART_ITEMS: 'cartItems'
};

// ==================== API CALLS ====================

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

// ==================== CUSTOMER API ====================

async function registerCustomer(name, email) {
    try {
        const response = await fetch(`${CUSTOMER_SERVICE}/customers/`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email })
        });

        if (!response.ok) throw new Error('Registration failed');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Register error:', error);
        throw error;
    }
}

async function getCustomer(customerId) {
    try {
        const response = await fetch(`${CUSTOMER_SERVICE}/customers/${customerId}/`);
        if (!response.ok) throw new Error('Customer not found');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Get customer error:', error);
        throw error;
    }
}

// ==================== BOOK API ====================

async function getAllBooks() {
    try {
        const response = await fetch(`${BOOK_SERVICE}/books/`);
        if (!response.ok) throw new Error('Failed to fetch books');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Get books error:', error);
        throw error;
    }
}

async function getBook(bookId) {
    try {
        const response = await fetch(`${BOOK_SERVICE}/books/${bookId}/`);
        if (!response.ok) throw new Error('Book not found');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Get book error:', error);
        throw error;
    }
}

async function addBook(bookData) {
    try {
        const response = await fetch(`${BOOK_SERVICE}/books/`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(bookData)
        });

        if (!response.ok) throw new Error('Failed to add book');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Add book error:', error);
        throw error;
    }
}

async function updateBook(bookId, bookData) {
    try {
        const response = await fetch(`${BOOK_SERVICE}/books/${bookId}/`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(bookData)
        });

        if (!response.ok) throw new Error('Failed to update book');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Update book error:', error);
        throw error;
    }
}

// ==================== CART API ====================

async function getCart(customerId) {
    try {
        const response = await fetch(`${CART_SERVICE}/carts/${customerId}/`);
        if (!response.ok) throw new Error('Cart not found');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Get cart error:', error);
        throw error;
    }
}

async function addToCart(customerId, bookId, quantity, price) {
    try {
        const response = await fetch(`${CART_SERVICE}/carts/${customerId}/add/`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ book_id: bookId, quantity, price })
        });

        if (!response.ok) throw new Error('Failed to add to cart');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Add to cart error:', error);
        throw error;
    }
}

async function updateCartItem(customerId, itemId, quantity) {
    try {
        const response = await fetch(`${CART_SERVICE}/carts/${customerId}/items/${itemId}/`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ quantity })
        });

        if (!response.ok) throw new Error('Failed to update cart item');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Update cart item error:', error);
        throw error;
    }
}

async function removeFromCart(customerId, itemId) {
    try {
        const response = await fetch(`${CART_SERVICE}/carts/${customerId}/items/${itemId}/remove/`, {
            method: 'DELETE'
        });

        if (!response.ok) throw new Error('Failed to remove item from cart');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Remove from cart error:', error);
        throw error;
    }
}

async function clearCart(customerId) {
    try {
        const response = await fetch(`${CART_SERVICE}/carts/${customerId}/clear/`, {
            method: 'DELETE'
        });

        if (!response.ok) throw new Error('Failed to clear cart');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Clear cart error:', error);
        throw error;
    }
}

// ==================== ORDER API ====================

async function createOrder(customerId, totalAmount) {
    try {
        const response = await fetch(`${ORDER_SERVICE}/orders/`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ customer_id: customerId, total_amount: totalAmount })
        });

        if (!response.ok) throw new Error('Failed to create order');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Create order error:', error);
        throw error;
    }
}

async function getOrder(orderId) {
    try {
        const response = await fetch(`${ORDER_SERVICE}/orders/${orderId}/`);
        if (!response.ok) throw new Error('Order not found');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Get order error:', error);
        throw error;
    }
}

async function processOrderPayment(orderId, method) {
    try {
        const response = await fetch(`${ORDER_SERVICE}/orders/${orderId}/payment/`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ method })
        });

        if (!response.ok) throw new Error('Payment processing failed');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Process payment error:', error);
        throw error;
    }
}

async function arrangeShipping(orderId, address) {
    try {
        const response = await fetch(`${ORDER_SERVICE}/orders/${orderId}/shipping/`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ address })
        });

        if (!response.ok) throw new Error('Shipping arrangement failed');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Arrange shipping error:', error);
        throw error;
    }
}

// ==================== RATING API ====================

async function submitRating(bookId, customerId, rating, comment) {
    try {
        const response = await fetch(`${RATING_SERVICE}/ratings/`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ book_id: bookId, customer_id: customerId, rating, comment })
        });

        if (!response.ok) throw new Error('Failed to submit rating');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Submit rating error:', error);
        throw error;
    }
}

async function getBookRating(bookId) {
    try {
        const response = await fetch(`${RATING_SERVICE}/books/${bookId}/average-rating/`);
        if (!response.ok) throw new Error('Failed to fetch rating');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Get rating error:', error);
        throw error;
    }
}

// ==================== UTILITY FUNCTIONS ====================

// Show alert message
function showAlert(message, type = 'info') {
    const alertContainer = document.getElementById('alert-container');
    if (!alertContainer) return;

    const alert = document.createElement('div');
    alert.className = `alert alert-${type}`;
    alert.innerHTML = `
        <strong>${type.toUpperCase()}</strong>: ${message}
        <button onclick="this.parentElement.style.display='none';" style="float:right;border:none;background:none;cursor:pointer;font-size:1.2rem;">×</button>
    `;

    alertContainer.appendChild(alert);

    setTimeout(() => {
        alert.style.display = 'none';
    }, 5000);
}

// Format currency
function formatCurrency(amount) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(amount);
}

// Format date
function formatDate(dateString) {
    return new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }).format(new Date(dateString));
}

// Loading state
function setLoading(elementId, isLoading) {
    const element = document.getElementById(elementId);
    if (!element) return;

    if (isLoading) {
        element.disabled = true;
        element.innerHTML = '<span class="spinner"></span> Loading...';
    } else {
        element.disabled = false;
    }
}

// Modal functions
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('active');
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('active');
    }
}

// Cart counter update
async function updateCartCounter() {
    const customerId = getCurrentCustomerId();
    if (!customerId) return;

    try {
        const cart = await getCart(customerId);
        const counter = document.getElementById('cart-count');
        if (counter) {
            const itemCount = cart.items.length;
            counter.textContent = itemCount;
            counter.style.display = itemCount > 0 ? 'flex' : 'none';
        }
    } catch (error) {
        console.error('Error updating cart counter:', error);
    }
}

// Page initialization
document.addEventListener('DOMContentLoaded', () => {
    updateUserDisplay();
    updateCartCounter();
});

// Close modal when clicking outside
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
        e.target.classList.remove('active');
    }
});
