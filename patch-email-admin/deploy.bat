@echo off
chcp 65001 >nul
cd /d D:\vitrineartisan
powershell -ExecutionPolicy Bypass -File "patch-and-deploy.ps1"
