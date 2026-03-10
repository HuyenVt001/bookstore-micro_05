// ==================== API MAIN INDEX ====================
// This file serves as the entry point that imports all separated API modules
// 
// SCRIPT LOADING ORDER in HTML:
// 1. <script src="js/api-config.js"></script>         - API endpoints and storage keys
// 2. <script src="js/mock-data.js"></script>          - Mock data (15 books, ratings, customers, carts, orders, staff)
// 3. <script src="js/utils.js"></script>              - Utility functions (session mgmt, formatting, modal helpers)
// 4. <script src="js/customer-api.js"></script>       - Customer registration and retrieval
// 5. <script src="js/book-api.js"></script>           - Book listing, retrieval, adding/updating books
// 6. <script src="js/cart-api.js"></script>           - Cart operations (add, update, remove, clear)
// 7. <script src="js/order-api.js"></script>          - Order creation, retrieval, payment processing, shipping
// 8. <script src="js/rating-api.js"></script>         - Rating submission and retrieval
// 9. <script src="js/api.js"></script>                - This main index file with additional utilities

// ==================== ADDITIONAL UTILITY FUNCTIONS ====================

// Format currency
const MOCK_BOOKS = [
    {
        id: 1,
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        price: 12.99,
        stock: 50,
        description: "A classic American novel about wealth, love, and the American Dream in the Jazz Age."
    },
    {
        id: 2,
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        price: 14.99,
        stock: 45,
        description: "A gripping tale of racial injustice and childhood innocence in the American South."
    },
    {
        id: 3,
        title: "1984",
        author: "George Orwell",
        price: 13.99,
        stock: 60,
        description: "A dystopian novel exploring totalitarianism and surveillance in a nightmarish future."
    },
    {
        id: 4,
        title: "Pride and Prejudice",
        author: "Jane Austen",
        price: 11.99,
        stock: 55,
        description: "A romantic novel about Elizabeth Bennet navigating love, marriage, and social class."
    },
    {
        id: 5,
        title: "The Catcher in the Rye",
        author: "J.D. Salinger",
        price: 10.99,
        stock: 40,
        description: "A coming-of-age story following the troubled youth Holden Caulfield in New York City."
    },
    {
        id: 6,
        title: "Wuthering Heights",
        author: "Emily Brontë",
        price: 9.99,
        stock: 35,
        description: "A passionate gothic romance set in the Yorkshire moors filled with dark secrets."
    },
    {
        id: 7,
        title: "Jane Eyre",
        author: "Charlotte Brontë",
        price: 11.99,
        stock: 48,
        description: "A feminist novel following orphan Jane as she finds love and independence."
    },
    {
        id: 8,
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        price: 15.99,
        stock: 70,
        description: "An epic fantasy adventure following Bilbo Baggins on a quest for treasure."
    },
    {
        id: 9,
        title: "Moby Dick",
        author: "Herman Melville",
        price: 13.99,
        stock: 25,
        description: "An epic maritime novel about Captain Ahab's obsessive quest for a white whale."
    },
    {
        id: 10,
        title: "Brave New World",
        author: "Aldous Huxley",
        price: 12.99,
        stock: 42,
        description: "A dystopian vision of a seemingly perfect future society based on pleasure and conformity."
    },
    {
        id: 11,
        title: "The Lord of the Rings",
        author: "J.R.R. Tolkien",
        price: 24.99,
        stock: 65,
        description: "An epic fantasy trilogy following Frodo's journey to destroy the One Ring."
    },
    {
        id: 12,
        title: "Frankenstein",
        author: "Mary Shelley",
        price: 10.99,
        stock: 38,
        description: "A gothic novel exploring the dangers of unchecked scientific ambition through Victor Frankenstein's tale."
    },
    {
        id: 13,
        title: "Dune",
        author: "Frank Herbert",
        price: 18.99,
        stock: 52,
        description: "A science fiction epic set on the desert planet Arrakis with complex politics and mysticism."
    },
    {
        id: 14,
        title: "The Chronicles of Narnia",
        author: "C.S. Lewis",
        price: 16.99,
        stock: 44,
        description: "A series of fantasy adventures in the magical land of Narnia accessible through a wardrobe."
    },
    {
        id: 15,
        title: "The Picture of Dorian Gray",
        author: "Oscar Wilde",
        price: 9.99,
        stock: 33,
        description: "A dark tale of vanity and corruption as a man remains eternally young while his portrait ages."
    }
];

