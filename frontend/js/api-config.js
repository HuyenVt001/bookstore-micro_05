// ==================== API CONFIGURATION ====================

// API Service Endpoints
const API_BASE_URL = 'http://localhost:8000';
const CUSTOMER_SERVICE = 'http://localhost:8001';
const BOOK_SERVICE = 'http://localhost:8002';
const CART_SERVICE = 'http://localhost:8003';
const ORDER_SERVICE = 'http://localhost:8007';
const PAY_SERVICE = 'http://localhost:8009';
const RATING_SERVICE = 'http://localhost:8010';
const RECOMMENDER_SERVICE = 'http://localhost:8011';

// Toggle to use backend services or stay in mock/offline mode
// Set to false if Docker backend is NOT running to avoid connection errors
const USE_BACKEND = true;

// Local Storage Keys
const STORAGE_KEYS = {
    CUSTOMER_ID: 'customerId',
    CUSTOMER_NAME: 'customerName',
    CART_ITEMS: 'cartItems'
};
