# 🚀 BookStore Microservices - Run Guide

## ✅ Project Status

- **Frontend HTTP Server**: ✅ **RUNNING** on `http://localhost:8080`
- **Backend Services**: Status can be checked below

---

## 📌 Frontend Access

### Direct Access

Open your browser and visit:

- **Home Page**: http://localhost:8080/pages/index.html
- **Books**: http://localhost:8080/pages/books.html
- **Admin Panel**: http://localhost:8080/pages/admin.html
- **About**: http://localhost:8080/pages/about.html

### Features Available (Offline Mode)

✅ Browse 15 mock books with full details  
✅ Register new customer accounts  
✅ Add books to cart  
✅ Update/remove items from cart  
✅ Submit and view ratings  
✅ Create mock orders with tracking  
✅ View order history  
✅ Admin dashboard with staff management

---

## 🐳 Backend Services (Docker)

### Prerequisites

1. ✅ Docker Desktop installed
2. ✅ Docker Engine running
3. ✅ docker-compose available

### 12 Microservices Available:

| Port | Service             | URL                   |
| ---- | ------------------- | --------------------- |
| 8000 | API Gateway         | http://localhost:8000 |
| 8001 | Customer Service    | http://localhost:8001 |
| 8002 | Book Service        | http://localhost:8002 |
| 8003 | Cart Service        | http://localhost:8003 |
| 8004 | Staff Service       | http://localhost:8004 |
| 8005 | Manager Service     | http://localhost:8005 |
| 8006 | Catalog Service     | http://localhost:8006 |
| 8007 | Order Service       | http://localhost:8007 |
| 8008 | Ship Service        | http://localhost:8008 |
| 8009 | Pay Service         | http://localhost:8009 |
| 8010 | Rating Service      | http://localhost:8010 |
| 8011 | Recommender Service | http://localhost:8011 |

### Start Backend with Docker

```bash
cd f:\Ky2Nam4\KTTKPM\assign5\bookstore-micro_05
docker compose up -d
```

### Check Service Status

```bash
docker compose ps
```

### View Logs

```bash
docker compose logs -f [service-name]
```

### Stop All Services

```bash
docker compose down
```

---

## 🌐 Frontend & Backend Integration

When both are running:

1. Frontend makes API calls to backend services
2. Falls back to mock data if backend unavailable
3. All features work seamlessly

### Test Workflow:

1. Visit http://localhost:8080/pages/index.html
2. Register a new account
3. Browse books (from mock or backend)
4. Add items to cart
5. Checkout and create order
6. View order tracking

---

## 📝 Test Credentials

### Demo Customer

- **Email**: customer1@bookstore.com
- **Password**: 123456

### Demo Staff

- **ID**: 1
- **Name**: John Smith
- **Role**: Staff

---

## 🔧 Troubleshooting

### Frontend not loading?

- Ensure Python HTTP server is running on port 8080
- Check firewall settings
- Try: `python -m http.server 8080 --directory frontend`

### Backend services not starting?

- Verify Docker Desktop is running
- Check Docker version: `docker --version`
- Rebuild images: `docker compose build`
- Check Docker logs: `docker compose logs`

### Port conflicts?

- Check if ports are in use: `netstat -ano | findstr :8080`
- Stop conflicting services and retry

---

## 📂 Project Structure

```
bookstore-micro_05/
├── frontend/                 # Web interface (Python HTTP server)
│   ├── pages/               # HTML pages
│   ├── js/                  # JavaScript modules
│   │   ├── api-config.js    # API configuration
│   │   ├── mock-data.js     # Mock data (15 books, etc.)
│   │   ├── customer-api.js  # Customer endpoints
│   │   ├── book-api.js      # Book endpoints
│   │   ├── cart-api.js      # Cart endpoints
│   │   ├── order-api.js     # Order endpoints
│   │   ├── rating-api.js    # Rating endpoints
│   │   └── utils.js         # Utility functions
│   └── css/                 # Stylesheets
├── api-gateway/             # API Gateway (port 8000)
├── customer-service/        # Customer Service (port 8001)
├── book-service/            # Book Service (port 8002)
├── cart-service/            # Cart Service (port 8003)
├── [8 more services]
└── docker-compose.yml       # Docker configuration
```

---

## 🎯 Quick Start Commands

**Start Everything:**

```bash
# Terminal 1 - Backend
cd f:\Ky2Nam4\KTTKPM\assign5\bookstore-micro_05
docker compose up

# Terminal 2 - Frontend (already running on 8080)
# Just open: http://localhost:8080/pages/index.html
```

**Stop Everything:**

```bash
# Stop backend
docker compose down

# Frontend HTTP server (Ctrl+C in its terminal)
```

---

## ✨ Features Implemented

### Frontend (Fully Functional)

- ✅ Responsive multi-page SPA
- ✅ Mock data integration (15 books, ratings, customers, orders)
- ✅ Offline-first architecture with graceful API fallback
- ✅ Shopping cart with real-time price calculation
- ✅ Order creation with auto-generated tracking numbers
- ✅ Customer registration and authentication
- ✅ Book ratings and reviews system
- ✅ Admin dashboard for staff management
- ✅ Modular JavaScript architecture (9 separate API modules)

### Backend (12 Microservices)

- API Gateway (Router)
- Customer Management
- Book Catalog
- Shopping Cart
- Order Processing
- Payment Service
- Shipping Service
- Rating & Reviews
- Inventory Management
- Staff Management
- Recommender AI
- Comment/Feedback

---

**Last Updated**: March 10, 2026  
**Status**: ✅ Ready for Testing
