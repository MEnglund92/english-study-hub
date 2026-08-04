@echo off
cd /d "C:\Users\matti\Desktop\Education\English"
echo App running at: http://localhost:5000
echo Press Ctrl+C to stop the server.
echo.
C:\Python314\python.exe -m http.server 5000
