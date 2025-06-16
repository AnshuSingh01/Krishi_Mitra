@echo off
REM This script installs dependencies and starts the OpenAI proxy server

REM Install dependencies
npm install express node-fetch cors

REM Start the proxy server
node openai-proxy.js 