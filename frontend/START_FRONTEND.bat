@echo off
REM BookStore Frontend - Clean Startup Script
REM Kills old processes and starts fresh

echo.
echo ================================================
echo  BookStore - Starting Frontend  
echo ================================================
echo.

REM Change to project directory
cd /d "f:\Ky2Nam4\KTTKPM\assign5\bookstore-micro_05\frontend"

echo Current Directory: %cd%
echo.

REM Kill any existing Python HTTP servers on port 8080
echo Cleaning up old processes on port 8080...
for /f "tokens=5" %%a in ('netstat -ano ^| findstr ":8080"') do (
    taskkill /PID %%a /F /T 2>nul
)

REM Wait a moment
timeout /t 2 /nobreak

REM Start Python HTTP Server
echo.
echo Starting HTTP Server on http://localhost:8080
echo Serving from: %cd%
echo.

python -m http.server 8080

pause
