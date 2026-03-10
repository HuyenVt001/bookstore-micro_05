# BookStore Microservices - Complete Application

## 🎯 Project Overview

A complete **microservices-based bookstore application** built with Django REST Framework (backend) and HTML5/CSS3/vanilla JavaScript (frontend). The system includes 12 independent microservices running on Docker, a responsive web interface, and full e-commerce functionality including user authentication, shopping cart, order processing, payment handling, and book ratings.

**Status**: ✅ **COMPLETE** - All services, APIs, and frontend pages created and functional

---

## 📊 Architecture

### 12 Microservices

```
Port 8000 → API Gateway         (Central routing hub)
Port 8001 → Customer Service    (User registration & management)
Port 8002 → Book Service        (Book catalog management)
Port 8003 → Cart Service        (Shopping cart operations)
Port 8004 → Staff Service       (Staff account management)
Port 8005 → Manager Service     (Manager account management)
Port 8006 → Catalog Service     (Extended catalog features)
Port 8007 → Order Service       (Order processing)
Port 8008 → Shipment Service    (Delivery tracking)
Port 8009 → Payment Service     (Payment processing)
Port 8010 → Rating Service      (Book reviews & ratings)
Port 8011 → Recommender Service (AI recommendations)
```

### Technology Stack

**Backend**:

- Framework: Django REST Framework
- Language: Python 3
- Database: SQLite (per service)
- ORM: Django ORM
- Containerization: Docker + Docker Compose

**Frontend**:

- HTML5, CSS3 (responsive, mobile-first)
- Vanilla JavaScript (ES6+, async/await)
- Fetch API for HTTP communication
- localStorage for session management

---

## 📁 Project Structure

```
bookstore-micro_05/
├── docker-compose.yml           (Service orchestration)
├── README.md                    (Main documentation)
├── SERVICES_SUMMARY.md          (Service endpoints & testing)
├── FRONTEND_SUMMARY.md          (Frontend architecture & pages)
│
├── api-gateway/                 (Port 8000)
│   ├── manage.py
│   ├── api_gateway/
│   ├── gateway/
│   └── requirements.txt
│
├── book-service/                (Port 8002)
│   ├── manage.py
│   ├── app/
│   └── book_service/
│
├── cart-service/                (Port 8003)
│   └── [Django project structure]
│
├── customer-service/            (Port 8001)
│   └── [Django project structure]
│
├── staff-service/               (Port 8004)
├── manager-service/             (Port 8005)
├── catalog-service/             (Port 8006)
├── order-service/               (Port 8007)
├── ship-service/                (Port 8008)
├── pay-service/                 (Port 8009)
├── comment-rate-service/        (Port 8010)
├── recommender-ai-service/      (Port 8011)
│
└── frontend/
    ├── css/
    │   └── style.css            (600+ lines, complete styling)
    ├── js/
    │   └── api.js               (400+ lines, API layer & utilities)
    └── pages/
        ├── index.html           (Home page)
        ├── books.html           (Browse books with filters)
        ├── book-detail.html     (Book details & ratings)
        ├── cart.html            (Shopping cart)
        ├── checkout.html        (Payment & shipping)
        ├── order-detail.html    (Order confirmation)
        ├── orders.html          (Order history & tracking)
        ├── register.html        (Login/Registration)
        └── admin.html           (Admin dashboard)
```

---

## 🚀 Quick Start

### 1. Start All Services

```bash
# Navigate to project directory
cd bookstore-micro_05

# Start all 12 services with Docker
docker-compose up

# Services will be available at:
# - API Gateway: http://localhost:8000
# - Customer Service: http://localhost:8001
# - Book Service: http://localhost:8002
# - Cart Service: http://localhost:8003
# - ... and so on (ports 8004-8011)
```

### 2. Open Frontend

```bash
# Option 1: Open frontend/pages/index.html directly in browser
# Example (Windows): Start -> Run -> file:///path/to/frontend/pages/index.html

# Option 2: Serve via Python (for better compatibility)
cd frontend/pages
python -m http.server 8080
# Then visit: http://localhost:8080/index.html
```

### 3. Access Admin Panel

```
Navigate to: file:///path/to/frontend/pages/admin.html
- Manage Books, Staff, Orders, and Shipments
- Add new books to catalog
- View and manage customer orders
```

---

## 📖 Frontend Pages (9 Total)

### Public Pages

1. **[index.html](frontend/pages/index.html)** - Home/Landing page with featured books
2. **[books.html](frontend/pages/books.html)** - Browse & filter entire catalog
3. **[book-detail.html](frontend/pages/book-detail.html)** - Book details & customer ratings
4. **[register.html](frontend/pages/register.html)** - User registration & login

### User Pages (Requires Login)

5. **[cart.html](frontend/pages/cart.html)** - Shopping cart management
6. **[checkout.html](frontend/pages/checkout.html)** - Payment & shipping info
7. **[order-detail.html](frontend/pages/order-detail.html)** - Order confirmation
8. **[orders.html](frontend/pages/orders.html)** - Order history & tracking

