# 🚀 BookStore Project - Startup Guide

## Option 1: Automatic Startup (Recommended)

### Windows Users:

1. **Double-click**: `START_PROJECT.bat`
2. Wait for all services to start (2-3 minutes)
3. Frontend will automatically open in your browser
4. Done! ✅

### What This Does:

- ✅ Starts all 12 microservices via Docker
- ✅ Opens frontend home page automatically
- ✅ Displays all service endpoints
- ✅ Shows test login credentials

---

## Option 2: Manual Startup

### Step 1: Start All Services

```bash
cd f:\Ky2Nam4\KTTKPM\assign5\bookstore-micro_05

# Start all 12 services in background
docker-compose up -d

# Or start with logs visible (don't close terminal)
docker-compose up
```

### Step 2: Wait for Services to Be Ready

Services will be available at these ports:

```
Port 8000 → API Gateway
Port 8001 → Customer Service
Port 8002 → Book Service
Port 8003 → Cart Service
Port 8004 → Staff Service
Port 8005 → Manager Service
Port 8006 → Catalog Service
Port 8007 → Order Service
Port 8008 → Ship Service
Port 8009 → Pay Service
Port 8010 → Rating Service
Port 8011 → Recommender Service
```

### Step 3: Open Frontend

**Option A - Direct File:**

```
f:\Ky2Nam4\KTTKPM\assign5\bookstore-micro_05\frontend\pages\index.html
```

**Option B - Local Server (Better compatibility):**

```bash
cd f:\Ky2Nam4\KTTKPM\assign5\bookstore-micro_05\frontend\pages
python -m http.server 8080
# Then visit: http://localhost:8080/index.html
```

---

## 🎯 First Time User Workflow

### 1. Register Account

- Click "Login/Register" button
- Fill in registration form
- Create account with:
  - Name: Your name
  - Email: your@email.com
  - Password: any_password (min 6 chars)
- Auto-redirects to home page ✅

### 2. Browse Books

- Click "Books" in navigation
- Use filters: Price slider, search bar
- Click "Details" on any book
- Add ratings and reviews
- "Add Cart" to add to shopping cart

### 3. Shopping Cart

- Click "Cart" in navigation
- View all items with totals
- Update quantities, remove items
- Click "Proceed to Checkout"

### 4. Checkout

- Enter shipping address
- Select payment method
- Click "Place Order"
- See order confirmation

### 5. Track Orders

- Click "Orders" to view all orders
- Click "View Details" for order info
- "Track Shipment" to see delivery status

### 6. Admin Panel

- Open: `frontend/pages/admin.html`
- Manage Books, Staff, Orders, Shipments
- Add new books to catalog

---

## 🐛 Troubleshooting

### Docker Services Won't Start

```bash
# Check if Docker is running
docker --version
docker ps

# Check if ports are already in use
netstat -ano | findstr :8000

# Kill process on specific port (e.g., 8000)
taskkill /PID <PID> /F

# Try starting again
docker-compose up -d
```

### Port Already in Use

```bash
# Find which process is using port 8000
netstat -ano | findstr :8000

# Kill the process
taskkill /PID <PID> /F

# Or use higher ports in docker-compose.yml
```

### Frontend Can't Reach API

1. Verify services are running: `docker ps`
2. Check port numbers in `api.js` match docker-compose.yml
3. Open browser console (F12) for error details
4. Services need 30-60 seconds to fully start

### Browser Compatibility

- Chrome/Edge: ✅ Full support
- Firefox: ✅ Full support
- Safari: ✅ Full support
- Internet Explorer: ❌ Not supported (use modern browser)

---

## 📊 Check Service Status

### View Running Containers

```bash
docker ps
```

### View Service Logs

```bash
# All services
docker-compose logs

# Specific service (e.g., book-service)
docker-compose logs book-service -f

# API Gateway
docker-compose logs api-gateway -f
```

### Test Service Health

```bash
# Test if API Gateway is running
curl http://localhost:8000

# Test Books Service
curl http://localhost:8002/books/

# Test Cart Service
curl http://localhost:8003/carts/
```

---

## 🛑 Stop Project

### Stop All Services

```bash
cd f:\Ky2Nam4\KTTKPM\assign5\bookstore-micro_05
docker-compose down
```

### Stop Specific Service

```bash
docker-compose stop book-service
```

### Remove All Containers and Volumes

```bash
docker-compose down -v
```

---

## 📝 Important Notes

1. **First startup takes 2-3 minutes** - Services need time to initialize
2. **Database is SQLite** - Stored in each service folder, persists between restarts
3. **Demo accounts available** - Use demo login on registration page
4. **Admin panel** - No authentication required currently
5. **Responsive design** - Works on mobile, tablet, desktop

---

## 🔗 Quick Links

| Page     | URL                            |
| -------- | ------------------------------ |
| Home     | `frontend/pages/index.html`    |
| Books    | `frontend/pages/books.html`    |
| Cart     | `frontend/pages/cart.html`     |
| Orders   | `frontend/pages/orders.html`   |
| Register | `frontend/pages/register.html` |
| Admin    | `frontend/pages/admin.html`    |

---

## 📚 Documentation

- **PROJECT_COMPLETE.md** - Full project overview
- **SERVICES_SUMMARY.md** - All 12 service endpoints
- **FRONTEND_SUMMARY.md** - Frontend architecture

---

## ✅ You're All Set!

Your BookStore application is ready to run. Choose:

- **Quick Start**: Double-click `START_PROJECT.bat` ⚡
- **Manual Start**: Follow "Option 2" steps above

**Enjoy! 📚🛒**
