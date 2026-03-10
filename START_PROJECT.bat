@echo off
REM BookStore Microservices - Startup Script for Windows
REM This script starts all 12 microservices and opens the frontend

echo.
echo ================================================
echo  BookStore Microservices - Starting Project
echo ================================================
echo.

REM Change to project directory
cd /d "f:\Ky2Nam4\KTTKPM\assign5\bookstore-micro_05"

echo [1/3] Starting all 12 microservices with Docker Compose...
echo         Services will be available at:
echo         - API Gateway: http://localhost:8000
echo         - Customer Service: http://localhost:8001
echo         - Book Service: http://localhost:8002
echo         - Cart Service: http://localhost:8003
echo         - Staff Service: http://localhost:8004
echo         - Manager Service: http://localhost:8005
echo         - Catalog Service: http://localhost:8006
echo         - Order Service: http://localhost:8007
echo         - Ship Service: http://localhost:8008
echo         - Pay Service: http://localhost:8009
echo         - Rating Service: http://localhost:8010
echo         - Recommender Service: http://localhost:8011
echo.

docker-compose up -d

if %ERRORLEVEL% NEQ 0 (
    echo.
    echo ERROR: Docker Compose failed. Make sure:
    echo   1. Docker Desktop is installed and running
    echo   2. You are in the correct directory
    echo   3. docker-compose.yml exists
    echo.
    pause
    exit /b 1
)

echo.
echo [2/3] Waiting for services to start (30 seconds)...
timeout /t 30 /nobreak

echo.
echo [3/3] Opening frontend in browser...
start "" "f:\Ky2Nam4\KTTKPM\assign5\bookstore-micro_05\frontend\pages\index.html"

echo.
echo ================================================
echo  Project Started Successfully!
echo ================================================
echo.
echo Frontend Home: http://localhost:8080/index.html (if serving via Python)
echo Admin Panel: file:///f:/Ky2Nam4/KTTKPM/assign5/bookstore-micro_05/frontend/pages/admin.html
echo.
echo Test Login:
echo   Email: customer1@bookstore.com
echo   Password: 123456
echo.
echo Next Steps:
echo   1. Register a new account or use demo login
echo   2. Browse books and add to cart
echo   3. Complete checkout process
echo   4. View orders and ratings
echo   5. Access admin panel to manage inventory
echo.
echo To stop services, run: docker-compose down
echo.
pause