### Admin Pages

9. **[admin.html](frontend/pages/admin.html)** - Complete admin dashboard with 4 tabs:
   - 📚 Manage Books (CRUD operations)
   - 👥 Manage Staff (Add/Remove staff)
   - 📦 Manage Orders (Order management)
   - 🚚 Shipments (Delivery tracking)

---

## 🛠️ Implemented Features

### ✅ Backend Features (All 5 Requirements Completed)

- [x] **Auto-cart on registration** - Customer service creates empty cart
- [x] **Staff manages books** - Staff/Manager can add, edit, delete books
- [x] **Customer cart operations** - Full CRUD: add, view, update, remove items
- [x] **Order triggers payment & shipping** - Order service calls pay & ship services
- [x] **Customer book ratings** - 1-5 star ratings with comments

### ✅ Frontend Pages (9 Total)

- [x] Home page with featured books
- [x] Books browsing with price filter & search
- [x] Book detail page with reviews
- [x] Shopping cart with item management
- [x] Checkout with payment & shipping forms
- [x] Order confirmation page
- [x] Order history & tracking
- [x] User registration & login
- [x] Admin dashboard

### ✅ Frontend Features

- [x] Responsive design (mobile, tablet, desktop)
- [x] User authentication (login/registration)
- [x] Shopping cart functionality
- [x] Real-time filter & search
- [x] Order management
- [x] Book ratings & reviews
- [x] Admin interface
- [x] Price calculations (subtotal, tax, shipping)
- [x] Cart counter badge
- [x] Loading states & error alerts

---

## 🔌 API Integration

### All Pages Use Centralized API Layer (`api.js`)

**25+ API Functions** covering all 12 microservices:

**Customer Operations:**

```javascript
registerCustomer(data); // Port 8001
getCustomer(customerId); // Port 8001
```

**Book Operations:**

```javascript
getAllBooks(); // Port 8002
getBook(id); // Port 8002
addBook(data); // Port 8002
updateBook(id, data); // Port 8002
deleteBook(id); // Port 8002
```

**Cart Operations:**

```javascript
getCart(customerId)         // Port 8003
addToCart(...)              // Port 8003
updateCartItem(...)         // Port 8003
removeFromCart(...)         // Port 8003
clearCart(...)              // Port 8003
```

**Order Processing:**

```javascript
createOrder(...)            // Port 8007
processOrderPayment(...)    // Port 8009
arrangeShipping(...)        // Port 8008
```

**Ratings:**

```javascript
submitRating(...)           // Port 8010
getBookRating(bookId)       // Port 8010
```

---

## 🎨 Design System

### CSS Framework (600+ Lines)

**Colors:**

- Primary: #2c3e50 (dark blue)
- Secondary: #3498db (light blue)
- Success: #27ae60 (green)
- Danger: #c0392b (red)

**Responsive Breakpoints:**

- Desktop: 1200px+
- Tablet: 768px
- Mobile: 480px

**Components:**

- 20+ Reusable CSS components
- Header & Navigation
- Cards with hover effects
- Book Grid (responsive)
- Forms with validation styles
- Tables (admin)
- Modals with animations
- Alerts (success/danger/info)
- Buttons (5 variants)
- Loading spinner
- Star ratings

---

## 💾 State Management

### User Session (localStorage)

```javascript
// Session data stored in browser localStorage
customerId; // Current user's ID
customerName; // Display name
cartItems; // Number of items in cart

// Functions:
setCurrentCustomer(id, name);
getCurrentCustomerId();
clearCurrentCustomer(); // On logout
```

---

## 🔐 Authentication Flow

1. **Register Page** → `registerCustomer()` → Creates account + auto-cart
2. **Login Page** → Validates & sets session
3. **Protected Pages** → Check `getCurrentCustomerId()` → Redirect if not logged in
4. **Logout** → `clearCurrentCustomer()` → Redirects to register

---

## 📊 Testing Workflows

### Customer Workflow

```
1. Register on register.html
   ↓
2. Browse books on books.html (filters work)
   ↓
3. Click "Details" → View book-detail.html
   ↓
4. Submit rating & click "Add to Cart"
   ↓
5. View order summary in cart.html
   ↓
6. Proceed to checkout.html
   ↓
7. Enter shipping & payment info
   ↓
8. Click "Place Order" → See order-detail.html
   ↓
9. Visit orders.html to see order history
```

### Admin Workflow

```
1. Open admin.html
   ↓
2. Click "Manage Books" tab
   ↓
3. Click "Add New Book" button
   ↓
4. Fill form & submit (API call)
   ↓
5. View new book in table
   ↓
6. Use other tabs to manage staff, orders, shipments
```

---

## 🧪 Sample Test Commands

### Curl Examples

**Create Book (Staff)**:

```bash
curl -X POST http://localhost:8002/books/ \
  -H "Content-Type: application/json" \
  -d '{
    "title": "The Great Gatsby",
    "author": "F. Scott Fitzgerald",
    "price": 12.99,
    "stock": 100
  }'
```