// Mock Ratings Data
const MOCK_RATINGS = {
    1: [
        { id: 1, rating: 5, comment: "A masterpiece! Simply beautiful prose and compelling characters.", date: "2026-01-20" },
        { id: 2, rating: 4, comment: "Great classic, but a bit slow at times.", date: "2026-01-15" }
    ],
    2: [
        { id: 3, rating: 5, comment: "Essential reading. Powerful and moving story about justice and courage.", date: "2026-01-18" },
        { id: 4, rating: 5, comment: "Absolutely brilliant!", date: "2026-01-10" },
        { id: 5, rating: 4, comment: "Very good book, tackles important themes.", date: "2026-01-05" }
    ],
    3: [
        { id: 6, rating: 5, comment: "Dystopian vision that's still relevant today. Chilling and unforgettable.", date: "2026-02-01" }
    ],
    4: [
        { id: 7, rating: 5, comment: "Romantic and witty. Austen is a genius!", date: "2026-02-05" },
        { id: 8, rating: 4, comment: "Classic love story with great humor.", date: "2026-01-28" }
    ]
};

// Mock Customers Data
const MOCK_CUSTOMERS = {
    1: { id: 1, name: "John Doe", email: "john@example.com" },
    2: { id: 2, name: "Jane Smith", email: "jane@example.com" }
};

// Mock Cart Data
const MOCK_CARTS = {
    1: {
        id: 1,
        customer_id: 1,
        total_price: 39.97,
        items: [
            { id: 1, book_id: 1, title: "The Great Gatsby", quantity: 1, price: 12.99 },
            { id: 2, book_id: 2, title: "To Kill a Mockingbird", quantity: 1, price: 14.99 },
            { id: 3, book_id: 3, title: "1984", quantity: 1, price: 13.99 }
        ]
    }
};

// Mock Orders Data
const MOCK_ORDERS = {
    1: {
        id: 1,
        customer_id: 1,
        date: "2026-01-15",
        status: "Delivered",
        total_price: 45.99,
        items: 3,
        tracking: "TRK001234567"
    },
    2: {
        id: 2,
        customer_id: 1,
        date: "2026-01-10",
        status: "Shipped",
        total_price: 32.50,
        items: 2,
        tracking: "TRK001234568"
    }
};

// Mock Staff & Managers
const MOCK_STAFF = [
    { id: 1, name: "John Smith", email: "john.smith@bookstore.com", role: "Staff", status: "Active" },
    { id: 2, name: "Sarah Johnson", email: "sarah.j@bookstore.com", role: "Manager", status: "Active" }
];

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
        console.log('Using mock registration (backend unavailable)');
        // Create a new customer locally
        const newId = Math.floor(Math.random() * 100000) + 100;
        const newCustomer = { id: newId, name, email };
        MOCK_CUSTOMERS[newId] = newCustomer;
        // Auto-create empty cart for new customer
        MOCK_CARTS[newId] = { id: newId, customer_id: newId, total_price: 0, items: [] };
        return newCustomer;
    }
}

async function getCustomer(customerId) {
    try {
        const response = await fetch(`${CUSTOMER_SERVICE}/customers/${customerId}/`);
        if (!response.ok) throw new Error('Customer not found');
        const data = await response.json();
        return data;
    } catch (error) {
        console.log('Using mock customer data (backend unavailable)');
        return MOCK_CUSTOMERS[customerId] || { id: customerId, name: 'Unknown', email: 'unknown@example.com' };
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
        console.log('Using mock books data (backend unavailable)');
        return MOCK_BOOKS;
    }
}

