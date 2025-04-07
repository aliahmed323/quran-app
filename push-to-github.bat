@echo off
cd /d %~dp0
git add .
set /p msg="اكتب وصف التعديل: "
git commit -m "%msg%"
git push
pause