**Register Customer**:

```bash
curl -X POST http://localhost:8001/customers/ \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "password": "secret123"
  }'
```

**Get All Books**:

```bash
curl http://localhost:8002/books/
```

**Add to Cart**:

```bash
curl -X POST http://localhost:8003/carts/1/items/ \
  -H "Content-Type: application/json" \
  -d '{
    "book_id": 1,
    "quantity": 2,
    "price": 12.99
  }'
```

---

## 📝 Documentation Files

| File                    | Purpose                                      |
| ----------------------- | -------------------------------------------- |
| **README.md**           | Main project overview (you are here)         |
| **SERVICES_SUMMARY.md** | All 12 services endpoints & testing examples |
| **FRONTEND_SUMMARY.md** | Frontend architecture & detailed page specs  |

---

## 🔄 Service Inter-communication

Services communicate via HTTP calls:

```
Customer Service (8001)
    └─→ Creates cart in Cart Service (8003) on registration

Order Service (8007)
    ├─→ Calls Payment Service (8009) to process payment
    └─→ Calls Shipment Service (8008) to arrange delivery

Frontend (pages)
    ├─→ Calls all services via api.js
    └─→ Uses API Gateway (8000) as optional central hub
```

---

## ⚙️ Configuration

### Service Ports

All ports are configurable in:

- **Backend**: `settings.py` in each service
- **Frontend**: Service URLs hardcoded in `frontend/js/api.js`

### Database

Each service has its own SQLite database:

```
[service-name]/db.sqlite3
```

### Docker

Services defined in `docker-compose.yml`

---

## 📱 Browser Support

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

Requires:

- ES6+ JavaScript support
- Fetch API
- CSS Grid & Flexbox
- localStorage

---

## 🐛 Troubleshooting

### Services won't start

```bash
# Check if ports are already in use
netstat -an | grep LISTEN

# Kill port (example for 8000)
lsof -ti:8000 | xargs kill -9
```

### Frontend can't reach API

- Check if services are running: `docker ps`
- Verify port numbers in `api.js` match `docker-compose.yml`
- Open browser console for error messages

### Cart not working

- Make sure user is registered and logged in
- Check if cart-service is running (port 8003)
- Clear browser cache & localStorage if needed

### Admin pages show no data

- Ensure book-service is running (port 8002)
- Check browser console for API errors
- Verify API endpoints in `api.js`

---

## 🎓 Learning Path

### For Beginners

1. Start with `index.html` - Simple landing page
2. Check `books.html` - Learn filtering
3. Explore `api.js` - Understand API calls
4. Study `style.css` - CSS framework

### For Full-Stack

1. Review `docker-compose.yml` - Service architecture
2. Explore service files - Django structure
3. Trace complete flow - Register → Cart → Checkout
4. Check inter-service calls - How services communicate

### For DevOps

1. Understand Docker setup
2. Service dependency ordering
3. Port mappings
4. Volume management

---

## 🚀 Future Enhancements

**High Priority:**

- [ ] Email verification on registration
- [ ] Password reset functionality
- [ ] Wishlist feature
- [ ] Advanced user profile page

**Medium Priority:**

- [ ] Real-time cart sync across tabs
- [ ] Search autocomplete
- [ ] Book recommendations (use AI service)
- [ ] User reviews with moderation

**Advanced:**

- [ ] WebSocket for real-time updates
- [ ] GraphQL API alternative
- [ ] Mobile app (React Native)
- [ ] Social features (follow authors)
- [ ] Analytics dashboard

---

## 📞 Support

### For Backend Issues

See **SERVICES_SUMMARY.md** for:

- All service endpoints
- Request/response formats
- Testing examples
- Database schema

### For Frontend Issues

See **FRONTEND_SUMMARY.md** for:

- Page specifications
- API function documentation
- Responsive design info
- Component library reference

---

## 📄 License

This is a demo/educational project for a bookstore e-commerce system using microservices architecture.

---

## 👤 Created

**Project**: BookStore Microservices Application
**Version**: 1.0
**Status**: ✅ Complete & Ready for Testing
**Date**: January 2026

---

## 📊 Project Statistics

| Metric              | Count |
| ------------------- | ----- |
| Microservices       | 12    |
| Frontend Pages      | 9     |
| API Endpoints       | 50+   |
| API Functions       | 25+   |
| CSS Components      | 20+   |
| Lines of CSS        | 600+  |
| Lines of JavaScript | 400+  |
| Total Functionality | 100%  |

---

## Quick Links

### Start Here

- [Home Page](frontend/pages/index.html)
- [Setup Instructions](#-quick-start)

### Documentation

- [Services Reference](SERVICES_SUMMARY.md)
- [Frontend Reference](FRONTEND_SUMMARY.md)

### Development

- [Docker Compose Config](docker-compose.yml)
- [API Layer](frontend/js/api.js)
- [CSS Framework](frontend/css/style.css)

---

**Happy Shopping! 📚🛒**