async function getBook(bookId) {
    try {
        const response = await fetch(`${BOOK_SERVICE}/books/${bookId}/`);
        if (!response.ok) throw new Error('Book not found');
        const data = await response.json();
        return data;
    } catch (error) {
        console.log('Using mock book data (backend unavailable)');
        const book = MOCK_BOOKS.find(b => b.id === parseInt(bookId));
        if (book) return book;
        throw error;
    }
    throw error;
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
        console.log('Using mock cart data (backend unavailable)');
        // Return mock cart for the customer
        return MOCK_CARTS[customerId] || { id: customerId, customer_id: customerId, total_price: 0, items: [] };
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
        console.log('Using mock cart (backend unavailable), adding item locally');
        // Use mock cart
        if (!MOCK_CARTS[customerId]) {
            MOCK_CARTS[customerId] = { id: customerId, customer_id: customerId, total_price: 0, items: [] };
        }
        const book = MOCK_BOOKS.find(b => b.id === bookId);
        const newItem = {
            id: Date.now(),
            book_id: bookId,
            title: book?.title || `Book ${bookId}`,
            quantity: quantity,
            price: price
        };
        MOCK_CARTS[customerId].items.push(newItem);
        MOCK_CARTS[customerId].total_price += price * quantity;
        return MOCK_CARTS[customerId];
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
        console.log('Using mock cart (backend unavailable), updating item locally');
        if (MOCK_CARTS[customerId]) {
            const item = MOCK_CARTS[customerId].items.find(i => i.id === itemId);
            if (item) {
                const priceDiff = (quantity - item.quantity) * item.price;
                item.quantity = quantity;
                MOCK_CARTS[customerId].total_price += priceDiff;
            }
        }
        return MOCK_CARTS[customerId];
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
        console.log('Using mock cart (backend unavailable), removing item locally');
        if (MOCK_CARTS[customerId]) {
            const item = MOCK_CARTS[customerId].items.find(i => i.id === itemId);
            if (item) {
                MOCK_CARTS[customerId].total_price -= item.quantity * item.price;
                MOCK_CARTS[customerId].items = MOCK_CARTS[customerId].items.filter(i => i.id !== itemId);
            }
        }
        return MOCK_CARTS[customerId];
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
        console.log('Using mock cart (backend unavailable), clearing cart locally');
        if (MOCK_CARTS[customerId]) {
            MOCK_CARTS[customerId].items = [];
            MOCK_CARTS[customerId].total_price = 0;
        }
        return MOCK_CARTS[customerId];
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
        console.log('Using mock orders (backend unavailable), creating locally');
        const newId = Math.floor(Math.random() * 100000) + 1000;
        const newOrder = {
            id: newId,
            customer_id: customerId,
            date: new Date().toISOString().split('T')[0],
            status: 'Processing',
            total_price: totalAmount,
            items: MOCK_CARTS[customerId]?.items?.length || 0,
            tracking: `TRK${String(newId).padStart(12, '0')}`
        };
        MOCK_ORDERS[newId] = newOrder;
        return newOrder;
    }
}

async function getOrder(orderId) {
    try {
        const response = await fetch(`${ORDER_SERVICE}/orders/${orderId}/`);
        if (!response.ok) throw new Error('Order not found');
        const data = await response.json();
        return data;
    } catch (error) {
        console.log('Using mock order data (backend unavailable)');
        return MOCK_ORDERS[orderId] || { id: orderId, status: 'Unknown' };
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
        console.log('Using mock payment (backend unavailable), processing locally');
        if (MOCK_ORDERS[orderId]) {
            MOCK_ORDERS[orderId].status = 'Payment Processed';
        }
        return { success: true, message: 'Mock payment processed' };
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
        console.log('Using mock shipping (backend unavailable), arranging locally');
        if (MOCK_ORDERS[orderId]) {
            MOCK_ORDERS[orderId].status = 'Shipped';
        }
        return { success: true, message: 'Mock shipping arranged' };
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
        console.log('Using mock ratings (backend unavailable), saving locally');
        // Save rating to mock data
        if (!MOCK_RATINGS[bookId]) {
            MOCK_RATINGS[bookId] = [];
        }
        const newRating = {
            id: MOCK_RATINGS[bookId].length + 1,
            rating,
            comment,
            date: new Date().toISOString().split('T')[0]
        };
        MOCK_RATINGS[bookId].push(newRating);
        return newRating;
    }
}

async function getBookRating(bookId) {
    try {
        const response = await fetch(`${RATING_SERVICE}/books/${bookId}/average-rating/`);
        if (!response.ok) throw new Error('Failed to fetch rating');
        const data = await response.json();
        return data;
    } catch (error) {
        console.log('Using mock ratings data (backend unavailable)');
        // Return mock ratings for the book
        const ratings = MOCK_RATINGS[bookId] || [];
        return ratings;
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
